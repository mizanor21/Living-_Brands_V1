"use client";
import React, { useState } from "react";
import Items from "../Items/Items";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const BrandSolutions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  // Array of items with dynamic titles and contents
  const data = [
    {
      title: "Social Media Management",
      content:
        "We create data-driven social media strategies that go beyond vanity metrics. By focusing on building genuine connections, we transform your online presence into a thriving community.",
    },
    {
      title: "Content and Copywriting",
      content:
        "Our wordsmiths craft compelling, customer-centric content that drives results. We prioritize clarity, impact, and empathy over empty buzzwords.",
    },
    {
      title: "Graphic Design and Illustration",
      content:
        "In today's visual-first world, we create captivating content that grabs attention and embodies your brand's essence.",
    },
    {
      title: "Video Editing and Animation",
      content:
        "We create captivating 2D and 3D animations and video edits optimized for maximum social impact. Our team blends artistry and technology to craft visually stunning and engaging content that resonates with audiences, drives engagement, and delivers results.",
    },
    {
      title: "Film Production, AVs and Product Photography",
      content:
        "Our in-house production studio offers a full spectrum of creative services, from script-to-screen. Our talented team of filmmakers, photographers, and editors produce a wide range of content, including feature films, commercials, brand films, and product photography.",
    },
    {
      title: "Campaign Planning",
      content:
        "Beyond daily content, we specialize in creating unforgettable experiences. Our end-to-end digital services transform client visions into reality, exceeding expectations at every turn.",
    },
    {
      title: "Influencer Management & ORM",
      content:
        "We forge powerful partnerships with top-tier influencers and thought leaders to amplify your brand's reach and drive meaningful engagement. By leveraging their social influence, we create impactful campaigns that resonate with your target audience and boost brand recall. Our strong media relationships ensure widespread coverage and positive press for your brand. To protect and enhance your online reputation, our dedicated ORM team uses advanced listening tools and media contacts to manage online conversations effectively.",
    },
    {
      title: "New Brand Launch and Rebranding",
      content:
        "Our branding division crafts enduring brand identities. We delve deep into your business, understanding your audience and goals to develop a comprehensive brand ecosystem. From designing your brand’s logo to building a brand persona - this includes everything! ",
    },
  ];

  return (
    <section className="px-[5%] py-12 bg-white relative z-[110] rounded-[70px] font-sora">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 lg:mb-20">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] text-[#125b5c] font-bold mb-7 md:mb-10">
            Brand Solutions
          </h2>
          <p className="text-[18px] font-normal  text-black mb-5 text-justify">
            From crafting compelling daily content to executing high-impact
            flagship campaigns, we provide a comprehensive range of digital
            services tailored to your unique business objectives. We combine
            strategic thinking, creative design, engaging video production, and
            dynamic animation to create a cohesive digital presence that drives
            tangible results.
          </p>
          <hr className="h-[3px] bg-black mb-5 max-w-52" />
          <p className="font-[600] text-[18px] text-[#125b5c] mb-10">
            Proud to work with the biggest brands in India & Abroad
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-4 items-center mb-10 gap-y-5  px-7 md:px-0">
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/XYnP8q4S/l-1.png"
              alt="P&G"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/VLqTnnyW/l-10.png"
              alt="Glow & Lovely"
              className="h-10 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/RhfYPnW9/l-14.png"
              alt="Jio"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/SQzHQHD5/l-13.png"
              alt="Kotak"
              className="h-10 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/28RM1Tt5/l-12.png"
              alt="Garnier Men"
              className="h-14 mb-5 object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/76jcMNYm/l-17.png"
              alt="uno"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/mDPJHnRP/l-18.png"
              alt="Godrej"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/HLZFjmGG/l-2.png"
              alt="Ashok Leyland"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/BnCr9DMn/l-23.png"
              alt="domino's"
              className="h-20 object-contain saturate-0 hover:saturate-100"
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-[16px] font-[700] text-[#125b5c] text-left"
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
                className={`overflow-hidden transition-[max-height] text-[14px] font-[400] duration-1000 ease-in-out ${
                  open === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="py-2 text-black pb-7">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Items />
    </section>
  );
};

export default BrandSolutions;
