"use client";
import Image from "next/image";
import React, { useState } from "react";

const NewsCentre = () => {
  const pressReleasesData = [
    {
      id: 1,
      image: "https://via.placeholder.com/600x400",
      text: "This is Press the first card.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/600x400",
      text: "This is Press the second card.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/600x400",
      text: "This is Press the third card.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/600x400",
      text: "This is Press the third card.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/600x400",
      text: "This is Press the third card.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/600x400",
      text: "This is Press the third card.",
    },
  ];

  const mediaFeaturesData = [
    {
      id: 1,
      image: "https://via.placeholder.com/600x400",
      text: "This is Media the first card.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/600x400",
      text: "This is Media the second card.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/600x400",
      text: "This is Media the third card.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/600x400",
      text: "This is Media the third card.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/600x400",
      text: "This is Media the third card.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/600x400",
      text: "This is Media the third card.",
    },
  ];

  const [activeButton, setActiveButton] = useState("button1");
  const [data, setData] = useState(pressReleasesData);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "button1") {
      setData(pressReleasesData);
    } else {
      setData(mediaFeaturesData);
    }
  };

  return (
    <div className="flex flex-col px-4 lg:px-[100px] font-[sora]">
      <div className="relative border-b border-gray-400 py-16 lg:py-[100px]">
        <h1 className="text-3xl lg:text-6xl text-center font-bold mb-6 lg:mb-10">
          Schbang in the news
        </h1>

        {/* Buttons stay at the side */}
        <button
          className={`absolute right-5 mr-36 lg:mr-44   bottom-5 outline rounded-full py-1 px-4 lg:px-5 text-sm lg:text-lg ${
            activeButton === "button1"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleButtonClick("button1")}
        >
          Press Releases
        </button>
        <button
          className={`absolute right-5 bottom-5 outline rounded-full py-1 px-4 lg:px-5 text-sm lg:text-lg ${
            activeButton === "button2"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleButtonClick("button2")}
        >
          Media Features
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(({ id, image, text }) => (
          <div
            key={id}
            className="flex flex-col justify-center px-4 items-center w-full sm:w-80 lg:w-96 mx-auto bg-[#F9F9F9] overflow-hidden"
          >
            <Image
              width={200}
              height={200}
              className="w-full rounded h-64 object-cover"
              src={image}
              alt="news"
            />
            <div className="p-4 text-center">
              <p className="text-gray-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCentre;
