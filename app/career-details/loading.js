import Image from "next/image";
import React from "react";
import loadingGif from "@/public/assets//loadingPage/loading.gif";

const loading = () => {
  return (
    <div className="relative z-[110]">
      <Image
        src={loadingGif}
        className="w-screen h-screen"
        alt="loading..."
      ></Image>
    </div>
  );
};

export default loading;
