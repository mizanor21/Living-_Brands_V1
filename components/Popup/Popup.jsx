import Image from "next/image";
import Link from "next/link";
import React from "react";
import confetti from "@/public/assets/logo/confetti.gif";

const Popup = () => {
  return (
    <div className="font-sora flex justify-center items-center w-full absolute px-2 py-2">
      <Image src={confetti} width={30} alt="confetti"></Image>
      <p className="font-[400] text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[18px]">
        &quot;Addikt is now part of the Living Brands Network.{" "}
        <Link href={"/news-center"} className="text-[#ff6428]">
          Read More Here.
        </Link>
        &quot;
      </p>
      <style jsx>{`
        @media (min-width: 1700px) and (max-width: 2000px) {
          p {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default Popup;
