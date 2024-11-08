"use client";
import React, { useEffect, useState } from "react";
import ButtonEffect from "../button/page";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";
import axios from "axios";

const Achievement = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await axios.get(
          "https://living-brands-admin.vercel.app/api/achievements"
        );
        setAwards(response.data || []);
      } catch (error) {
        console.error("Failed to load awards data", error);
        setError("Failed to load awards data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p>Loading achievements...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white relative z-[110] grid grid-cols-1 lg:gap-y-20 py-10 lg:py-20 font-sora rounded-b-[20px] lg:rounded-b-[50px]">
      {awards.map((award, index) => (
        <div
          key={award._id}
          className={`grid gap-5 mb-8 sm:grid-cols-1 md:grid-cols-2 px-[5%] ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          <div className="order-first md:order-last flex justify-center items-center">
            {award.image ? (
              <img src={award.image} alt={award.title} className="rounded-lg" />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>
          <div className="order-last md:order-first">
            <h1 className="text-2xl font-bold mt-1 md:text-3Xl lg:text-[48px] text-[#125b5c] mb-8">
              {award.title}
            </h1>
            {award.description &&
              award.description.map((paragraph, i) => (
                <p key={i} className="text-[18px] text-justify mb-4">
                  {paragraph}
                </p>
              ))}
            {award.link && (
              <Link href={award.link}>
                <div className="max-w-sm mt-10">
                  <ButtonEffect>
                    <span className="flex gap-2">
                      Learn More <MdOutlineArrowRightAlt className="text-xl" />
                    </span>
                  </ButtonEffect>
                </div>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
