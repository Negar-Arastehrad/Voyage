import React from "react";
import './HeroStyle.css';

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div className="container">
            <h2>Your Dream Trip</h2>
            <div className="line"></div>
            <h1>To Travel Is To Live</h1>
            <button className="ctn">Start Your Journey</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
