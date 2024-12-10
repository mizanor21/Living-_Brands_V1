import Image from "next/image";
import React from "react";

const Partner = async () => {
  const res = await fetch(
    "https://living-brands-admin.vercel.app/api/partnership",
    { next: { revalidate: 10 } }
  );

  const partnershipData = await res.json();
  return (
    <div className="bg-white py-10 lg:py-20 relative z-[110] rounded-b-[20px] lg:rounded-b-[40px] font-sora">
      <div className="px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  lg:gap-12 items-center text-center  justify-center">
          {partnershipData?.map((partner, index) => (
            <div key={index} className="text-center">
              <img
                width={200}
                height={200}
                src={partner?.logo}
                alt={`${partner?.name} Logo`}
                className="mx-auto mb-2 h-16 object-contain saturate-0 hover:saturate-100"
              />
              <h3 className="text-[20px] tracking-tighter font-bold text-black mb-2 mt-10">
                {partner?.name}
              </h3>
              <p className="text-black opacity-75 text-[15px] font-[400] mb-2">
                {partner?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
