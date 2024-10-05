import React from "react";
import TimeImg from "@/public/assets/logo/star.png";
import Image from "next/image";
import "./TimeSchbang.css";

const TimeSchbang = () => {
  const items = Array.from({ length: 200 }, (_, i) => i);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex items-center gap-5 pb-1 pt-0 lg:pt-10 animate-marquee">
        {items.map((_, index) => (
          <React.Fragment key={index}>
            <Image
              src={TimeImg}
              alt="star images"
              className="w-10 animate-spin "
            />
            <h1
              className="font-sans"
              style={{
                fontSize: "30px",
                fontWeight: 900,
                color: "transparent",
                WebkitTextStroke: "1px #125b5c",
              }}
            >
              IT&apos;S TIME TO CREATE A LIVING BRANDS
            </h1>
          </React.Fragment>
        ))}
        {/* Duplicate content for continuous effect */}
        {items.map((_, index) => (
          <React.Fragment key={index}>
            <Image
              src={TimeImg}
              alt="star images"
              className="w-10 animate-spin"
            />
            <h1
              className="font-sans"
              style={{
                fontSize: "30px",
                fontWeight: 900,
                color: "transparent",
                WebkitTextStroke: "1px #125b5c",
              }}
            >
              IT&apos;S TIME TO CREATE A LIVING BRANDS
            </h1>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TimeSchbang;
