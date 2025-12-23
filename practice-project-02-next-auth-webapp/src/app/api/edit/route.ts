import authOptions from "@/lib/auth";
import uploadOnCloudinary from "@/lib/cloudinary";
import connectDb from "@/lib/db";
import User from "@/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);

    if (!session || !session.user.email || !session.user.id) {
      return NextResponse.json(
        {
          message: "user does not have session",
        },
        { status: 400 }
      );
    }

    const formData = await request.formData();
    const name = formData.get("name") as string;
    // const file = formData.get("file") as Blog | null;
    const file = formData.get("file") as File | null;

    let imageUrl: string | null | undefined;

    if (file) {
      imageUrl = await uploadOnCloudinary(file);
    }

    const user = await User.findByIdAndUpdate(session.user.id, {
      name,
      image: imageUrl,
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "user not found",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message:
          "error while uploading profile image to cloud or updating the userprofile",
      },
      { status: 500 }
    );
  }
}
