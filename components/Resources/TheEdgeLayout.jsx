"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import axios from "axios";
import SkeletonLoader from "../Custom/SkeletonLoader";
import ButtonEffect from "@/app/button/page";

const TheEdgeLayout = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://living-brands-admin.vercel.app/api/edge"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-[5%] bg-white relative z-[110] py-10 lg:py-32 rounded-b-[20px] lg:rounded-b-[60px]">
      <div className="text-justify mb-10 font-sora">
        {loading ? (
          <>
            <SkeletonLoader height="h-10" width="w-3/4" rounded="rounded-lg" />
            <div className="space-y-2 mt-4">
              <SkeletonLoader height="h-5" width="w-full" />
              <SkeletonLoader height="h-5" width="w-4/5" />
              <SkeletonLoader height="h-5" width="w-3/4" />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl md:text-4xl lg:text-[48px] text-[#125b5c] font-bold mb-8">
              Welcome to the Edge!
            </h1>
            <p className="text-[18px]">
              As creatives by nature, we love to push the boundaries of what we
              can create, experimenting with technology and art, uncover
              insights and build exciting new resources that help us take our
              work to the next level. We’re now opening up our experiments to
              you so we can all #CreateALivingBrand&apos;s together.
              <br />
              <br />
              Check them out below and let us know your thoughts on our socials!
            </p>
          </>
        )}
      </div>

      <div className="font-sora">
        {loading
          ? Array(2)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="grid gap-5 mb-10 sm:grid-cols-1 md:grid-cols-2 items-center"
                >
                  <div className="space-y-4">
                    {/* Title Skeleton */}
                    <SkeletonLoader
                      height="h-8"
                      width="w-3/4"
                      rounded="rounded-lg"
                    />
                    {/* Paragraph Skeletons */}
                    <SkeletonLoader height="h-5" width="w-full" />
                    <SkeletonLoader height="h-5" width="w-4/5" />
                    <SkeletonLoader height="h-5" width="w-3/4" />
                    {/* Button Skeleton */}
                    <SkeletonLoader
                      height="h-10"
                      width="w-1/2"
                      rounded="rounded-lg"
                    />
                  </div>
                  {/* Image Skeleton */}
                  <SkeletonLoader
                    height="h-64"
                    width="w-full"
                    rounded="rounded-lg"
                  />
                </div>
              ))
          : data.map((edge, i) => (
              <div
                key={edge._id || i}
                className={`grid md:grid-cols-2 gap-10 bg-white rounded-lg mb-10 transition-all duration-300 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div
                  className={`flex flex-col justify-center ${
                    i % 2 === 0 ? "order-1" : "order-2"
                  }`}
                >
                  <h1 className="text-2xl font-bold mt-1 md:text-3Xl lg:text-[48px] text-[#125b5c] mb-5">
                    {edge.title}
                  </h1>
                  {edge.description.map((desc, idx) => (
                    <p key={idx} className="text-[15px] mb-4">
                      {desc}
                    </p>
                  ))}
                  <div className="max-w-sm mt-10">
                    <Link href={edge.buttonLink}>
                      <ButtonEffect>
                        <span className="flex gap-2">
                          Access Living Brand&apos;s Glossary
                          <MdOutlineArrowRightAlt className="text-xl" />
                        </span>
                      </ButtonEffect>
                    </Link>
                  </div>
                </div>

                {/* Image Content */}
                <div
                  className={`flex justify-center items-center ${
                    i % 2 === 0 ? "order-2" : "order-1"
                  }`}
                >
                  <img
                    src={edge.image}
                    alt="Edge Image"
                    className="rounded-lg w-full max-w-xs md:max-w-full"
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default TheEdgeLayout;
