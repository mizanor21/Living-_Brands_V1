"use client";
import React from "react";
import "./careerdetails.css";
import JobListings from "./JobListings";
import ButtonEffect from "../button/page";
const CareerDetails = () => {
  return (
    <div className="relative z-[110] font-sora bg-white rounded-b-[20px] lg:rounded-b-[50px] ">
      <div className="career-details py-12">
        <div className="flex mx-auto h-full justify-center items-center px-[5%]">
          <div>
            <p className="text-white font-bold text-center mb-2">
              Discover Your Dream Job
            </p>
            <h1 className="text-white font-bold text-4xl text-center mb-2">
              More Than Just a Job, We’re a Community
            </h1>
            <p className="text-center max-w-[900px] text-white text-justify">
              We understand that finding a fulfilling career can be challenging.
              Our mission is to simplify this process and offer a workplace
              you&apos;ll enjoy coming to. Explore our job openings to start
              your journey.
            </p>
            <div className="flex justify-center mt-5">
              <a
                href="#job"
                onClick={(e) => {
                  e.preventDefault(); // Prevent the default anchor behavior
                  const jobSection = document.getElementById("job");
                  if (jobSection) {
                    jobSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the job section
                  }
                }}
              >
                <ButtonEffect>See All Openings</ButtonEffect>
              </a>
            </div>
          </div>
        </div>
      </div>
      <JobListings />
    </div>
  );
};

export default CareerDetails;
