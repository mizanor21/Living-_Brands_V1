"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SkeletonLoader from "../Custom/SkeletonLoader"; // Assuming you have a reusable SkeletonLoader component

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://living-brands-admin.vercel.app/api/works"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching works data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleMouseMove = (event, id) => {
    const offsetX = event.clientX;
    const offsetY = event.clientY;

    setPosition({ x: offsetX, y: offsetY });
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 md:gap-y-20">
      {loading
        ? Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="space-y-3">
                <SkeletonLoader height="h-64" rounded="rounded-xl" />{" "}
                {/* Image Skeleton */}
                <SkeletonLoader height="h-6" width="w-3/4" />{" "}
                {/* Title Skeleton */}
                <SkeletonLoader height="h-5" width="w-1/2" />{" "}
                {/* Description Skeleton */}
              </div>
            ))
        : items.map((item) => (
            <Link key={item._id} href="/work-details">
              <div
                className="relative"
                onMouseMove={(e) => handleMouseMove(e, item._id)}
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

                {hoveredId === item._id && (
                  <div
                    className="w-36 h-10 fixed z-[100]"
                    style={{
                      top: `${position.y - 30}px`,
                      left: `${position.x}px`,
                      pointerEvents: "none",
                      transform: "translate(-50%, -50%)",
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
