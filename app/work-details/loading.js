import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="relative z-[110] w-screen h-screen">
      <Image
        src="/loading/loading.gif"
        width={100}
        height={100}
        className=""
        alt="loading..."
      ></Image>
    </div>
  );
};

export default loading;
