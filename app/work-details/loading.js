import Image from "next/image";
import React from "react";
import loadingGif from "@/public/assets//loadingPage/loading.gif";

const loading = () => {
  return (
    <div className="relative z-[110] w-screen h-screen">
      <Image src={loadingGif} className="" alt="loading..."></Image>
    </div>
  );
};

export default loading;
