import React from 'react';

const Promotion = () => {
  return (
    <>
      <section class="section banner">
        <div class="left">
          <span class="trend">Trend Design</span>
          <h1>New Collection 2022</h1>
          <p>New Arrival <span class="color">Sale 50% OFF</span> Limited Time Offer</p>
          <a href="/##" class="btn btn-1">Discover Now</a>
        </div>
        <div class="right">
          <img src={require("../../assets/images/banner2.png")} alt="" />
        </div>
      </section>
    </>
  );
};

export default Promotion;