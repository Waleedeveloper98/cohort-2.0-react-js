import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroContent">
        <div className="top">
          <h1>Unleash Your Inner Champion Today.</h1>
          <h1>All In One Place.</h1>
          <p>
            Join the ultimate tennnis experience where passion meets
            Performance, and every swing brings you closer to victory
          </p>
          <button>Start your own journey</button>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="tagLine">
                    <p>Train with real professionals.</p>
                    <p>Get the real results.</p>
                </div>
                <div className="professionals">
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                </div>
            </div>
            <div className="right">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Tik Tok</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
