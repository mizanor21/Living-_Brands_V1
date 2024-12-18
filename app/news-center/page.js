"use client";

import React, { useState, useEffect } from "react";
import ButtonEffect from "../button/page";
import { useItemsData } from "@/components/Custom/DataFetch";
import Items from "@/components/Items/Items";

const News = () => {
  // State for storing all data and filtered data
  const { data: allData, isLoading, error } = useItemsData();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Effect to load all items initially
  useEffect(() => {
    if (allData) {
      setFilteredData(allData);
    }
  }, [allData]);

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(allData); // Show all data
    } else {
      const filtered = allData.filter((item) => item.category === category);
      setFilteredData(filtered); // Filter based on category
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Failed to load data</div>;
  }

  return (
    <div className="bg-white relative z-[110] rounded-b-[40px] pb-10 lg:pb-20 font-sora">
      <div className="px-[5%] pb-10">
        <h2 className="text-2xl text-center md:text-4xl lg:text-[48px] leading-10 text-[#125b5c] font-bold py-10 lg:pt-[80px] lg:pb-[70px]">
          Living Brands In The News
        </h2>
        <div className="md:flex justify-end my-5 space-y-1 md:space-y-0">
          <button onClick={() => handleCategoryChange("Casestudy")}>
            <ButtonEffect>Press Releases</ButtonEffect>
          </button>
          <span className="divider divider-horizontal divider-start divider-neutral"></span>
          <button onClick={() => handleCategoryChange("Daily Creativity")}>
            <ButtonEffect>Media Features</ButtonEffect>
          </button>
        </div>
        <hr />

        {/* Pass the filtered data to Items component */}
        <div className="mt-5">
          <Items data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default News;
