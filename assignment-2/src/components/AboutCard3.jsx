import React from "react";

const AboutCard3 = () => {
  return (
    <div className="card3">
      <div className="proText">
        <h3>100+</h3>
        <h4>Pro Coaches</h4>
        <p>
          Certified professionals ready to boost your game from first serve to
          tournment level.
        </p>
      </div>
      <div className="levels">
        <div className="level">
          <p>Beginner</p>
          <div className="points">
            {Array(10)
              .fill(null)
              .map((_, index) => {
                return <div key={index} className="point"></div>;
              })}
          </div>
          <p>55</p>
        </div>
        <div className="level">
          <p>Intermediate</p>
          <div className="points">
            {Array(8)
              .fill(null)
              .map((_, index) => {
                return <div key={index} className="point"></div>;
              })}
          </div>
          <p>40</p>
        </div>
        <div className="level">
          <p>Advanced</p>
          <div className="points">
            {Array(7)
              .fill(null)
              .map((_, index) => {
                return <div key={index} className="point"></div>;
              })}
          </div>
          <p>35</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard3;
