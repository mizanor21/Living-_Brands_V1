"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partner = () => {
  const [partnershipData, setPartnershipData] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://living-brands-admin.vercel.app/api/partnership",
        { next: { revalidate: 10 } }
      );
      const data = await res.json();
      setPartnershipData(data);
    };

    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();

    const cursorPosition = clientX - left;
    const leftBoundary = width * 0.3; // Left 30% area
    const rightBoundary = width * 0.7; // Right 30% area

    setShowLeftArrow(cursorPosition < leftBoundary);
    setShowRightArrow(cursorPosition > rightBoundary);
  };

  const handleMouseLeave = () => {
    setShowLeftArrow(false);
    setShowRightArrow(false);
  };

  return (
    <div
      className="bg-white pb-10 lg:pb-32 relative z-[110] rounded-b-[20px] lg:rounded-b-[40px] font-sora"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-[5%] relative">
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots={false}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          containerClass="carousel-container"
          itemClass="carousel-item"
          customLeftArrow={
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-500 text-white p-3 rounded-full transition-opacity duration-300 ${
                showLeftArrow ? "opacity-100" : "opacity-0"
              }`}
            >
              &lt;
            </div>
          }
          customRightArrow={
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-500 text-white p-3 rounded-full transition-opacity duration-300 ${
                showRightArrow ? "opacity-100" : "opacity-0"
              }`}
            >
              &gt;
            </div>
          }
        >
          {partnershipData?.map((partner, index) => (
            <div key={index} className="text-center">
              <img
                width={200}
                height={200}
                src={partner?.logo}
                alt={`${partner?.name} Logo`}
                className="mx-auto mb-2 h-16 object-contain saturate-0 hover:saturate-100"
              />
              <h3 className="text-[20px] tracking-tighter font-bold text-black mb-2 mt-10">
                {partner?.name}
              </h3>
              <p className="text-black opacity-75 text-[15px] font-[400] mb-2">
                {partner?.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Partner;
