import { HiLocationMarker } from "react-icons/hi";
import { RiCopyrightFill } from "react-icons/ri";

import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaRegCopyright,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#185C5D] sticky bottom-0 z-[105] font-sora ">
      <footer className="footer p-10 items-center justify-center">
        <Image
          width={200}
          height={200}
          className="max-h-[230px]"
          src="https://i.postimg.cc/L68GLfzq/footer-logo.png"
          alt=""
        />
      </footer>
      <footer className="footer block lg:flex lg:justify-between border-t border-gray-400 px-10 py-4 text-white justify-center items-center">
        <div className="flex justify-center items-center gap-3 text-3xl w-full lg:w-40 ">
          <Link
            href="https://www.facebook.com/Livingbrands.co"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-blue-600"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/livingbrands.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-pink-500"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            href="https://www.youtube.com/@LivingBrandsBD/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-red-600"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.linkedin.com/company/livingbrandsbyhabson/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-blue-700"
          >
            <FaLinkedin />
          </Link>
        </div>
        <div className="my-3 md:my-0">
          <Link
            href={
              "https://www.google.com/maps/place/Living+Brands,+House+230+Road+16,+Dhaka+1212/data=!4m2!3m1!1s0x3755c700426d1655:0x8a70d2c34d6aae47?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNS4xMDIYACDXggMqUSw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQkQ%3D&g_st=aw"
            }
            target="_blank"
            className="flex items-center gap-2"
          >
            <HiLocationMarker className="text-[40px] md:text-[26px]" />
            House - 230, Lane -16, Lake Road, Mohakhali DOHS, Dhaka - 1206
          </Link>
          <div className=" flex items-center  gap-2">
            <RiCopyrightFill className="text-[22px] m-[2px]" />
            <p>All Rights Reserved by Living Brands</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
