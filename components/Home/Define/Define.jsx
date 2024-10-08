"use client";
import { useRef, useEffect, useState } from "react";
import arrowIcon from "@/public/assets/define/about-arrow.png";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Custom/Button";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "./Define.css";
import ButtonEffect from "@/app/button/page";

const Define = () => {
  const [angle, setAngle] = useState(0);

  // Function to calculate angle between arrow and mouse
  const calculateAngle = (event) => {
    // Get the bounding box of the arrow container
    const arrow = document.getElementById("arrow-container");
    const rect = arrow.getBoundingClientRect();
    const arrowCenterX = rect.left + rect.width / 2;
    const arrowCenterY = rect.top + rect.height / 2;

    const deltaX = event.clientX - arrowCenterX;
    const deltaY = event.clientY - arrowCenterY;

    // Calculate the angle in radians and then convert to degrees
    const rad = Math.atan2(deltaY, deltaX);
    const deg = (rad * 180) / Math.PI;
    setAngle(deg);
  };

  useEffect(() => {
    window.addEventListener("mousemove", calculateAngle);

    return () => {
      window.removeEventListener("mousemove", calculateAngle);
    };
  }, []);

  return (
    <div className="font-sora  py-10 lg:py-[8%] bg-white relative z-[110]">
      <div className="flex px-[5%] bgDefine">
        <div className="md:mx-3 ">
          <div className="flex justify-center items-center rounded-badge ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              <div className="col-span-1">
                <h2 className="text-2xl mx-3 md:mx-0 lg:text-[54px] font-bold lg:pr-5 mb-2 text-[#185C5D]">
                  What defines us
                </h2>
                <div className="hidden lg:flex">
                  <div className="relative w-[50%] h-auto flex px-8  items-center">
                    <div
                      id="arrow-container"
                      className="bg-no-repeat flex justify-start items-center"
                    >
                      <div
                        className=" w-[150px] md:w-[250px] transform origin-center"
                        style={{ transform: `rotate(${angle + 90}deg)` }}
                      >
                        {/* <FaArrowLeft /> */}
                        <Image
                          width={300}
                          height={400}
                          src={arrowIcon}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 pb-5 mx-3 md:mx-0">
                <p className="text-xl lg:text-[30px] font-bold text-[#185C5D] leading-[42px]">
                  We&apos;re brand architects, crafting narratives with
                  precision, fueled by innovation and seamless integration.
                </p>
                <p className="my-5 lg:my-16 text-justify text-black opacity-50 text-[18px] font-[500] leading-[10px]  lg:leading-[30px] ">
                  “Living Brands” is fueled by an unquenchable drive to make
                  your brand a global force. We believe in the power of
                  collaboration, bringing together the best creative minds,
                  in-house specialists, industry partners, and technology
                  leaders - pushing the boundaries of what&apos;s possible in
                  digital marketing, crafting impactful campaigns that ignite
                  brand growth.
                </p>
                <div className="lg:max-w-md">
                  <Link href="/careers">
                    <ButtonEffect>
                      <span className="flex gap-2">
                        Discover Our Dynamic Culture{" "}
                        <MdOutlineArrowRightAlt className="text-xl" />
                      </span>
                    </ButtonEffect>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Define;
