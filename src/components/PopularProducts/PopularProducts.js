import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/product/1" class="product-thumb">
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
              </Link>
              <span class="discount">50%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Quis Nostrud Exercitation</Link>
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
              <Link to="/product/1" class="product-thumb">
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
              </Link>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Sonata White Men’s Shirt</Link>
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
              <Link to="/product/1" class="product-thumb">
                <img src={require("../../assets/images/product-1.jpg")} alt="" />
              </Link>
              <span class="discount">40%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Concepts Solid Pink Men’s Polo</Link>
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
              <Link to="/product/1" class="product-thumb">
                <img src={require("../../assets/images/product-6.jpg")} alt="" />
              </Link>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Edor do eiusmod tempor</Link>
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