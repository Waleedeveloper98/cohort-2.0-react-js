import React from "react";
import UserCard from "./components/UserCard";

const App = () => {
  const users = [
    {
      id: 1,
      bannerImg:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Ali Khan",
      role: "Frontend Developer",
      rating: 4.8,
      earned: "$12.5k",
      perHourRate: "$25/hr",
      verified: true,
    },
    {
      id: 2,
      bannerImg:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Ahmed",
      role: "UI/UX Designer",
      rating: 4.6,
      earned: "$9.8k",
      perHourRate: "$30/hr",
      verified: true,
    },
    {
      id: 3,
      bannerImg:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/men/54.jpg",
      name: "Usman Raza",
      role: "Backend Developer",
      rating: 4.5,
      earned: "$15k",
      perHourRate: "$35/hr",
      verified: false,
    },
    {
      id: 4,
      bannerImg:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Ayesha Noor",
      role: "Product Designer",
      rating: 4.9,
      earned: "$18.2k",
      perHourRate: "$40/hr",
      verified: true,
    },
    {
      id: 5,
      bannerImg:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/men/21.jpg",
      name: "Hamza Iqbal",
      role: "Full Stack Developer",
      rating: 4.7,
      earned: "$21k",
      perHourRate: "$45/hr",
      verified: true,
    },
    {
      id: 6,
      bannerImg:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Fatima Zahra",
      role: "Mobile App Developer",
      rating: 4.4,
      earned: "$8.6k",
      perHourRate: "$28/hr",
      verified: false,
    },
    {
      id: 7,
      bannerImg:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/men/77.jpg",
      name: "Bilal Sheikh",
      role: "DevOps Engineer",
      rating: 4.6,
      earned: "$13.4k",
      perHourRate: "$38/hr",
      verified: true,
    },
    {
      id: 8,
      bannerImg:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/women/25.jpg",
      name: "Hira Malik",
      role: "Content Strategist",
      rating: 4.3,
      earned: "$6.2k",
      perHourRate: "$20/hr",
      verified: false,
    },
    {
      id: 9,
      bannerImg:
        "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Zain Ul Abidin",
      role: "SEO Specialist",
      rating: 4.5,
      earned: "$9.1k",
      perHourRate: "$22/hr",
      verified: true,
    },
    {
      id: 10,
      bannerImg:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      profileImg: "https://randomuser.me/api/portraits/women/90.jpg",
      name: "Noor Fatima",
      role: "Digital Marketer",
      rating: 4.7,
      earned: "$14.3k",
      perHourRate: "$27/hr",
      verified: true,
    },
  ];

  return (
    <div className="bg-black flex flex-col gap-10 p-20 pt-10 w-full min-h-screen">
      <div className="heading text-center">
        <h2 className="text-white text-3xl font-semibold">
          Talent Marketplace
        </h2>
        <h6 className="text-gray-300 font-medium">
          Discover skilled professionals worldwide
        </h6>
      </div>
      <div className="profiles flex flex-wrap justify-center items-start gap-10">
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
};

export default App;
