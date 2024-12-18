import Image from "next/image";
import Link from "next/link";
import React from "react";
import confetti from "@/public/assets/logo/confetti.gif";

const Popup = () => {
  return (
    <div className="font-sora absolute flex justify-center items-center w-full z-[220] px-2 py-2">
      <Image src={confetti} width={30} alt="confetti"></Image>
      <p className="font-[400] text-[11px] lg:text-[18px] text-center">
        &quot;Addikt is now part of the Living Brands Network.{" "}
        <Link href={"/news-center"} className="text-[#ff6428]">
          Read More Here.
        </Link>
        &quot;
      </p>
    </div>
  );
};

export default Popup;
