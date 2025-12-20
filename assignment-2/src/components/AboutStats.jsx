import React from "react";

const AboutStats = () => {
  let stats = [
    {
      title: "12000+",
      line: "Hours of play annually",
    },
    {
      title: "89%",
      line: "Player Retention Rate",
    },
    {
      title: "1,200+",
      line: "Active Members",
    },
    {
      title: "125+",
      line: "Annual Tournaments",
    },
  ];
  return (
    <div className="aboutStats">
      <h3>A few more facts about us in numbers</h3>
      <div className="stats">
        {stats.map((stat, index) => {
          return (
            <div key={index} className="stat">
              <h4>{stat.title}</h4>
              <p>{stat.line}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutStats;
