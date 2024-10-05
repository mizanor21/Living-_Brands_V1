"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TimeSchbang from "../TimeSchbang/TimeSchbang";
import ButtonEffect from "@/app/button/page";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Hero = () => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Toggle sticky class based on scroll position
      if (scrollY > viewportHeight * 0.7) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky
          ? "translate-y-0 opacity-100"
          : "-translate-y-5 opacity-0 pointer-events-none"
      } transition-all duration-500 ease-in-out sticky top-0 z-[110] bg-white font-sora`}
    >
      <div className="lg:container lg:mx-auto px-[5%] py-[4%]">
        <div className="px-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <h2 className="mb-6 text-3xl sm:leading-none lg:text-[60px] font-[700] tracking-tight text-[#185C5D] ">
                  Spark Something Real. Live Your Brands with Us.
                </h2>
                <p className="text-[20px] my-[44px] font-[400] md:mt-0">
                  We ignite emotions, tell captivating stories, create campaigns
                  that resonate, and drive real results. Let&apos;s bring your
                  brand to life.
                </p>
              </div>
              <div className="mt-2 lg:mt-5 max-w-52 ">
                <Link
                  href="https://www.google.com/maps/place/Living+Brands,+House+230+Road+16,+Dhaka+1212/data=!4m2!3m1!1s0x3755c700426d1655:0x8a70d2c34d6aae47?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNS4xMDIYACDXggMqUSw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQkQ%3D&g_st=aw"
                  target="_blank"
                  className="max-w-md"
                >
                  <ButtonEffect>
                    <span className="flex gap-2">
                      Let&apos;s Talk{" "}
                      <MdOutlineArrowRightAlt className="text-xl" />
                    </span>
                  </ButtonEffect>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                className="hidden md:block w-[400px]"
                src="https://i.postimg.cc/rmvDtcvp/hero-img.png"
                alt="Living banner"
              />
            </div>
          </div>
        </div>
      </div>
      <TimeSchbang />
    </div>
  );
};

export default Hero;
