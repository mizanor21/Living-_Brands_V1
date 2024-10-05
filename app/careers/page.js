"use client";

import CareerLastVideo from "@/components/Career/CareerLastVideo";
import CareerSection from "@/components/Career/CareerSection";
import VideoSection from "@/components/Career/VideoSection";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="relative bg-white z-[110] rounded-b-[20px] lg:rounded-b-[60px]">
      <div className="px-[5%] ">
        <CareerSection></CareerSection>
        <VideoSection></VideoSection>
        <HorizontalScrollCarousel />
        <CareerLastVideo></CareerLastVideo>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <div className="hidden md:block font-sora">
        <section
          ref={targetRef}
          className=" relative h-[700vh] bg-white py-10 lg:py-20"
        >
          <div className="my-10 lg:my-20">
            <h1 className="text-[24px] text-[#125b5c] font-[600] text-center ">
              Have you got what it takes to #CreateALivingBrands?
            </h1>
            <p className="text-[19px] font-[400] text-center mt-2">
              Check out our core principles. If they align with your values, do
              apply..
            </p>
          </div>
          <div className="sticky top-10 flex  items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-4 transition-transform duration-1000 ease-out"
            >
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </motion.div>
          </div>
        </section>
      </div>
      {/* small device */}
      <div className="md:hidden mt-10">
        {cards.map((item, i) => (
          <div key={i}>
            <div>
              <img
                className="w-full h-[350px]"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
            <div className="mt-4 mb-5">
              <div className="">
                <h2 className="text-[22px] font-[600]  text-[#185C5D]">
                  {item.title}
                </h2>
                <p className="text-[16px] py-4">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Card = ({ card }) => {
  return (
    <div>
      <div
        key={card.id}
        className=" relative  w-[450px] h-[750px] overflow-hidden border hover:-translate-y-5 duration-300 mt-5 shadow-lg bg-white  hover:bg-neutral-50"
      >
        <div>
          <Image
            width={450}
            height={400}
            className="w-full h-[450px] object-cover"
            src={card.imageUrl}
            alt={card.title}
          />
        </div>
        <div className="p-[2rem]  ">
          <div className="text-center">
            <h2 className="text-[24px] font-bold  text-[#185C5D]">
              {card.title}
            </h2>
            <p className="text-[16px] group-hover:text-black py-4">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    id: 1,
    imageUrl: "https://i.postimg.cc/bJyprFm5/Artboard-1.png",
    title: "Our Growth is Fueled by Our Clients' Growth",
    description:
      "Our core purpose is to be an unparalleled service provider, dedicated to aligning our clients' goals with their ultimate vision of success. At Living Brands, we commit to delivering exceptional value by inspiring ourselves and our colleagues to prioritize the needs of our partners.",
  },
  {
    id: 2,
    imageUrl: "https://i.postimg.cc/xdS0DdMn/orange.png",
    title: "Commitment Defines Our Work Ethic",
    description: `Operating within fast-paced, intricate environments, we manage multiple relationships to provide rapid, flexible outcomes for our clients. We are steadfast in honoring our commitments.`,
  },
  {
    id: 3,
    imageUrl: "https://i.postimg.cc/HL4TpC95/purple.png",
    title: "Creativity is The Soul of Our Work, Aesthetics, Its Expression",
    description: `We produce groundbreaking work that challenges conventional norms and significantly enhances our clients' businesses. Our communication and design strategies ensure our brand stands out in the market.`,
  },
  {
    id: 4,
    imageUrl: "https://i.postimg.cc/fTJWYpMn/yellow.png",
    title: "Collaborative Win-win Relationships",
    description: `We cultivate partnerships founded on mutual respect and shared objectives, ensuring the success of all stakeholders involved.`,
  },
  {
    id: 5,
    imageUrl: "https://i.postimg.cc/sgWVNWBT/red.png",
    title: "Cultural Relevance is Our Cornerstone",
    description: `Our purpose is to align brands with consumer culture through deep consumer understanding, effective communication, and exceptional experiences.`,
  },
  {
    id: 6,
    imageUrl: "https://i.postimg.cc/7Y0Mzd9c/6-1.png",
    title: "Technology for Ease",
    description: `Our core belief is that technology should enhance lives by simplifying processes and delivering engaging experiences. We harness this principle to create streamlined, impactful solutions for our clients.`,
  },
  {
    id: 7,
    imageUrl: "https://i.postimg.cc/0N86bHXp/3.png",
    title: "Brainstorm, Strategize, Execute. ",
    description: `Unleashed power is formidable, but its true potential lies in control. This inspires us to think profoundly, strategize astutely, and act boldly.`,
  },
];
