import ButtonEffect from "@/app/button/page";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ContactUsRightPart = () => {
  return (
    <div className=" mb-16">
      <div>
        <p className="text-[17px] my-2 text-[#125b5c]">GOT AN IDEA?</p>
        <h1 className="text-[30px] font-bold my-2 text-[#125b5c]">
          Drop us a message
        </h1>
        <p className="text-[20px] text-[#1f2937] my-2">
          We&apos;re excited to work with you soon! Please drop an email with
          your details & requirements to bd@living-brand.com.
        </p>
        <p className="text-[20px] text-[#1f2937] my-2">
          You can also fill this form & we&apos;ll get back in 2 business days.
        </p>
      </div>
      <div>
        <label>
          <p className="text-[20px] mt-12 mb-8">Your Name</p>
          <span className="mb-1 "></span>
          <input
            type="text"
            className=" w-full border-b border-black focus:outline-none h-10 text-[20px]"
          />
        </label>
        <label>
          <p className="text-[20px] mt-12 mb-8">
            Your Organization&apos;s Name
          </p>
          <span className="mb-1"></span>
          <input
            type="text"
            className=" w-full border-b border-black focus:outline-none h-10 text-[20px]"
          />
        </label>
        <label>
          <p className="text-[20px] mt-12 mb-8">Your Email</p>
          <span className="mb-1"></span>
          <input
            type="text"
            className=" w-full border-b border-black focus:outline-none h-10 text-[20px]"
          />
        </label>
        <label>
          <p className="text-[20px] mt-12 mb-8">Your Number</p>
          <span className="mb-1"></span>
          <input
            type="text"
            className=" w-full border-b border-black focus:outline-none h-10 text-[20px] "
          />
        </label>
        <label>
          <p className="text-[20px] mt-12 mb-8">Website/Social Media Link</p>
          <span className="mb-1"></span>
          <input
            type="text"
            className=" w-full border-b border-black focus:outline-none h-10 text-[20px]"
          />
        </label>
        <p className="text-[20px] mt-12 mb-8">
          Which services are you interested in?
        </p>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Branding
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Social Media Management
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Content Creation & Marketing
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Ad Film/Video Production{" "}
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          SEO
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Website Transformation{" "}
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Mobile App Development & UI/UX
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          CRM/Sales Pipeline Development{" "}
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Influencer Marketing{" "}
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          IP Creation
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Email & SMS Marketing Automation
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Integrated Campaigns
        </button>

        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Performance Media
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Growth via Media Buying
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Social Listening & ORM
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Consumer & Market Research
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Integrated Campaigns
        </button>
        <button className="p-2 text-[16px] border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Others
        </button>

        <label>
          <p className="text-[20px] mt-12">What&apos;s on your mind? </p>
          <span className="mb-1"></span>
          <input
            type="text"
            className=" w-full border-b border-black focus:outline-none h-10 text-[20px]"
          />
        </label>
        <p className="text-[20px] mt-12">How did you hear about us?</p>

        <button className="p-2 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Referral
        </button>
        <button className="p-2 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Media & News
        </button>
        <button className="p-2 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          LinkedIn
        </button>
        <button className="p-2 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Instagram/Facebook
        </button>

        <button className="p-2 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Emails/Newsletter
        </button>
        <button className="p-2 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Search
        </button>
        <button className="p-2 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
          Other Sources
        </button>
        <br />
        {/* <button className="border py-2 px-24 rounded-full   hover:cursor-pointer   text-[20px] hover:bg-white hover:text-black border-black text-white  bg-[#125b5c] mt-5">
          Submit
        </button> */}

        <Link href={""}>
          <div className="max-w-md pt-10">
            <ButtonEffect>
              <span className="flex gap-[6px]">
                Submit
                <MdOutlineArrowRightAlt className="text-[20px]" />
              </span>
            </ButtonEffect>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactUsRightPart;
