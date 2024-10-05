import MeetOurTeam from "@/components/About/MeetOurTeam";

const page = () => {
  return (
    <div className=" relative z-[110] bg-white font-sora">
      <div className="flex justify-center my-20 ">
        <h2 className="text-2xl  md:text-[48px] font-bold text-[#125b5c]">
          Our Team
        </h2>
      </div>
      <div className="mx-4 lg:mx-72">
        <MeetOurTeam />
      </div>
    </div>
  );
};

export default page;
