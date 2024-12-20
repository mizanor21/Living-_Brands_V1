"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
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

const Nav = () => {
  // State declarations
  const [on, setOn] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [about, setAbout] = useState(false);
  const [resources, setResources] = useState(false);

  const pathname = usePathname();
  // Toggle functions
  const toggleSolutions = () => setSolutions(!solutions);
  const toggleAbout = () => setAbout(!about);
  const toggleResources = () => setResources(!resources);
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

  // Card data
  const solutionsData = [
    {
      id: 1,
      src: "https://i.postimg.cc/8PDs8ccw/kgrit-U3-IYXE-HD-1.jpg",
      title: "DBL Ceramics Presents: An Emotional May Day Tribute",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/K88zzWnM/1.jpg",
      title: "Pusti Chinigura Rice X Nusrat Faria",
    },
  ];

  const AboutData = [
    {
      id: 1,
      src: "https://i.postimg.cc/9Fkg9rMr/puma.png",
      title: "PUMA.com | Clothing, Shoes, Accessories | Forever Faster.",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/J0c4bgRc/about2.jpg",
      title: "Introducing Outlander Black Edition",
    },
  ];

  const ResourcesData = [
    {
      id: 1,
      src: "https://i.postimg.cc/1t3S7tTc/dt-BSuy7-OJd8-HD.jpg",
      title: "Ceramic Expo Bangladesh Highlight 01",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/XNg2MVb3/ey-SLf-CX2-Vsk-HD.jpg",
      title: "Disruption on the Digital Strages",
    },
  ];

  return (
    <>
      <div className="md:sticky relative top-0 z-[9999]">
        <Popup />
      </div>
      <div className="font-sora  navber md:sticky md:top-0  px-[5%] z-[150] bg-white py-2 lg:py-3">
        {/* Logo and side menu */}
        <div className="navber-logo z-[210] pt-10 md:pt-0">
          <div className="">
            <div className="w-[100%]">
              <div className={`flex items-end gap-[5px] text-[#125b5c]`}>
                <Link href="/" onClick={() => handleNavigations("/")}>
                  <Image
                    src={logo}
                    className="w-16"
                    alt="Living Brands logo"
                  ></Image>
                </Link>
                <h1 className="rounded-full bg-[#125b5c] w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] animate-pulse font-bold mb-[16px]"></h1>

                <WordRotate
                  className="text-sm md:text-lg  font-[600] p-0 m-0 w-full"
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
            {on && (
              <div className="block lg:hidden side-menu-2 pt-20 lg:pt-0">
                <div className="side-menu-top pt-[53px] md:pt-0">
                  <div className="w-[100%]">
                    <Link
                      className=" flex items-end gap-1 text-[#125b5c]"
                      href="/"
                    >
                      <Image
                        src={logo}
                        className="w-[24px]"
                        alt="Living Brands logo"
                      ></Image>
                      <h1 className="animate-pulse rounded-full bg-[#125b5c] w-[5px] h-[5px] mb-[14px]"></h1>
                      <WordRotate
                        className="text-sm md:text-lg  font-[600] p-0 m-0 w-full "
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
                  </div>
                  <div
                    className="side-menu-top-menu text-black"
                    onClick={toggleOn}
                  >
                    <ImCancelCircle className="text-black" />
                  </div>
                </div>

                {/* Side Menu Links  */}
                <ul>
                  <li className="ml-4 mb-2">
                    <Link
                      href="/works"
                      onClick={() => handleNavigations("/works")}
                      className={` text-[14px] text-black font-medium ${
                        pathname === "/works" && "text-[#ee4580]"
                      }`}
                    >
                      Work
                    </Link>
                  </li>

                  <div className="collapse collapse-arrow border-y border-[#125b5c] rounded-none">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[14px] text-black font-medium">
                      Solutions
                    </div>
                    <div className="collapse-content">
                      <ul>
                        <li>
                          <Link
                            href={"/brand-solutions"}
                            onClick={() =>
                              handleNavigations("/brand-solutions")
                            }
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
                            href={"/media-solutions"}
                            onClick={() =>
                              handleNavigations("/media-solutions")
                            }
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
                            href={"/tech-solutions"}
                            onClick={() => handleNavigations("/tech-solutions")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/tech-solutions" && "text-[#ee4580]"
                            }`}
                          >
                            Tech Solutions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow border-b border-[#125b5c] rounded-none">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[14px] text-black font-medium">
                      About
                    </div>
                    <div className="collapse-content">
                      <ul>
                        <li
                          onClick={() => handleNavigations("/who-we-are")}
                          className={`text-[14px] font-[500] ${
                            pathname === "/who-we-are" && "text-[#ee4580]"
                          }`}
                        >
                          <Link href={"/who-we-are"}>Who We Are</Link>
                        </li>
                        <li
                          onClick={() => handleNavigations("/we-works")}
                          className={`text-[14px] font-[500] ${
                            pathname === "/we-works" && "text-[#ee4580]"
                          }`}
                        >
                          <Link href={"we-works"}>How We Work</Link>
                        </li>
                        <li
                          onClick={() => handleNavigations("/partnership")}
                          className={`text-[14px] font-[500] ${
                            pathname === "/partnership" && "text-[#ee4580]"
                          }`}
                        >
                          <Link href={"partnership"}>Our Partnership</Link>
                        </li>
                        <li
                          onClick={() => handleNavigations("/achievements")}
                          className={`text-[14px] font-[500] ${
                            pathname === "/achievements" && "text-[#ee4580]"
                          }`}
                        >
                          <Link href={"achievements"}>Achievements</Link>
                        </li>
                        <li
                          onClick={() => handleNavigations("/news-center")}
                          className={`text-[14px] font-[500] ${
                            pathname === "/news-center" && "text-[#ee4580]"
                          }`}
                        >
                          <Link href={"news-center"}>News Center</Link>
                        </li>

                        <li
                          onClick={() =>
                            handleNavigations("/living-brands-networks")
                          }
                          className={`text-[14px] font-[500] ${
                            pathname === "/living-brands-networks" &&
                            "text-[#ee4580]"
                          }`}
                        >
                          <Link href={"/living-brands-networks"}>
                            Living Networks
                          </Link>
                        </li>
                        <li
                          onClick={() => handleNavigations("/csr")}
                          className={`text-[14px] font-[500] ${
                            pathname === "/csr" && "text-[#ee4580]"
                          }`}
                        >
                          <Link href={"csr"}>CSR</Link>
                        </li>

                        <li
                          onClick={() => handleNavigations("/meet-our-team")}
                          className={`text-[14px] font-[500] ${
                            pathname === "/meet-our-team" && "text-[#ee4580]"
                          }`}
                        >
                          <Link href={"meet-our-team"}>Meet The Team</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow border-b border-[#125b5c] rounded-none">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[14px] text-black font-medium">
                      Resources
                    </div>
                    <div className="collapse-content">
                      <ul>
                        <li>
                          <Link
                            href={"/blogs"}
                            onClick={() => handleNavigations("/blogs")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/blogs" && "text-[#ee4580]"
                            }`}
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/the-edge"}
                            onClick={() => handleNavigations("/the-edge")}
                            className={`text-[14px] font-[500] ${
                              pathname === "/the-edge" && "text-[#ee4580]"
                            }`}
                          >
                            The Edge
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <li className="ml-4 mt-2">
                    <Link
                      href="/careers"
                      onClick={() => handleNavigations("/careers")}
                      className={` text-[14px] text-black font-medium ${
                        pathname === "/careers" && "text-[#ee4580]"
                      }`}
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
                <Link
                  href={"/contact"}
                  onClick={() => handleNavigations("/contact")}
                  className={`mt-10 text-[25px] mb-3 ${
                    pathname === "/contact" && "text-[#ee4580]"
                  }`}
                >
                  <ButtonEffect>
                    <span className="flex gap-[6px]">
                      Contact Us <MdOutlineArrowRightAlt className="text-xl" />
                    </span>
                  </ButtonEffect>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Main Nav Links */}
        <div className=" navber-links text-[#125b5c] font-sora font-[500] text-[14px] h-full">
          <ul className="">
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
      transition-all duration-500 border-b border-black group-hover:visible`}
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
                          href={"/works"}
                          key={index}
                          onMouseMove={(e) => handleMouseMove(e, item?.id)}
                          onMouseLeave={handleMouseLeave}
                          className={`card cursor-pointer ${
                            pathname === "" ? "text-[#ee4580]" : ""
                          }`}
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
                          <p className="font-[400] text-[19px] mt-2">
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
      transition-all duration-500 border-b border-black group-hover:visible"
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
                          className={`card cursor-pointer text-lg ${
                            pathname === "" ? "text-[#ee4580]" : ""
                          }`}
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

                          <p className="font-[400] text-[19px] mt-2">
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
      transition-all duration-500 border-b border-black group-hover:visible"
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
                        href={"/blogs"}
                        key={index}
                        onMouseMove={(e) => handleMouseMove(e, item.id)}
                        onMouseLeave={handleMouseLeave}
                        className={`card cursor-pointer text-lg ${
                          pathname === "/blogs" ? "text-[#ee4580]" : ""
                        }`}
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

                        <p className="font-[400] text-[19px] mt-2">
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
            <li>
              <Link
                href={"/contact"}
                className={` ${
                  pathname === "/contact" ? "text-[#ee4580]" : ""
                }`}
              >
                <ButtonEffect>
                  <span className="flex gap-[6px]">
                    Contact Us <MdOutlineArrowRightAlt className="text-xl" />
                  </span>
                </ButtonEffect>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="navber-menu pt-10 md:pt-0" onClick={toggleOn}>
          <IoMenu />
        </div>
      </div>
    </>
  );
};

export default Nav;
