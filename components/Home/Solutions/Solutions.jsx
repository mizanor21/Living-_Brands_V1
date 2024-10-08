"use client";
import React, { useEffect, useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./solutions.css";
import Link from "next/link";

const Card = ({ section, index }) => {
  return (
    <div className="flex bg-white relative font-sora">
      <div
        key={index}
        className={`hover-container ${section?.id} h-screen border-r-2 hover:text-white group`}
      >
        <div className="text-center w-[550px] h-full flex items-center justify-center">
          <div className="px-5 lg:px-16">
            <h3 className="text-[60px] font-[600] leading-[84px] text-gray-300 group-hover:text-white transition-colors duration-300 mb-5">
              {section?.title}
            </h3>
            <p className="carousel-p text-[16px] font-[500] leading-[22px] text-gray-50 hidden-on-hover text-justify">
              {section?.content}
            </p>
            <div className="flex justify-center pt-5 lg:pt-20">
              <BsArrowRight className="text-2xl lg:text-[48px] carousel-p text-[#125b5c] p-2 hidden-on-hover  bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const sections = [
    {
      id: "slide-1",
      path: "/brand-solutions",
      title: "Brand Strategy",
      content:
        "We specialize in crafting brand strategies that breathe life into brands, infusing them with purpose, differentiation, and resonance. Our approach leverages the essence of each brand to drive meaningful connections and sustainable growth.",
    },
    {
      id: "slide-2",
      path: "/media-solutions",
      title: "Media Buying Strategy",
      content:
        "The media buying strategy we employ leverages data-driven insights to maximize brand impact across diverse channels. Through meticulous targeting and strategic placement, we optimize ROI and foster meaningful engagement, ensuring brands stand out amidst the ever-evolving media landscape.",
    },
    {
      id: "slide-3",
      title: "Research Solution",
      content:
        "Delving deep into market dynamics, consumer behavior, and industry trends, our research solution provides tailored insights empowering informed decisions. Utilizing cutting-edge methodologies, we offer comprehensive analysis and actionable recommendations, equipping brands with the knowledge to thrive in today's competitive landscape.",
    },
    {
      id: "slide-4",
      path: "/tech-solutions",
      title: "Tech Innovation",
      content:
        "Tech innovation fuels our passion. We're dedicated to pioneering solutions that redefine possibilities. Through relentless exploration and collaboration, we push boundaries to shape the future of technology and empower meaningful progress in diverse sectors.",
    },
    {
      id: "slide-5",
      title: "Social Media Solution",
      content:
        "Driving impactful engagement, our social media solutions are crafted to amplify brand presence and foster genuine connections. From content creation to community management, we tailor strategies with creative finesse and utilize data-driven insights to navigate the digital landscape, achieving tangible results and lasting influence.",
    },
    {
      id: "slide-6",
      title: "Content Development",
      content:
        "Our content development services craft compelling narratives that captivate audiences and elevate brands. From concept to execution, we blend creativity with strategic insight to deliver engaging content across diverse platforms. With a focus on authenticity and relevance, we ensure each piece resonates and inspires action.",
    },
    {
      id: "slide-7",
      title: "Influencer Partnerships",
      content:
        "Our influencer and celebrity partnerships harness the power of influence to amplify brand messaging. Through strategic collaborations, we connect brands with personalities who authentically resonate with target audiences. From endorsement to content creation, we cultivate partnerships that drive awareness, credibility, and engagement.",
    },
    {
      id: "slide-8",
      title: "Pr Innovations",
      content:
        "Leveraging cutting-edge strategies and channels, our PR innovations redefine brand storytelling, elevating narratives to new heights. From digital PR to immersive experiences, we pioneer approaches that capture attention and foster meaningful connections, driving visibility, credibility, and advocacy in today's dynamic media landscape.",
    },
    {
      id: "slide-9",
      title: "Films & Production",
      content:
        "Driving impactful engagement, our social media solutions are crafted to amplify brand presence and foster genuine connections. From content creation to community management, we tailor strategies with creative finesse and utilize data-driven insights to navigate the digital landscape, achieving tangible results and lasting influence.",
    },
    {
      id: "slide-10",
      title: "3D Motion Contents",
      content:
        "We specialize in films and production, breathing life into stories with cinematic flair. From concept to post production, we merge creativity and technical expertise to deliver captivating visuals that resonate with audiences. Whether crafting commercials, documentaries, or branded content, we turn visions into reality, leaving a lasting impression.",
    },
  ];

  const [offset, setOffset] = useState(0);
  //   const containerRef = useRef(null);

  const totalCards = sections.length;
  //   const visibleCards = 3;
  const cardWidth = 1200;
  const cardMargin = 8;
  const totalWidth = (cardWidth + cardMargin) * totalCards;

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const screenWidth = window.innerWidth;
    const progress = (0.38 * clientX) / screenWidth;

    // Calculate the max scroll to stop when the last card is fully visible
    const maxScroll = Math.min(
      0,
      screenWidth - totalWidth + (cardWidth + cardMargin) * 0.1
    ); // Shows 3 full cards and half of the 4th

    // Calculate the new offset and clamp it
    const newOffset = Math.max(maxScroll, progress * maxScroll);

    setOffset(newOffset);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="overflow-hidden h-screen  relative z-[110] bg-white hidden md:block">
        <div
          className="flex transition-all duration-2000 ease-out"
          style={{
            transform: `translateX(${offset}px)`,
            width: `${totalWidth}px`,
          }}
        >
          {sections.map((section, index) => (
            <Link href={`${section?.path}`} key={index}>
              <Card section={section} />
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile */}
      <div className="bg-white md:hidden">
        <div className=" bg-white px-[5%] relative z-[110]">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={`hover-container ${section?.id} hover:text-white group pt-10`}
            >
              <div className="h-full md:flex items-center justify-center border-b border-black">
                <div className="px-4">
                  <h3 className="text-xl font-[600] text-black  group-hover:text-white transition-colors duration-300 mb-5 mt-2">
                    {section?.title}
                  </h3>
                  <p className="text-justify">{section?.content}</p>
                  <BsArrowRight className="text-[40px] my-6 bg-[#125b5c] p-2 rounded-full text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Solutions;
