import Image from "next/image";
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
      // photo: "https://i.postimg.cc/QtJh1msG/bh3vptdTO4U-HD.jpg",
      date: "2024-12-09T12:00:00Z",
    },
    {
      category: "Health",
      title:
        "Dabur Chyawanprash's 'Anti-Medicine Campaign’ Returns with a Festive TwistDabur Chyawanprash's 'Anti-Medicine Campaign’ Returns with a Festive Twist",
      // photo: "https://i.postimg.cc/vBsG4jJt/jidDZpvSFU0-HD.jpg",
      date: "2024-12-09T14:00:00Z",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.title}
          className="grid grid-cols-3 gap-10 lg:gap-20 font-sora"
        >
          <div className="col-span-2">
            <p className="border border-black rounded-full px-3 inline-block my-5">
              {item?.category}
            </p>
            <div className="grid grid-cols-4 justify-between items-center">
              <h3 className="font-[700] text-[18px] py-10 col-span-3">
                {item?.title}
              </h3>
              <small className="text-end">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </small>
            </div>
            <div className="pb-2">
              <hr />
            </div>
          </div>
          {/* <div className="col-span-1 flex justify-items-center">
            <img
              src={item?.photo} // Ensure 'item.photo' is correct
              alt={item?.title}
              className="rounded"
            />
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default TrendingItems;
