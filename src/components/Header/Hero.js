import React from 'react';

const Hero = () => {
  return (
    <>
      <div class="hero">
        <div class="hero-content d-flex container">
          <div class="left">
            <span class="subtitle">GET YOUR SPRING COLLECTION</span>
            <h1 class="title">
              Up to
              <span class="color"> 90% <br />
                Discount </span>
              on This <br />
              Independence Month
            </h1>
            <h5>From 1th August to 31st August</h5>
            <a href="/##" class="btn">SHOP NOW</a>
          </div>
          <div class="right">
            <img src={require("../../assets/images/banner.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;