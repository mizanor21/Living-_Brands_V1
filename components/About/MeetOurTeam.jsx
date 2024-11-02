"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const MeetOurTeam = () => {
  const [teamsData, setTeamsData] = useState([]);
  // const teams = [
  //   {
  //     id: 1,
  //     image:
  //       "https://i.postimg.cc/gjJmDRyq/646b3539964f4afec2634e7d-nimoli-Large.png",
  //     name: "John Doe",
  //     title: "Founder",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://i.postimg.cc/yNdj78Tp/646b1751318b59aa1ef28ed6-Chirag-Shah-Large.png",
  //     name: "Jane Smith",
  //     title: "Co-founder",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://i.postimg.cc/pT5Bnc4D/646b215cc3e2bd08bc67eb55-Rishabh-Pande-Large.png",
  //     name: "Michael Johnson",
  //     title: "Chief Design & Technology Director",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://i.postimg.cc/yNbPxCQ1/646b342ed9c8a8dbd4209a59-jayesh-joshi-Large.png",
  //     name: "Emily Davis",
  //     title: "Head of Operations",
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://i.postimg.cc/9FdJpSMb/646b345d0500c46bb80af0e4-suraj-adhikari-Large.png",
  //     name: "David Brown",
  //     title: "Human Resources Manager",
  //   },
  //   {
  //     id: 6,
  //     image: "https://i.postimg.cc/0yZZgw7J/Shwetha-Bhatkar-Large.jpg",
  //     name: "Sarah Wilson",
  //     title: "Chief Marketing Officer",
  //   },
  // ];

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/teams`
        );
        setTeamsData(response.data);
      } catch (error) {}
    };

    fetchTeams();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 lg:py-16">
        {teamsData.map((team) => (
          <div key={team.id}>
            <img
              className=" rounded-2xl hover:scale-105 max-h-[550px] transition duration-300"
              src={team.image}
              alt="person"
            />
            <div className="mt-5">
              <h2 className="text-[24px] font-[600] mt-4 mb-2">{team.name}</h2>
              <h4 className="text-[14px] font-[400]">{team.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
