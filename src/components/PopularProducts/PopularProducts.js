import React from 'react';

const PopularProducts = () => {
  return (
    <>
      <section class="section new-arrival">
        <div class="title">
          <h1>Best Seller Products</h1>
          <p>All the best seller product from designer of our store</p>
        </div>
        <div class="product-center">
          <div class="product-item">
            <div class="overlay">
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
              </a>
              <span class="discount">50%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Quis Nostrud Exercitation</a>
              <h4>200.000</h4>
            </div>
            <ul class="icons">
              <li><i class="bx bx-heart"></i></li>
              <li><i class="bx bx-search"></i></li>
              <li><i class="bx bx-cart"></i></li>
            </ul>
          </div>
          <div class="product-item">
            <div class="overlay">
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Sonata White Men’s Shirt</a>
              <h4>140.000</h4>
            </div>
            <ul class="icons">
              <li><i class="bx bx-heart"></i></li>
              <li><i class="bx bx-search"></i></li>
              <li><i class="bx bx-cart"></i></li>
            </ul>
          </div>
          <div class="product-item">
            <div class="overlay">
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-1.jpg")} alt="" />
              </a>
              <span class="discount">40%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Concepts Solid Pink Men’s Polo</a>
              <h4>150.000</h4>
            </div>
            <ul class="icons">
              <li><i class="bx bx-heart"></i></li>
              <li><i class="bx bx-search"></i></li>
              <li><i class="bx bx-cart"></i></li>
            </ul>
          </div>
          <div class="product-item">
            <div class="overlay">
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-6.jpg")} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Edor do eiusmod tempor</a>
              <h4>$140.000</h4>
            </div>
            <ul class="icons">
              <li><i class="bx bx-heart"></i></li>
              <li><i class="bx bx-search"></i></li>
              <li><i class="bx bx-cart"></i></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;