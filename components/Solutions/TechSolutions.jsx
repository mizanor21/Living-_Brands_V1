"use client";
import React, { useState } from "react";
import Items from "../Items/Items";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const TechSolutions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  // Array of items with dynamic titles and contents
  const data = [
    {
      title: "Customized Web Development",
      content:
        "We create exceptional websites that drive results. Our portfolio includes successful projects for renowned brands like Transcom Beverages Limited, Pusti Home Chef, and OMG Ice Cream. We build agile, responsive platforms equipped with advanced features such as geo-targeting, live chat, community management, and e-commerce.",
    },
    {
      title: "Web Personalization",
      content:
        "We leverage advanced analytics and machine learning to deliver personalized experiences. By understanding individual visitor behavior, we tailor content and recommendations to meet specific needs, driving engagement and conversions.",
    },
    {
      title: "UI/UX",
      content:
        "Our UI/UX experts create exceptional digital experiences backed by a deep understanding of user behavior. With insights from over 500 projects, we design and develop intuitive mobile apps and websites that drive engagement and loyalty. Our tech stack includes Web flow, WordPress, PHP, and ReactJS.",
    },
    {
      title: "Search Engine Optimization",
      content:
        "We are committed to propelling your brand to the top of search engine results. Our expert team leverages cutting-edge tools and strategies to optimize your online visibility, drive organic traffic, and outperform competitors.",
    },
    {
      title: "CRM & ERP Solutions",
      content:
        "Our robust CRM platform provides a holistic view of your customer journey, enabling personalized engagement and automated workflows. By tracking every interaction and automating communications, we drive customer loyalty and achieve business goals. We partner with industry leaders like Mo Engage,  Zoho, and HubSpot to deliver tailored solutions. </br> Similarly, our comprehensive ERP dashboard offers end-to-end business management. From social media to supply chain, we streamline operations, improve efficiency, and provide valuable insights to inform strategic decision-making.",
    },
    {
      title: "E-Commerce",
      content:
        " With over half of all purchases now made online, we're experts at optimizing your e-commerce strategy. Our partnerships with renowned e-commerce platforms enable us to identify the best channels, fulfillment options, and marketing tactics to drive sales growth.",
    },
    {
      title: "Email Marketing",
      content:
        "Email remains a powerful tool for driving conversions. We craft compelling email campaigns and newsletters that resonate with your target audience. By segmenting your audience and automating email workflows, we deliver personalized messages at the right time, nurturing leads and boosting sales. ",
    },

    {
      title: "Marketing Automation",
      content:
        "We deliver scalable, personalized customer experiences across all touchpoints. Our robust automation platform orchestrates seamless communication journeys, from lead generation to post-purchase engagement. By leveraging data-driven insights and optimizing performance across email, SMS, web, social media, and search, we drive customer loyalty and maximize ROI. ",
    },

    {
      title: "Chatbots",
      content:
        "Our AI-powered chatbots deliver exceptional customer experiences and drive business growth. By understanding and responding to user needs in real-time, our chatbots provide instant support, personalized recommendations, and valuable insights. These intelligent virtual assistants act as both customer service agents and sales advocates, enhancing brand engagement and driving conversions across websites, apps, social media, and WhatsApp. ",
    },
  ];

  return (
    <section className="px-[5%] py-12 bg-white relative z-[110] rounded-[70px] font-sora">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 lg:mb-20">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] text-[#125b5c] font-bold mb-10">
            Tech Solutions
          </h2>
          <p className="text-[18px] font-normal  text-black mb-5 text-justify">
            Our Digital Transformation team leverages cutting-edge technology to
            build seamless customer journeys across all touchpoints. We create
            integrated ecosystems spanning web, social, CRM, ERP, and
            e-commerce, delivering personalized experiences that attract,
            retain, and engage customers. Our custom platforms optimize every
            interaction, driving growth and customer loyalty.
          </p>
          <hr className="h-[3px] bg-black mb-5 max-w-52" />
          <p className="font-bold text-[18px] text-[#125b5c] mb-10">
            Proud to work with the biggest brands in India & Abroad
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-4 items-center mb-10 gap-y-5 px-7 md:px-0">
            {/* Media Logos */}
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/7Z9Xympp/logo1.webp"
              alt="P&G"
              className="h-20  object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/qv4QY9Zs/logo2.webp"
              alt="Glow & Lovely"
              className="h-20  object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/R00dCwmq/logo3.webp"
              alt="Jio"
              className="h-20  object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/pd1ZmyVC/logo4.webp"
              alt="Kotak"
              className="h-20  object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/hjz0TgfB/logo5.webp"
              alt="Garnier Men"
              className="h-20 mb-5 object-contain saturate-0 hover:saturate-100"
            />

            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/ZRGxLgdy/logo6.png"
              alt="uno"
              className="h-20  object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/VvXBZRqZ/logo7.png"
              alt="Godrej"
              className="h-20  object-contain saturate-0 hover:saturate-100"
            />
            <Image
              width={200}
              height={200}
              src="https://i.postimg.cc/bYnTvz70/logo8.png"
              alt="Ashok Leyland"
              className="h-20  object-contain saturate-0 hover:saturate-100"
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-[17px] font-[700] text-[#125b5c] text-left"
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

export default TechSolutions;
