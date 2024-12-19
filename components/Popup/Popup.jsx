import Image from "next/image";
import Link from "next/link";
import React from "react";
import confetti from "@/public/assets/logo/confetti.gif";

const Popup = () => {
  return (
    <div className="font-sora md:sticky top-0 flex justify-center items-center w-full relative z-[220] px-2 py-2">
      <Image src={confetti} width={30} alt="confetti"></Image>
      <p className="font-[400] text-[0.7rem] lg:text-[1.13rem]">
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
