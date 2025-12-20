import React from "react";

const Services = () => {
  return (
    <div className="services">
      <div className="left">
        <h5>Services</h5>
        <p>
          Explore our full range of coaching. training, and tennis experiences.
          From first serve to match point - we've got the right program for you.
        </p>
        <button>Explore More</button>
      </div>
      <div className="center">
        <p className="tag">Training Programs</p>
        <div className="bottom">
          <h5>Program designed for all ages and abilities.</h5>
        </div>
      </div>
      <div className="right">
        <div className="card">
          <p className="tag">Training Programs</p>
          <div className="bottom">
            <h5>Program designed for all ages and abilities.</h5>
          </div>
        </div>
          <p className="para">
            Step into a space built for players to grow. compete, and thrive.
          </p>
      </div>
    </div>
  );
};

export default Services;
