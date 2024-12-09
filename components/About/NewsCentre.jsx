"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useItemsData } from "../Custom/DataFetch";
import ButtonEffect from "@/app/button/page";

const SkeletonLoader = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 md:gap-y-20 relative z-[120] bg-white px-[5%] py-10">
    {[1, 2, 3, 4, 5, 6].map((key) => (
      <div key={key} className="space-y-3">
        {/* Image skeleton */}
        <div className="h-72 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-pulse"></div>

        {/* Subtitle skeleton */}
        <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md animate-pulse"></div>
      </div>
    ))}
  </div>
);

const NewsCentre = () => {
  const { data: workData, isLoading, error } = useItemsData();

  const [hoveredId, setHoveredId] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event, id) => {
    const offsetX = event.clientX;
    const offsetY = event.clientY;

    setPosition({ x: offsetX, y: offsetY });
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const scrollAnimation = {
    position: "absolute",
    whiteSpace: "nowrap",
    animation: "scroll 2s linear infinite",
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <div className="text-center text-red-500">Failed to load data</div>;
  }

  return (
    <div className="flex flex-col px-4 lg:px-[100px] font-[sora] bg-white relative z-[120] py-10 lg:py-20 rounded-b-[20] lg:rounded-b-[40]">
      <div className="">
        <h2 className="text-2xl md:text-4xl lg:text-[48px] text-center leading-10 text-[#125b5c] font-bold pb-10 lg:pb-20">
          Living Brands In The News
        </h2>
        <div className="md:flex justify-end my-5 space-y-1 md:space-y-0">
          <ButtonEffect>Press Releases</ButtonEffect>
          <span className="divider divider-horizontal divider-start divider-neutral"></span>
          <ButtonEffect>Media Features</ButtonEffect>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 md:gap-y-20 py-8">
        {workData?.map((item) => (
          <Link key={item._id} href={`works/${item._id}`}>
            <div
              className="relative"
              onMouseMove={(e) => handleMouseMove(e, item._id)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={item.img}
                alt=""
                width={600}
                height={100}
                className="rounded-xl"
              />
              <p className="text-[14px] lg:text-[16px] mt-3">
                {item.detailsTitle}
              </p>
              <style>{keyframes}</style>

              {hoveredId === item._id && (
                <div
                  className="w-36 h-10 fixed z-[100]"
                  style={{
                    top: `${position.y - 30}px`,
                    left: `${position.x}px`,
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="bg-[#125b5c] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                    <p style={scrollAnimation}>View More</p>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsCentre;
