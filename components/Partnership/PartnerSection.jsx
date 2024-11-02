"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PartnerSection = () => {
  const [partnersData, setPartnersData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://living-brands-admin.vercel.app/api/partnership"
        );
        console.log(response);
        setPartnersData(response.data);
      } catch (error) {
        console.error("Error fetching partner data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(partnersData);
  return (
    <div className="bg-white py-10 relative z-[110] rounded-b-[20px] lg:rounded-b-[50px] font-sora">
      <div className="p-[5%]">
        <h2 className="text-2xl md:text-3xl lg:text-[48px] leading-[1.2] font-bold text-[#125b5c] mb-10 tracking-tighter">
          Proudly Collaborating With The Most Cutting-Edge Platforms In The
          Industry
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-12 items-center text-center  justify-center mt-36">
          {partnersData.map((partner, index) => (
            <div key={index} className="text-center">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="mx-auto mb-2 h-16 object-contain saturate-0 hover:saturate-100"
              />
              <h3 className="text-[20px] tracking-tighter font-bold text-black mb-2 mt-10">
                {partner.name}
              </h3>
              <p className="text-black opacity-75 text-[15px] font-[400] mb-2">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
