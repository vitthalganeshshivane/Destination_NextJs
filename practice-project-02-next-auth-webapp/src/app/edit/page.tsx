"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";

function page() {
  const [name, setName] = useState("");
  const [frontendImg, setFrontendImg] = useState("");
  const [backendImg, setBackendImg] = useState<File | null>();

  const { data } = useSession();
  const imageInput = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length == 0) {
      return;
    }
    const file = files[0];
    setBackendImg(file);
    setFrontendImg(URL.createObjectURL(file));
  };

  //   useEffect(() => {
  //     if (data) {
  //       setName(data?.user.name as string);
  //       setFrontendImg(data?.user?.image as string);
  //     }
  //   });

  useEffect(() => {
    if (data?.user?.name) {
      setName(data?.user?.name ?? "");
      setFrontendImg(data.user.image ?? "");
    }
  }, [data]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Edit Profile
        </h1>
        <form className="space-y-2 flex flex-col w-full items-center">
          <div
            className="w-[200px] h-[200px] rounded-full border-2 flex justify-center items-center border-white transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden relative"
            onClick={() => imageInput.current?.click()}
          >
            <input
              type="file"
              accept="image/*"
              hidden
              ref={imageInput}
              onChange={handleImage}
            />
            {frontendImg ? (
              <Image src={frontendImg} fill alt="userprofile" />
            ) : (
              <CgProfile size={22} />
            )}
          </div>
          <div className="w-full">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border-b border-white py-2 px-1 bg-black text-white outline-none placeholder-gray-400"
              value={name}
              onChange={(e: React.ChangeEvent) => setName(e.target.value)}
            />
          </div>
          <button className="w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
