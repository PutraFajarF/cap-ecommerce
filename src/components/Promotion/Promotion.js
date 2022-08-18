import React from 'react';
import { Link } from 'react-router-dom';

const Promotion = () => {
  return (
    <>
      <section class="section banner">
        <div class="left">
          <span class="trend">Trend Design</span>
          <h1>New Collection 2022</h1>
          <p>New Arrival <span class="color">Sale 50% OFF</span> Limited Time Offer</p>
          <Link to="/product" class="btn btn-1">Discover Now</Link>
        </div>
        <div class="right">
          <img src={require("../../assets/images/banner2.png")} alt="" />
        </div>
      </section>
    </>
  );
};

export default Promotion;