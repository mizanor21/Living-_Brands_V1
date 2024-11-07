"use client";
import React, { useState, useEffect } from "react";
import Items from "../Items/Items";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import SkeletonLoader from "../Custom/SkeletonLoader"; // Assuming you have a SkeletonLoader component for placeholders

const TechSolutions = () => {
  const [open, setOpen] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://living-brands-admin.vercel.app/api/tech-solutions"
        );
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching tech solutions data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="px-[5%] py-12 bg-white relative z-[110] rounded-[70px] font-sora">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 lg:mb-20">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] text-[#125b5c] font-bold mb-10">
            Tech Solutions
          </h2>
          {loading ? (
            <div className="space-y-4 mb-5">
              <SkeletonLoader width="w-full" height="h-6" />
              <SkeletonLoader width="w-3/4" height="h-6" />
            </div>
          ) : (
            <p className="text-[18px] font-normal text-black mb-5 text-justify transition duration-300 ease-in-out">
              {data?.shortDescription?.[0]}
            </p>
          )}
          <hr className="h-[3px] bg-gray-400 mb-5 max-w-52" />
          <p className="font-bold text-[18px] text-[#125b5c] mb-10">
            Proud to work with the biggest brands in India & Abroad
          </p>

          {/* Tech Logos with Skeleton Loader */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 items-center mb-10 px-7 md:px-0">
            {loading
              ? Array(8)
                  .fill(0)
                  .map((_, index) => (
                    <SkeletonLoader
                      key={index}
                      height="h-20"
                      rounded="rounded-lg"
                    />
                  ))
              : data?.brand?.map((brand) => (
                  <div
                    key={brand._id}
                    className="overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg"
                  >
                    <Image
                      width={200}
                      height={200}
                      src={brand.logo}
                      alt={brand.name}
                      className="h-20 object-contain saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out"
                    />
                  </div>
                ))}
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <SkeletonLoader
                    key={index}
                    height="h-10"
                    rounded="rounded-lg"
                  />
                ))
            : data?.items?.map((item, index) => (
                <div key={item._id} className="border-b border-gray-300">
                  <button
                    className="w-full flex justify-between items-center py-4 text-[17px] font-semibold text-[#125b5c] text-left transition duration-300 ease-in-out hover:text-[#0d4a4c]"
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
                    <div className="py-2 text-gray-700 pb-7 text-[14px] font-normal">
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

export default TechSolutions;
