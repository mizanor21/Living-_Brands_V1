import Image from "next/image";

const MeetOurTeam = ({ teamsData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 lg:py-16">
        {teamsData.map((team) => (
          <div key={team._id}>
            <Image
              width={400}
              height={600}
              className=" rounded-2xl hover:scale-105 max-h-[550px] transition duration-300"
              src={team?.image}
              alt={team?.name}
            />
            <div className="mt-5">
              <h2 className="text-[24px] font-[600] mt-4 mb-2">{team?.name}</h2>
              <h4 className="text-[14px] font-[400]">{team?.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
