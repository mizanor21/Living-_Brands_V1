import CareerLastVideo from "@/components/Career/CareerLastVideo";
import CareerSection from "@/components/Career/CareerSection";
import VideoSection from "@/components/Career/VideoSection";
import ColorPalette from "@/components/ColorPalette/ColorPalatte";

const Career = () => {
  return (
    <div className="relative bg-white z-[110] rounded-b-[20px] lg:rounded-b-[60px]">
      <div className="px-[5%] ">
        <CareerSection></CareerSection>
        <VideoSection></VideoSection>
        <div className="text-center font-sora py-[40px] md:py-[45px] lg:py-[50px] xl:py-[60px] 2xl:py-[70]">
          <h1 className="text-[#125b5c] text-[24px] font-[600] mt-0 lg:mt-10">
            Have you got what it takes to #CreateALivingBrands?
          </h1>
          <p className="font-[400]  text-[19px] mt-2">
            Check out our core principles. If they align with your values, do
            apply..
          </p>
        </div>
        <ColorPalette />
        <CareerLastVideo></CareerLastVideo>
      </div>
    </div>
  );
};

export default Career;
