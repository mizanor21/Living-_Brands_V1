"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const fetchColorData = async () => {
  const res = await fetch(
    "https://living-brands-admin.vercel.app/api/color-palette",
    {
      next: { revalidate: 10 },
    }
  );
  return await res.json();
};

const ColorPalette = () => {
  const [colors, setColors] = useState([]);

  // Fetch color data on component mount
  useEffect(() => {
    const getColorData = async () => {
      const colorData = await fetchColorData();
      setColors(colorData);
    };
    getColorData();
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <>
      <div className="hidden md:block font-sora">
        <section
          ref={targetRef}
          className="relative h-[700vh] bg-white py-10 lg:py-20"
        >
          <div className="my-10 lg:my-20">
            <h1 className="text-[24px] text-[#125b5c] font-[600] text-center ">
              Have you got what it takes to #CreateALivingBrands?
            </h1>
            <p className="text-[19px] font-[400] text-center mt-2">
              Check out our core principles. If they align with your values, do
              apply.
            </p>
          </div>
          <div className="sticky top-12 flex items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-4 transition-transform duration-2000 ease-out"
            >
              {colors.map((color) => (
                <div
                  key={color.id}
                  className="w-[450px] overflow-hidden border hover:-translate-y-5 duration-500 mt-5 bg-white"
                >
                  <div>
                    <Image
                      width={450}
                      height={400}
                      className="w-full h-[450px] object-cover"
                      src={color.imageUrl} // Assuming color data includes imageUrl
                      alt={color.title}
                    />
                  </div>
                  <div className="p-[2rem] h-[300px] relative group">
                    <div className="text-center">
                      <h2 className="text-[24px] font-bold text-[#185C5D]">
                        {color.title}
                      </h2>
                      <p className="text-[16px] group-hover:text-black py-4">
                        {color.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-[100%] bg-gray-300 opacity-20 transition-all duration-500 transform group-hover:top-0" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      {/* Small device view */}
      <div className="md:hidden mt-10">
        {colors.map((item) => (
          <div key={item.id}>
            <div>
              <img
                className="w-full h-[350px]"
                src={item.imageUrl}
                alt={item.title}
              />
            </div>
            <div className="mt-4 mb-5">
              <h2 className="text-[22px] font-[600] text-[#185C5D]">
                {item.title}
              </h2>
              <p className="text-[16px] py-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorPalette;