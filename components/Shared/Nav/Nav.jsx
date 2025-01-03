"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import React, { useState } from "react";
import "./Nav.css";
import Link from "next/link";
import Image from "next/image";
import WordRotate from "@/components/magicui/word-rotate";
import logo from "@/public/assets/logo/logo.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ButtonEffect from "@/app/button/page";
import { usePathname } from "next/navigation";
import Popup from "@/components/Popup/Popup";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  // State declarations
  const [on, setOn] = useState(false);

  const pathname = usePathname();
  const toggleOn = () => setOn(!on);

  const handleNavigations = (path) => {
    toggleOn();
  };

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

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem((prev) => (prev === item ? null : item));
  };

  const [activeItemMenu, setActiveItemMenu] = useState(null);

  const handleItemClickMenu = (item) => {
    setActiveItemMenu((prev) => (prev === item ? null : item));
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

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleToggle = (accordionName) => {
    setOpenAccordion(openAccordion === accordionName ? null : accordionName);
  };

  // Card data
  const solutionsData = [
    {
      id: 1,
      src: "https://i.postimg.cc/8PDs8ccw/kgrit-U3-IYXE-HD-1.jpg",
      title: "DBL Ceramics Presents: An Emotional May Day Tribute",
      link: "https://living-brands-v1.vercel.app/works/6738ac74167e8afc78d608cf",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/K88zzWnM/1.jpg",
      title: "Pusti Chinigura Rice X Nusrat Faria",
      link: "https://living-brands-v1.vercel.app/works/6738ac74167e8afc78d608da",
    },
  ];

  const AboutData = [
    {
      id: 1,
      src: "https://i.postimg.cc/9Fkg9rMr/puma.png",
      title: "PUMA.com | Clothing, Shoes, Accessories | Forever Faster.",
      link: "https://living-brands-v1.vercel.app/works/6738ac74167e8afc78d608cf",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/J0c4bgRc/about2.jpg",
      title: "Introducing Outlander Black Edition",
      link: "https://living-brands-v1.vercel.app/works/6738ac74167e8afc78d608cf",
    },
  ];

  const ResourcesData = [
    {
      id: 1,
      src: "https://i.postimg.cc/1t3S7tTc/dt-BSuy7-OJd8-HD.jpg",
      title: "Ceramic Expo Bangladesh Highlight 01",
      link: "https://living-brands-v1.vercel.app/works/6738ac74167e8afc78d608d0",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/XNg2MVb3/ey-SLf-CX2-Vsk-HD.jpg",
      title: "Disruption on the Digital Strages",
      link: "https://living-brands-v1.vercel.app/works/6738ac74167e8afc78d608d3",
    },
  ];

  return (
    <>
      <div className="md:sticky relative top-0 z-[9999] ">
        <Popup />
      </div>
      <div className="font-sora relative z-[150] navber md:sticky md:top-0  min-[991px]:px-[5%] py-5 md:py-8 lg:py-3 bg-white ">
        <div
          className={`min-[991px]:hidden collapse rounded-none pt-2`}
          style={{ position: "relative", overflow: "visible" }}
        >
          <input
            type="radio"
            name="my-accordion-2"
            checked={activeItem === "menu"}
            readOnly
          />
          <div
            className="collapse-title pl-[22px] text-[14px] text-black font-medium flex justify-between items-center"
            style={{ zIndex: 9999, position: "relative", paddingInlineEnd: 0 }}
          >
            {/* Logo Section */}
            <Link href="/" className="w-[100%] flex items-center gap-2">
              <Image
                src={logo}
                className="w-[40px]"
                alt="Living Brands logo"
              ></Image>
              <h1 className="animate-pulse rounded-full bg-[#125b5c] w-[5px] h-[5px]"></h1>
              <WordRotate
                className="text-sm md:text-lg font-[600] p-0 m-0 w-full"
                words={[
                  "Brands",
                  "Tech",
                  "Media",
                  "Production",
                  "Influencer",
                  "Talent Management",
                  "IT",
                  "UI/UX",
                  "SEO",
                  "Chatbots",
                ]}
              />
            </Link>

            {/* Hamburger Icon */}
            <button
              onClick={() =>
                handleItemClick(activeItem === "menu" ? null : "menu")
              }
              className="text-black p-2"
            >
              {activeItem === "menu" ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <div className="text-[27px] mr-3">
                  <FiMenu />
                </div>
              )}
            </button>
          </div>

          {/* Collapsible Content */}
          <div
            className={`absolute top-full left-0 w-full bg-white z-[9999] transition-[max-height] duration-500 ease-in-out ${
              activeItem === "menu" ? "max-h-[700px]" : "max-h-0"
            }`}
            style={{
              overflow: "hidden",
            }}
          >
            {/* Side Menu Links  */}
            <ul className="pt-3">
              {/* Work */}
              <li
                className={`ml-4 mb-2 ${
                  activeItemMenu && activeItemMenu !== "work"
                    ? "opacity-50"
                    : "opacity-100"
                }`}
                onClick={() => handleItemClickMenu("work")}
              >
                <Link
                  href="/works"
                  onClick={() => handleItemClick("/works")}
                  className={`pl-1 text-[14px] text-black font-medium ${
                    pathname === "/works" && "text-[#ee4580]"
                  }`}
                >
                  Work
                </Link>
              </li>

              <div className="join join-vertical w-full relative z-[200]">
                {/* Solutions Accordion */}
                <div
                  className={`collapse collapse-arrow join-item rounded-none ${
                    activeItemMenu && activeItemMenu !== "solutions"
                      ? "opacity-50"
                      : "opacity-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="my-accordion-4"
                    onClick={() =>
                      handleItemClickMenu(
                        activeItemMenu === "solutions" ? null : "solutions"
                      )
                    }
                  />
                  <div className="px-5 collapse-title text-[14px] border-y text-black font-medium">
                    Solutions
                  </div>
                  {activeItemMenu === "solutions" && (
                    <div className="collapse-content border-b transition-max-height duration-500 ease-in-out">
                      <ul className="pt-3 ml-3">
                        <li>
                          <Link
                            href="/brand-solutions"
                            onClick={() => handleItemClick("/brand-solutions")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/brand-solutions" &&
                              "text-[#ee4580]"
                            }`}
                          >
                            Brand Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/media-solutions"
                            onClick={() => handleItemClick("/media-solutions")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/media-solutions" &&
                              "text-[#ee4580]"
                            }`}
                          >
                            Media Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/tech-solutions"
                            onClick={() => handleItemClick("/tech-solutions")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/tech-solutions" && "text-[#ee4580]"
                            }`}
                          >
                            Tech Solutions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* About Accordion */}
                <div
                  className={`collapse collapse-arrow join-item ${
                    activeItemMenu && activeItemMenu !== "about"
                      ? "opacity-50"
                      : "opacity-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="my-accordion-4"
                    onClick={() =>
                      handleItemClickMenu(
                        activeItemMenu === "about" ? null : "about"
                      )
                    }
                  />
                  <div className="px-5 collapse-title text-[14px] border-y text-black font-medium">
                    About
                  </div>
                  {activeItemMenu === "about" && (
                    <div className="collapse-content border-t transition-max-height duration-500 ease-in-out">
                      <ul className="pt-3 ml-3">
                        <li>
                          <Link
                            href="/who-we-are"
                            onClick={() => handleItemClick("/who-we-are")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/who-we-are" && "text-[#ee4580]"
                            }`}
                          >
                            Who We Are
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/we-works"
                            onClick={() => handleItemClick("/we-works")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/we-works" && "text-[#ee4580]"
                            }`}
                          >
                            How We Work
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/partnership"
                            onClick={() => handleItemClick("/partnership")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/partnership" && "text-[#ee4580]"
                            }`}
                          >
                            Our Partnership
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/achievements"
                            onClick={() => handleItemClick("/achievements")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/achievements" && "text-[#ee4580]"
                            }`}
                          >
                            Achievements
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/news-center"
                            onClick={() => handleItemClick("/news-center")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/news-center" && "text-[#ee4580]"
                            }`}
                          >
                            News Center
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/living-brands-networks"
                            onClick={() =>
                              handleItemClick("/living-brands-networks")
                            }
                            className={`text-[14px] font-[500] ${
                              pathname === "/living-brands-networks" &&
                              "text-[#ee4580]"
                            }`}
                          >
                            Living Networks
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/csr"
                            onClick={() => handleItemClick("/csr")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/csr" && "text-[#ee4580]"
                            }`}
                          >
                            CSR
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/meet-our-team"
                            onClick={() => handleItemClick("/meet-our-team")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/meet-our-team" && "text-[#ee4580]"
                            }`}
                          >
                            Meet The Team
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Resources Accordion */}
                <div
                  className={`collapse collapse-arrow join-item rounded-none ${
                    activeItemMenu && activeItemMenu !== "resources"
                      ? "opacity-50"
                      : "opacity-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="my-accordion-4"
                    onClick={() =>
                      handleItemClickMenu(
                        activeItemMenu === "resources" ? null : "resources"
                      )
                    }
                  />
                  <div className="px-5 collapse-title border-y text-[14px] text-black font-medium cursor-pointer">
                    Resources
                  </div>
                  {activeItemMenu === "resources" && (
                    <div className="collapse-content border-b">
                      <ul className="pt-3 ml-3">
                        <li>
                          <Link
                            href="/blogs"
                            onClick={() => handleItemClick("/blogs")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/blogs" && "text-[#ee4580]"
                            }`}
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/the-edge"
                            onClick={() => handleItemClick("/the-edge")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/the-edge" && "text-[#ee4580]"
                            }`}
                          >
                            The Edge
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Careers */}
              <li
                className={`ml-4 mt-2 ${
                  activeItemMenu && activeItemMenu !== "careers"
                    ? "opacity-50"
                    : "opacity-100"
                }`}
                onClick={() => handleItemClickMenu("careers")}
              >
                <Link
                  href="/careers"
                  onClick={() => handleItemClick("/careers")}
                  className={`pl-1 text-[14px] text-black font-medium ${
                    pathname === "/careers" && "text-[#ee4580]"
                  }`}
                >
                  Careers
                </Link>
              </li>
            </ul>
            {/* Contact Us */}
            <li className="px-5 py-7 ml-1 2xl:ml-3 list-none border-b border-gray-300">
              <Link
                href={"/contact"}
                className={`${pathname === "/contact" ? "text-[#ee4580]" : ""}`}
              >
                <ButtonEffect>
                  <span className="flex gap-[6px]">
                    Contact Us <MdOutlineArrowRightAlt className="text-xl" />
                  </span>
                </ButtonEffect>
              </Link>
            </li>
          </div>
        </div>
        {/* Logo */}
        <div className="navber-logo z-[210] pt-10 md:pt-0 max-[991px]:hidden">
          <div className="">
            <div className="w-[100%]">
              <div className={`flex items-end gap-[5px] text-[#125b5c]`}>
                <Link href="/" onClick={() => handleNavigations("/")}>
                  <Image
                    src={logo}
                    className="w-10 lg:w-11 xl:w-14 "
                    alt="Living Brands logo"
                  ></Image>
                </Link>
                <h1 className="rounded-full bg-[#125b5c] w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] animate-pulse font-bold mb-[14px] 2xl:mb-[17px]"></h1>

                <WordRotate
                  className="text-[11px] xl:text-[13px] 2xl:text-lg  font-[600] p-0 m-0 w-full"
                  words={[
                    "Brands",
                    "Tech",
                    "Media",
                    "Production",
                    "Influencer",
                    "Talent Management",
                    "IT",
                    "UI/UX",
                    "SEO",
                    "Chatbots",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav Links */}
        <div className=" navber-links text-[#125b5c] font-sora font-[500] text-[14px] h-full">
          <ul className="flex justify-center items-center gap-5 lg:gap-8 xl:gap-14 2xl:gap-16">
            <li className={`${pathname === "/work" && "text-[#ee4580]"}`}>
              <Link href="/works" className="link">
                Work
              </Link>
            </li>
            <li
              className={`group flex items-center justify-center cursor-pointer `}
            >
              <p className="link  ">Solutions</p>
              {/* Add transition and transform to the icon */}
              <RiArrowDropDownLine
                className={`text-5xl dropdown-icon transform transition-transform duration-300 ease-in-out group-hover:rotate-180`}
              />

              <div
                className={`overflow-hidden absolute top-full left-0 h-0 group-hover:h-[60vh] bg-white w-screen invisible 
      transition-all duration-700 border-b border-black group-hover:visible`}
              >
                <div className=" w-full h-full z-[115] ">
                  <div className="h-full flex justify-between  gap-5 px-[5%] pt-5 pb-10 lg:pb-64 ">
                    <div className="min-w-72  solutions">
                      <h2 className="mb-4">
                        <a
                          href={"/brand-solutions"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/brand-solutions"
                              ? "text-[#ee4580]"
                              : ""
                          }`}
                        >
                          Brand Solution
                        </a>
                      </h2>
                      <h2 className="mb-4">
                        <a
                          href={"media-solutions"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/media-solutions"
                              ? "text-[#ee4580]"
                              : ""
                          }`}
                        >
                          Media Solution
                        </a>
                      </h2>
                      <h2>
                        <a
                          href={"tech-solutions"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/tech-solutions"
                              ? "text-[#ee4580]"
                              : ""
                          }`}
                        >
                          Tech Solution
                        </a>
                      </h2>
                    </div>
                    <React.Fragment>
                      {solutionsData.map((item, index) => (
                        <a
                          href={item.link}
                          key={index}
                          onMouseMove={(e) => handleMouseMove(e, item?.id)}
                          onMouseLeave={handleMouseLeave}
                          className={`card cursor-pointer`}
                        >
                          <div className="card_image">
                            <Image
                              className="rounded-2xl "
                              src={item?.src}
                              alt={index}
                              width={700}
                              height={500}
                            />
                          </div>
                          <p className="font-[400] md:text-[14px] min-[1500px]:text-[15px] min-[1600px]:text-[16px] min-[1700px]:text-[17px] min-[1800px]:text-[19px] mt-2">
                            {item?.title}
                          </p>

                          <style>{keyframes}</style>

                          {hoveredId === item.id && ( // Show the small div only if hoveredId matches the card id
                            <div
                              className="w-36 h-10 fixed z-[100]"
                              style={{
                                top: `${position.y - 30}px`,
                                left: `${position.x}px`,
                                pointerEvents: "none",
                                transform: "translate(-50%, -50%)", // Center under the mouse
                              }}
                            >
                              <div className="bg-[#125b5c] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                                <p style={scrollAnimation}>View Case study</p>
                              </div>
                            </div>
                          )}
                        </a>
                      ))}
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={` group flex items-center justify-center cursor-pointer`}
            >
              <p className="link">About</p>
              <RiArrowDropDownLine
                className={`text-5xl dropdown-icon transform transition-transform duration-300 ease-in-out group-hover:rotate-180`}
              />
              <div
                className="overflow-hidden absolute top-full left-0 h-0 group-hover:h-[60vh] bg-white w-screen invisible 
      transition-all duration-700 border-b border-black group-hover:visible"
              >
                <div className=" w-full h-full   z-[115] ">
                  <div className="h-full flex justify-between gap-5 px-[5%] pt-5 pb-10 lg:pb-64">
                    <div className="min-w-72  solutions">
                      <h2 className="mb-4">
                        <a
                          href={"/who-we-are"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/who-we-are" ? "text-[#ee4580]" : ""
                          }`}
                        >
                          Who We Are
                        </a>
                      </h2>
                      <h2 className="mb-4">
                        <a
                          href={"we-works"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/we-works" ? "text-[#ee4580]" : ""
                          }`}
                        >
                          How We Work
                        </a>
                      </h2>
                      <h2 className="mb-4">
                        <a
                          href={"partnership"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/partnership" ? "text-[#ee4580]" : ""
                          }`}
                        >
                          Our Partnership
                        </a>
                      </h2>
                      <h2 className="mb-4">
                        <a
                          href={"achievements"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/achievements" ? "text-[#ee4580]" : ""
                          }`}
                        >
                          Achievements
                        </a>
                      </h2>
                      <h2 className="mb-4">
                        <a
                          href={"/news-center"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/news-center" ? "text-[#ee4580]" : ""
                          }`}
                        >
                          News Center
                        </a>
                      </h2>

                      <h2 className="mb-4">
                        <a
                          href={"/living-brands-networks"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/living-brands-networks"
                              ? "text-[#ee4580]"
                              : ""
                          }`}
                        >
                          Living Networks
                        </a>
                      </h2>

                      <h2 className="mb-4">
                        <a
                          href={"/csr"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/csr" ? "text-[#ee4580]" : ""
                          }`}
                        >
                          CSR
                        </a>
                      </h2>

                      <h2 className="mb-4">
                        <a
                          href={"meet-our-team"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/meet-our-team"
                              ? "text-[#ee4580]"
                              : ""
                          }`}
                        >
                          Meet The Team
                        </a>
                      </h2>
                    </div>

                    <React.Fragment>
                      {AboutData.map((item, index) => (
                        <a
                          href={"/works"}
                          key={index}
                          onMouseMove={(e) => handleMouseMove(e, item.id)}
                          onMouseLeave={handleMouseLeave}
                          className={`card cursor-pointer text-lg`}
                        >
                          <div className="card_image ">
                            <Image
                              className="rounded-2xl "
                              src={item?.src}
                              alt="Puma"
                              width={700}
                              height={300}
                            />
                          </div>

                          <p className="font-[400] md:text-[14px] min-[1500px]:text-[15px] min-[1600px]:text-[16px] min-[1700px]:text-[17px] min-[1800px]:text-[19px] mt-2">
                            {item?.title}
                          </p>

                          <style>{keyframes}</style>

                          {hoveredId === item.id && ( // Show the small div only if hoveredId matches the card id
                            <div
                              className="w-36 h-10 fixed z-[100]"
                              style={{
                                top: `${position.y - 30}px`,
                                left: `${position.x}px`,
                                pointerEvents: "none",
                                transform: "translate(-50%, -50%)", // Center under the mouse
                              }}
                            >
                              <div className="bg-[#125b5c] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                                <p style={scrollAnimation}>View Case study</p>
                              </div>
                            </div>
                          )}
                        </a>
                      ))}
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={` group flex items-center justify-center cursor-pointer h-16`}
            >
              <p className="link">Resources</p>
              <RiArrowDropDownLine
                className={`text-5xl dropdown-icon transform transition-transform duration-300 ease-in-out group-hover:rotate-180`}
              />
              <div
                className="overflow-hidden absolute top-full left-0 h-0 group-hover:h-[60vh] bg-white w-screen invisible 
      transition-all duration-700 border-b border-black group-hover:visible"
              >
                <div className="  w-full h-full z-[115] ">
                  <div className=" h-full flex justify-between gap-5 px-[5%] pt-5 pb-10 lg:pb-64 ">
                    <div className="min-w-72 ">
                      <h2 className="mb-4">
                        <a
                          href={"/blogs"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/blogs" ? "text-[#ee4580]" : ""
                          }`}
                        >
                          Blogs
                        </a>
                      </h2>
                      <h2 className="mb-4">
                        <a
                          href={"the-edge"}
                          className={`text-2xl lg:text-[30px] font-[600] ${
                            pathname === "/the-edge" ? "text-[#ee4580]" : ""
                          }`}
                        >
                          The Edge
                        </a>
                      </h2>
                    </div>
                    {ResourcesData.map((item, index) => (
                      <a
                        href={item.link}
                        key={index}
                        onMouseMove={(e) => handleMouseMove(e, item.id)}
                        onMouseLeave={handleMouseLeave}
                        className={`card cursor-pointer text-lg`}
                      >
                        <div className="card_image">
                          <Image
                            className="rounded-2xl "
                            src={item?.src}
                            alt={index}
                            width={700}
                            height={500}
                          />
                        </div>

                        <p className="font-[400] md:text-[14px] min-[1500px]:text-[15px] min-[1600px]:text-[16px] min-[1700px]:text-[17px] min-[1800px]:text-[19px] mt-2">
                          {item?.title}
                        </p>

                        <style>{keyframes}</style>

                        {hoveredId === item.id && ( // Show the small div only if hoveredId matches the card id
                          <div
                            className="w-36 h-10 fixed z-[100]"
                            style={{
                              top: `${position.y - 30}px`,
                              left: `${position.x}px`,
                              pointerEvents: "none",
                              transform: "translate(-50%, -50%)", // Center under the mouse
                            }}
                          >
                            <div className="bg-[#125b5c] text-white overflow-hidden w-full h-full rounded-full flex justify-center items-center relative">
                              <p style={scrollAnimation}>View Blog</p>
                            </div>
                          </div>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/careers"
                className={`${pathname === "/careers" && "text-[#ee4580]"}`}
              >
                Careers
              </Link>
            </li>
          </ul>
          <li className="pt-7 ml-1 2xl:ml-3 list-none">
            <Link
              href={"/contact"}
              className={`${pathname === "/contact" ? "text-[#ee4580]" : ""}`}
            >
              <ButtonEffect>
                <span className="flex gap-[6px]">
                  Contact Us <MdOutlineArrowRightAlt className="text-xl" />
                </span>
              </ButtonEffect>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;
