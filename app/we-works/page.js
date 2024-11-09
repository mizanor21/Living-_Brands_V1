import HowWeWorks from "@/components/About/How_We_Works";
import ColorPalette from "@/components/ColorPalette/ColorPalatte";

const WeWork = () => {
  return (
    <div className="relative bg-white z-[110] rounded-b-[20px] lg:rounded-b-[60px]">
      <div className="px-[5%] ">
        <HowWeWorks></HowWeWorks>
        <ColorPalette />
      </div>
    </div>
  );
};

export default WeWork;
