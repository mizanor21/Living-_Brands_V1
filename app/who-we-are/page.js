import React from "react";
import ButtonEffect from "../button/page";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const WhoWeAre = async () => {
  // Fetching data from the API
  const res = await fetch(
    "https://living-brands-admin.vercel.app/api/who-we-are",
    { next: { revalidate: 10 } }
  );
  const whoWeAreData = await res.json();

  // Destructuring `sections` from the first object in `whoWeAreData`
  const [{ title, sections }] = whoWeAreData;

  // Destructuring properties inside the `sections` array
  const [
    {
      button: { text: buttonText, link: buttonLink },
      shortVideo: { src: shortVideoSrc, alt: shortVideoAlt },
      longVideo: { src: longVideoSrc, alt: longVideoAlt },
      heading,
      text: descriptionText,
      _id: sectionId,
    },
  ] = sections;

  return (
    <div className="bg-white relative z-[110] grid grid-cols-1 px-[5%] font-sora rounded-b-[20px] lg:rounded-b-[40px]">
      <h1 className="text-3xl font-bold text-[#125B5C] py-[5%] lg:pt-[80px] lg:pb-[60px] md:text-3xl lg:text-[48px]">
        {title}
      </h1>
      <hr className="w-full text-black bg-gray-400 h-[2px]" />
      <div className="grid gap-5 mb-8 sm:grid-cols-1 md:grid-cols-2 mt-10 lg:mt-20">
        <div className="order-last md:order-first">
          <h1 className="text-2xl font-bold mt-1 md:text-3xl text-[#125b5c] mb-8">
            {heading}
          </h1>
          {descriptionText?.map((paragraph, index) => (
            <p key={index} className="text-[16px]">
              {paragraph}
            </p>
          ))}
          <br />
          <Link href={buttonLink}>
            <div className="max-w-md">
              <ButtonEffect>
                <span className="flex gap-2">
                  {buttonText} <MdOutlineArrowRightAlt className="text-xl" />
                </span>
              </ButtonEffect>
            </div>
          </Link>
        </div>
        <div className="order-first md:order-last flex justify-center items-center">
          <video
            className="rounded-2xl lg:w-[800px]"
            alt={shortVideoAlt}
            autoPlay
            loop
            muted
          >
            <source src={shortVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <video
        className="rounded-2xl lg:w-[100%] lg:h-[100%] pb-10 lg:pb-20"
        alt={longVideoAlt}
        autoPlay
        loop
        muted
      >
        <source src={longVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WhoWeAre;
