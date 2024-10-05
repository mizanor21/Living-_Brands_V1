"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ContactUsImg = () => {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   fetch("ContactleftImg.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCards(data);
  //     });
  // }, []);

  const cards = [
    {
      id: 1,
      image:
        "https://i.postimg.cc/nhyVhZXh/Whats-App-Image-2024-09-22-at-16-57-08.jpg",
    },

    {
      id: 2,
      image: "https://i.postimg.cc/2SwxW0gd/contact2.png",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/Bv7cYXSX/contact3.png",
    },
  ];

  return (
    <div>
      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <div className="w-full  mx-auto">
              <Image
                src={card.image}
                alt=""
                width={400}
                height={500}
                className=" w-full h-full "
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsImg;
