import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>about page</h1>

      <Image src={`/vercel.svg`} alt="vercel" width={200} height={200} />
    </div>
  );
};

export default page;
