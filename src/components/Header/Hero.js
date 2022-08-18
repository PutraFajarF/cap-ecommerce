import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content d-flex container">
          <div className="left">
            <span className="subtitle">GET YOUR SPRING COLLECTION</span>
            <h1 className="title">
              Up to
              <span className="color"> 90% <br />
                Discount </span>
              on This <br />
              Independence Month
            </h1>
            <h5>From 1th August to 31st August</h5>
            <Link to="/product" className="btn">SHOP NOW</Link>
          </div>
          <div className="right">
            <img src={require("../../assets/images/banner.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;