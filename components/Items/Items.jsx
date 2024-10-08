"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Items = () => {
  const [hoveredId, setHoveredId] = useState(null); // To track the hovered card
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event, id) => {
    // Get the mouse position relative to the viewport
    const offsetX = event.clientX;
    const offsetY = event.clientY;

    setPosition({
      x: offsetX,
      y: offsetY,
    });

    setHoveredId(id); // Show the View Case div when hovering
  };

  const handleMouseLeave = () => {
    // Hide the small div when the mouse leaves the blue div
    setHoveredId(null);
  };

  const scrollAnimation = {
    position: "absolute",
    whiteSpace: "nowrap",
    animation: "scroll 2s linear infinite",
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;
  const items = [
    {
      id: 1,
      category: "Casestudy",
      thumbnail: "https://i.postimg.cc/K88zzWnM/1.jpg",
      title: "Eid Campaign",
      detailsTitle: "Pusti Chinigura Rice X Nusrat Faria",
      services: [
        {
          serviceName: "UI/UX Design",
          description:
            "Creating user-centered designs focused on functionality and aesthetics.",
        },
        {
          serviceName: "Frontend Development",
          description:
            "Implementing responsive and interactive interfaces using HTML, CSS, and JavaScript.",
        },
      ],
      serviceDetails:
        "Our team builds engaging websites with a focus on user experience, optimized performance, and scalability.",
      industry: "Technology",
      img: "https://i.postimg.cc/K88zzWnM/1.jpg",
    },
    {
      id: 2,
      category: "Casestudy",
      thumbnail: "digital-marketing-thumb.jpg",
      title: " Featuring Shakib Al Hasan",
      detailsTitle: "DBL Ceramics Presents: An Emotional May Day Tribute",
      services: [
        {
          serviceName: "SEO Optimization",
          description:
            "Improving website rankings on search engines through effective strategies.",
        },
        {
          serviceName: "Content Marketing",
          description:
            "Crafting compelling content that attracts and converts target audiences.",
        },
      ],
      serviceDetails:
        "Our data-driven approach ensures that your brand is visible to your audience, driving engagement and growth.",
      industry: "Marketing",
      img: "https://i.postimg.cc/8PDs8ccw/kgrit-U3-IYXE-HD-1.jpg",
    },
    {
      id: 3,
      category: "Casestudy",
      thumbnail: "graphic-design-thumb.jpg",
      title: "Expo Bangladesh",
      detailsTitle: "Ceramic Expo Bangladesh Highlight 03",
      services: [
        {
          serviceName: "Logo Design",
          description:
            "Designing memorable and impactful logos that represent your brand.",
        },
        {
          serviceName: "Brand Guidelines",
          description:
            "Establishing consistent visual standards for your brand across all platforms.",
        },
      ],
      serviceDetails:
        "We create stunning visuals that communicate your brand message effectively, from concept to final design.",
      industry: "Creative",
      img: "https://i.postimg.cc/1tBRscfH/BHMx-OOFFPBI-HD.jpg",
    },
    {
      id: 4,
      category: "Casestudy",
      thumbnail: "mobile-dev-thumb.jpg",
      title: "Expo Bangladesh",
      detailsTitle: "Ceramic Expo Bangladesh Highlight 02",
      services: [
        {
          serviceName: "iOS Development",
          description:
            "Creating robust and user-friendly apps for the Apple ecosystem.",
        },
        {
          serviceName: "Android Development",
          description: "Building scalable apps tailored for Android users.",
        },
      ],
      serviceDetails:
        "Our mobile app solutions prioritize usability, performance, and seamless experiences for your users.",
      industry: "Technology",
      img: "https://i.postimg.cc/GmwWgTph/Gtpj-Wpe1r-Qk-HD.jpg",
    },
    {
      id: 5,
      category: "Casestudy",
      thumbnail: "consulting-thumb.jpg",
      title: "Expo Bangladesh",
      detailsTitle: "Ceramic Expo Bangladesh Highlight 01",
      services: [
        {
          serviceName: "Market Analysis",
          description:
            "In-depth analysis of market trends and opportunities for your business.",
        },
        {
          serviceName: "Operational Strategy",
          description:
            "Optimizing business processes to enhance efficiency and profitability.",
        },
      ],
      serviceDetails:
        "We partner with you to develop actionable strategies that deliver measurable results for your business.",
      industry: "Business",
      img: "https://i.postimg.cc/1t3S7tTc/dt-BSuy7-OJd8-HD.jpg",
    },
    {
      id: 6,
      category: "Casestudy",
      thumbnail: "cloud-services-thumb.jpg",
      title: "Expo 2022",
      detailsTitle: "Ceramic Expo 2022 Bangladesh Documentary",
      services: [
        {
          serviceName: "Cloud Migration",
          description:
            "Seamless migration of applications and data to cloud platforms.",
        },
        {
          serviceName: "Managed Cloud Services",
          description:
            "Comprehensive cloud management and optimization services.",
        },
      ],
      serviceDetails:
        "Our cloud solutions help your business transition smoothly and securely to cloud-based infrastructure.",
      industry: "Technology",
      img: "https://i.postimg.cc/bY0MS8Bq/ml-Ef-Da-X-W4-M-HD.jpg",
    },
    {
      id: 8,
      category: "Casestudy",
      thumbnail: "content-creation-thumb.jpg",
      title: "Bangladesh Documentory",
      detailsTitle: "Tableware Market in Bangladesh Documentory",
      services: [
        {
          serviceName: "Video Production",
          description:
            "High-quality video content for marketing, branding, and storytelling.",
        },
        {
          serviceName: "Copywriting",
          description:
            "Compelling and persuasive content for web, social media, and print.",
        },
      ],
      serviceDetails:
        "Our content creation services help you tell your brand’s story in ways that captivate and convert your audience.",
      industry: "Creative",
      img: "https://i.postimg.cc/FRTJZCMt/Kvrfdst-Uy8g-HD.jpg",
    },

    {
      id: 9,
      category: "Daily Creativity",
      thumbnail: "hr-thumb.jpg",
      title: "Bangladesh Documentory",
      detailsTitle: "Sanitary-ware Market in Bangladesh Documentory",
      services: [
        {
          serviceName: "Recruitment Services",
          description:
            "Identifying and attracting top talent for your organization.",
        },
        {
          serviceName: "Employee Engagement",
          description:
            "Strategies and programs to boost employee satisfaction and retention.",
        },
      ],
      serviceDetails:
        "Our HR solutions focus on aligning talent with your business goals to drive productivity and growth.",
      industry: "Business",
      img: "https://i.postimg.cc/SQ8XW16S/CUTNg-E4-NPPg-HD.jpg",
    },
    {
      id: 10,
      category: "Daily Creativity",
      thumbnail: "it-support-thumb.jpg",
      title: "Expo Bangladesh 2022",
      detailsTitle: "Ceramic Expo Bangladesh 2022",
      services: [
        {
          serviceName: "Help Desk Support",
          description:
            "24/7 support services to resolve technical issues promptly.",
        },
        {
          serviceName: "Network Management",
          description:
            "Ensuring optimal performance and uptime for your network infrastructure.",
        },
      ],
      serviceDetails:
        "We offer reliable and responsive IT support solutions to keep your business running smoothly.",
      industry: "Technology",
      img: "https://i.postimg.cc/MpsXWCSD/Sb-Lu-X5-Wy-Uyk-HD.jpg",
    },
    {
      id: 11,
      category: "Casestudy",
      thumbnail: "ecommerce-thumb.jpg",
      title: "Digital",
      detailsTitle: "Disruption on the Digital Strages",
      services: [
        {
          serviceName: "Store Development",
          description:
            "Creating user-friendly and scalable online stores tailored to your needs.",
        },
        {
          serviceName: "Payment Integration",
          description:
            "Secure payment gateway integration for seamless transactions.",
        },
      ],
      serviceDetails:
        "We deliver feature-rich e-commerce platforms designed to scale with your business growth.",
      industry: "Retail",
      img: "https://i.postimg.cc/XNg2MVb3/ey-SLf-CX2-Vsk-HD.jpg",
    },
    {
      id: 13,
      category: "Daily Creativity",
      thumbnail: "software-dev-thumb.jpg",
      title: "Riding",
      detailsTitle: "Riding the tide of change",
      services: [
        {
          serviceName: "Web Applications",
          description:
            "Developing scalable and robust web applications for businesses.",
        },
        {
          serviceName: "Mobile Applications",
          description:
            "Creating mobile apps that deliver seamless user experiences.",
        },
      ],
      serviceDetails:
        "We develop custom software solutions that address your specific business challenges and drive growth.",
      industry: "Technology",
      img: "https://i.postimg.cc/0NM59rZk/uwf-P-Wd-NK2-E-HD.jpg",
    },
    {
      id: 14,
      category: "Daily Creativity",
      thumbnail: "project-management-thumb.jpg",
      title: "Children Day",
      detailsTitle: "Children Day OVC _Seven Rings Cement",
      services: [
        {
          serviceName: "Project Planning",
          description: "Developing detailed plans to ensure project success.",
        },
        {
          serviceName: "Agile Coaching",
          description:
            "Implementing Agile methodologies for better collaboration and faster delivery.",
        },
      ],
      serviceDetails:
        "Our project management services ensure timely delivery and exceed expectations through structured execution.",
      industry: "Business",
      img: "https://i.postimg.cc/NjPfhR6C/Gujn-Dntu-TI-HD.jpg",
    },
    {
      id: 15,
      category: "Daily Creativity",
      thumbnail: "digital-transformation-thumb.jpg",
      title: "Brands",
      detailsTitle: "Lets Live into the Brands",
      services: [
        {
          serviceName: "Brands",
          description: "Lets Live into the Brands",
        },
        {
          serviceName: "Technology Implementation",
          description:
            "Implementing cutting-edge technologies to drive efficiency and innovation.",
        },
      ],
      serviceDetails:
        "Our digital transformation services help businesses leverage technology to innovate and compete in the digital age.",
      industry: "Business",
      img: "https://i.postimg.cc/SxKTmHG5/62-OZOSSGX6-Y-HD.jpg",
    },
    {
      id: 16,
      category: "Daily Creativity",
      thumbnail: "automation-thumb.jpg",
      title: "Cement Factory",
      detailsTitle: "Seven Rings Cement Factory Documentary",
      services: [
        {
          serviceName: "RPA Implementation",
          description:
            "Deploying Robotic Process Automation to enhance operational efficiency.",
        },
        {
          serviceName: "Workflow Automation",
          description:
            "Automating business processes to reduce manual work and increase productivity.",
        },
      ],
      serviceDetails:
        "We help businesses automate their processes, reducing costs and improving efficiency.",
      industry: "Technology",
      img: "https://i.postimg.cc/yYxcxKwF/RJx-It-SXXC6-U-HD.jpg",
    },
  ];
  return (
    <div className="px[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 md:gap-y-20">
      {items.map((item) => (
        <Link key={item.id} href="/work-details">
          <div
            className="relative"
            onMouseMove={(e) => handleMouseMove(e, item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={item.img}
              alt=""
              width={600}
              height={100}
              className="rounded-xl"
            />
            <h2 className="text-md lg:text-lg font-extrabold mt-3">
              {item.title}
            </h2>
            <p className="text-[16px] md:text-[20px] mt-3">
              {item.detailsTitle}
            </p>
            <style>{keyframes}</style>

            {hoveredId === item.id && ( // Show the small div only if hoveredId matches the card id
              <div
                className="w-36 h-10 fixed z-[100]"
                style={{
                  top: `${position.y}px`,
                  left: `${position.x}px`,
                  pointerEvents: "none",
                  transform: "translate(-50%, -50%)", // Center under the mouse
                }}
              >
                <div className="bg-[#125b5c] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                  <p style={scrollAnimation}>View Casestudy</p>
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Items;
