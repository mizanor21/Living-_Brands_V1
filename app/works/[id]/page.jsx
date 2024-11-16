import React from "react";

const WorkDetails = ({ id }) => {
  console.log(id);
  return (
    <div className="flex flex-col px-4 lg:px-[100px] font-sora bg-white relative z-[120] rounded-b-[20px] lg:rounded-b-[40px]">
      <div className="w-full flex flex-col gap-3 text-[#125b5c] justify-start mt-16">
        <p className="text-[19px]">Casestudy</p>
        <h1 className="font-bold text-[24px] lg:text-[48px]">
          Pusti Chinigura Rice X Nusrat Faria I Eid Campaign I Living Brands
        </h1>
      </div>
      <div className="lg:my-20 mt-10 lg:mt-20 mb-10 lg:mb-20 lg:min-h-screen">
        <img
          className="h-full w-full rounded-3xl rounded-tr-3xl object-cover"
          src="https://i.postimg.cc/K88zzWnM/1.jpg"
          alt="Pusti Chinigura Rice Campaign"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between mb-20">
        <div className="w-full lg:w-[30%] flex flex-col gap-10 lg:mb-0 mb-5">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-3xl text-[#125b5c]">Services</h1>
            <ul className="list-none space-y-4 text-[15px]">
              <li className="cursor-pointer">Film & Video</li>
              <li className="cursor-pointer">
                Research, Data & Analytics Solutions
              </li>
              <li className="cursor-pointer">Media Solutions</li>
              <li className="cursor-pointer">Tech Solutions</li>
              <li className="cursor-pointer">Brand Solutions</li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-[70%]">
          <small className="text-[15px] leading-snug">
            Pusti Chigura Rice brings you something truly special! We&apos;re
            thrilled to present our latest campaign featuring the glamorous
            Nusrat Faria, who&apos;s here to make your Eid celebrations even
            more delightful. <br />
            <br /> In this exclusive OVC (Online Video Commercial), Nusrat
            Faria, a beloved actress and style icon, invites you to share your
            very own Eid special recipes made with Pusti Chigura Rice. <br />{" "}
            <br /> Whether it’s a family favorite passed down through
            generations or a modern twist on a classic dish, we want to see what
            makes your Eid spread extraordinary!
          </small>
        </div>
      </div>

      <div className="mb-20 video-container w-full h-[300px] lg:h-screen">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/KwLTb5k9Tlw?si=mmkivI22z_eRzsOv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WorkDetails;
