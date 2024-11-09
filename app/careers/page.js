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
        <ColorPalette />
        <CareerLastVideo></CareerLastVideo>
      </div>
    </div>
  );
};

export default Career;
