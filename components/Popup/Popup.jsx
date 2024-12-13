import Link from "next/link";
import React from "react";

const Popup = () => {
  return (
    <div className="font-sora absolute flex justify-center items-center w-full z-[220] px-2 py-2">
      <p className="font-[400] text-[13px] lg:text-[18px] text-center">
        &quot;Addikt is now part of the Living Brands Network.{" "}
        <Link href={"/news-center"} className="text-[#cf932a]">
          Read More Here.
        </Link>
        &quot;
      </p>
    </div>
  );
};

export default Popup;
