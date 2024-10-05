"use client";
import React, { useState } from "react";
import Items from "../Items/Items";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const MediaSolutions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  // Array of items with dynamic titles and contents
  const data = [
    {
      title: "Media Buying",
      content:
        "We meticulously identify high-impact advertising placements across a diverse digital landscape, encompassing websites, social media platforms, mobile apps, and over-the-top (OTT) streaming services. Our in-depth analysis pinpoints opportunities to maximize brand visibility and reach the target audience effectively. We leverage data-driven insights to select placements that align with campaign objectives and deliver optimal ROI.",
    },
    {
      title: "Media Planning",
      content:
        "We translate identified opportunities into data-driven media strategies tailored to your specific goals. Our team meticulously plans campaigns that optimize budget, reach, and engagement, ensuring maximum ROI within your desired timeframe.",
    },
    {
      title: "Performance Marketing",
      content:
        "We excel at maximizing ROI on both modest and substantial media budgets. Our experience spans multiple platforms, including Meta, Google, and streaming services.",
    },
    {
      title: "MarTech for Media",
      content:
        "Our commitment to innovation drives us to experiment with new technologies alongside partners like Google and Adobe, unlocking untapped opportunities to enhance customer interactions and deliver exceptional value.",
    },
  ];

  return (
    <section className="px-[5%] py-12 bg-white relative z-[110] rounded-[70px] font-sora">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 lg:mb-20">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] text-[#125b5c] font-bold mb-10">
            Media Solutions
          </h2>
          <p className="text-[18px] font-normal  text-black mb-5">
            Our Media Sciences department specializes in implementing and
            managing paid marketing strategies to increase your brand awareness,
            market share and business revenue.
          </p>
          <hr className="h-[3px] bg-black mb-5 max-w-52" />
          <p className="font-[600] text-[18px] text-[#125b5c] mb-10">
            Proud to be collaborating with media industry leaders to power
            growth for brands!
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-4 items-center mb-10 gap-y-5 px-7 md:px-0">
            {/* Media Logos */}
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/dtscRSmf/meta.png"
              alt="P&G"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/rFyFy9sS/Screenshot-from-2024-09-28-16-59-59.png"
              alt="Glow & Lovely"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/ZRGxLgdy/logo6.png"
              alt="uno"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/fWfRhPzz/Screenshot-from-2024-09-28-16-59-21.png"
              alt="Jio"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/02t5zJKh/Screenshot-from-2024-09-28-16-58-13.png"
              alt="Kotak"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/SxmLxc4C/logo9.png"
              alt="uno"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/qv4QY9Zs/logo2.webp"
              alt="Garnier Men"
              className="h-20 mb-5 object-contain saturate-0 hover:saturate-100"
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center text-[17px] py-4 font-[700] text-[#125b5c] text-left"
                onClick={() => toggle(index)}
              >
                {item.title}
                {open === index ? (
                  <FaChevronUp className="ml-2 text-gray-500" />
                ) : (
                  <FaChevronDown className="ml-2 text-gray-500" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
                  open === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="py-2 text-black pb-7 text-[14px] font-[400]">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Items />
    </section>
  );
};

export default MediaSolutions;
