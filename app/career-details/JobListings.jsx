"use client";
import { useJobsData } from "@/components/Custom/DataFetch";
import { useState } from "react";
import { BsBriefcase, BsGlobe } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";

const JobListings = () => {
  const { data, isLoading, error } = useJobsData();

  const [filters, setFilters] = useState({
    jobType: "Full time",
    workExperience: [],
  });

  return (
    <div className="lg:container lg:mx-auto py-10 lg:py-20" id="job">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-[5%]">
        {/* Sidebar Filters */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold">Filters</h2>
          <div className="mt-4">
            <h3 className="text-md font-medium">Job Type</h3>
            <div>
              <input
                type="checkbox"
                id="full-time"
                value="Full time"
                className="hidden"
                checked={filters.jobType === "Full time"}
                onChange={() =>
                  setFilters({ ...filters, jobType: "Full time" })
                }
              />
              <label
                htmlFor="full-time"
                className="flex items-center cursor-pointer"
              >
                <span className="mr-2 w-4 h-4 border-2 border-[#125b5c] rounded flex items-center justify-center">
                  {filters.jobType === "Full time" && (
                    <span className="w-2.5 h-2.5 bg-[#125b5c] rounded" />
                  )}
                </span>
                Full time (18)
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-md font-medium">Work Experience</h3>
            <div className="mt-2">
              {[
                "1-2 years",
                "2-3 years",
                "3-4 years",
                "4-5 years",
                "6+ years",
              ].map((experience, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`exp-${index}`}
                    value={experience}
                    className="hidden"
                  />
                  <label
                    htmlFor={`exp-${index}`}
                    className="flex items-center cursor-pointer"
                  >
                    <span className="mr-2 w-4 h-4 border-2 border-[#125b5c] rounded flex items-center justify-center">
                      {filters.workExperience.includes(experience) && (
                        <span className="w-2.5 h-2.5 bg-[#125b5c] rounded" />
                      )}
                    </span>
                    {experience}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold text-[#125b5c]">Join us</h2>
          <p className="text-gray-500">Current Openings</p>

          {/* Search Section
          <div className="flex mt-6 gap-4">
            <input
              type="text"
              placeholder="Job title or skill"
              className="border p-2 w-full"
            />
            <input
              type="text"
              placeholder="City, state/province or country"
              className="border p-2 w-full"
            />
            <button className="bg-[#125b5c] text-white px-4 py-2 rounded">
              Search
            </button>
          </div> */}

          {/* Job Cards */}
          <div className="mt-8 space-y-4">
            {isLoading ? (
              <p>Loading jobs...</p>
            ) : error ? (
              <p className="text-red-500">
                Error loading jobs: {error.message}
              </p>
            ) : data && data.length > 0 ? (
              data.map((job) => (
                <div
                  key={job._id}
                  className="border p-4 rounded shadow-sm flex flex-col gap-4"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <BsBriefcase />
                        Type: {job.location?.type} • Experience:{" "}
                        {job.experienceLevel}
                      </p>
                      <h2 className="text-xl font-semibold mt-1">
                        {job.title}
                      </h2>
                      <p className="text-gray-700 font-medium">
                        {job.salary?.currency} {job.salary?.min}-
                        {job.salary?.max} / {job.salary?.frequency}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <p className="flex items-center gap-2 text-gray-600">
                      <BsGlobe />
                      {job.location?.city}, {job.location?.country}
                    </p>
                    <p className="text-gray-500">{job.department}</p>
                  </div>

                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>Company:</strong> {job.company?.name}
                    </p>
                    <p>
                      <strong>Responsibilities:</strong>{" "}
                      {job.responsibilities?.join(", ")}
                    </p>
                    <p>
                      <strong>Benefits:</strong> {job.benefits?.join(", ")}
                    </p>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar />
                    <p className="ml-2">
                      Application Deadline:{" "}
                      {new Date(
                        job.applicationDetails?.deadline
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-blue-200">
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <p>No job openings found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
