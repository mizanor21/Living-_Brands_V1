import React from "react";

const PartnerSection = () => {
  const partnersData = [
    {
      name: "ONDC Partner",
      description: "Complete e-commerce solutions to meet your business goals.",
      logo: "https://i.postimg.cc/02t5zJKh/Screenshot_from_2024-09-28_16-58-13.png",
    },
    {
      name: "Google Premier Partner",
      description: "Leverage the power of Google Ads to scale your business.",
      logo: "https://i.postimg.cc/rFyFy9sS/Screenshot-from-2024-09-28-16-59-59.png",
    },
    {
      name: "Zoho Premium Partner",
      description:
        "Design and implement integrated business architectures and digital transformation solutions.",
      logo: "https://i.postimg.cc/4xRCp7pQ/6483768cc3d75ee3ac3fc879-Zoho-Partner-Updated.png",
    },
    {
      name: "MoEngage Partner",
      description:
        "Design and implement integrated business architectures and digital transformation solutions.",
      logo: "https://i.postimg.cc/RCkWjdc1/Screenshot-from-2024-10-01-12-39-27.png",
    },
    {
      name: "Adobe Solution Partner",
      description:
        "Design and implement integrated business architectures and digital transformation solutions.",
      logo: "https://i.postimg.cc/fWfRhPzz/Screenshot_from_2024-09-28_16-59-21.png",
    },

    {
      name: "Zoho Premium Partner",
      description:
        "Design and implement integrated business architectures and digital transformation solutions.",
      logo: "https://i.postimg.cc/hPYS7tGS/Screenshot-from-2024-10-01-12-35-55.png",
    },
  ];
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
