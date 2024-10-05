"use client";

import React, { useEffect } from "react";

const ButtonEffect = ({ children }) => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn-posnawr");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", (e) => {
        let parentOffset = button.getBoundingClientRect();
        let relX = e.clientX - parentOffset.left;
        let relY = e.clientY - parentOffset.top;

        const span = button.querySelector("span");
        span.style.top = relY + "px";
        span.style.left = relX + "px";
      });

      button.addEventListener("mouseout", (e) => {
        let parentOffset = button.getBoundingClientRect();
        let relX = e.clientX - parentOffset.left;
        let relY = e.clientY - parentOffset.top;

        const span = button.querySelector("span");
        span.style.top = relY + "px";
        span.style.left = relX + "px";
      });
    });
  }, []);

  const handleMouseEnter = (e) => {
    const span = e.currentTarget.querySelector("span");
    span.style.width = "225%";
    span.style.height = "562.5px";
    span.style.transition = "width 0.6s ease, height 0.6s ease"; // Smooth expansion
  };

  const handleMouseLeave = (e) => {
    const span = e.currentTarget.querySelector("span");
    span.style.width = "0";
    span.style.height = "0";
    span.style.transition = "width 0.6s ease, height 0.6s ease"; // Smooth shrinking
  };

  return (
    <div
      className="btn-posnawr relative flex justify-center items-center gap-2 rounded-full py-3 px-8 text-center text-lg text-white border-2 border-transparent hover:border-[#115c5c] bg-[#115c5c] hover:text-[#115c5c] z-[20] overflow-hidden transition-colors duration-300 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="absolute block bg-white rounded-full transition-all ease-in-out duration-700 z-0"
        style={{
          width: "0",
          height: "0",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></span>
      <span className="relative z-20 font-[500] flex items-center gap-2">
        <span className="text-sm">{children}</span>
      </span>
    </div>
  );
};

export default ButtonEffect;
