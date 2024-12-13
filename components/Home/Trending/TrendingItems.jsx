"use client";
import React from "react";

const TrendingItems = () => {
  const items = [
    {
      category: "Technology",
      title:
        "The Future Trajectory of Marketing to Drive Positive Brand Growth",
      photo: "https://i.postimg.cc/J0c4bgRc/about2.jpg",
      date: "2024-12-09T10:00:00Z",
    },
    {
      category: "Business",
      title:
        "Living Brands, Bangladesh Largest Independent Agency, Cements Its Status as a Global Challenger with European Expansion and Acquisition of Amsterdam’s Hottest Design Agency, Addikt",
      photo: "https://i.postimg.cc/QtJh1msG/bh3vptdTO4U-HD.jpg",
      date: "2024-12-09T12:00:00Z",
    },
    {
      category: "Health",
      title:
        "Dabur Chyawanprash's 'Anti-Medicine Campaign’ Returns with a Festive Twist",
      photo: "https://i.postimg.cc/vBsG4jJt/jidDZpvSFU0-HD.jpg",
      date: "2024-12-09T14:00:00Z",
    },
  ];

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 lg:gap-20 font-sora group relative hover:opacity-100 peer transition-opacity duration-500"
        >
          <div className="md:col-span-2 cursor-pointer">
            <p className="border border-black rounded-full px-3 inline-block my-5">
              {item?.category}
            </p>
            <div className="lg:grid grid-cols-4 justify-between items-center">
              <h3 className="font-[700] text-[14px] lg:text-[18px] py-5 md:py-10 col-span-3">
                {item?.title}
              </h3>
              <small className="text-end hidden lg:flex">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </small>
            </div>
            <div className="pb-2 border-b border-black">{/* <hr /> */}</div>
          </div>
          <div className="md:col-span-1 h-full flex justify-center items-center">
            <img
              src={item?.photo}
              alt={item?.title}
              className="rounded w-[150px] sm:w-[200px] lg:w-[500px] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000"
            />
          </div>
        </div>
      ))}

      {/* Opacity logic for other items */}
      <style jsx>{`
        .space-y-5:hover > .peer:not(:hover) {
          opacity: 0.5;
          transition: opacity 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default TrendingItems;
