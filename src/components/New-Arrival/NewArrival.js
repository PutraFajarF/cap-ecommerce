import React from 'react';
import { Link } from 'react-router-dom';

const NewArrival = () => {
  return (
    <>
      <section class="section new-arrival">
        <div class="title">
          <h1>NEW ARRIVALS</h1>
          <p>All the latest picked from designer of our store</p>
        </div>
        <div class="product-center">
          <div class="product-item">
            <div class="overlay">
              <Link to="/product/1" class="product-thumb">
                <img src={require("../../assets/images/product-1.jpg")} alt="" />
              </Link>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Quis Nostrud Exercitation</Link>
              <h4>90.000</h4>
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
                <img src={require("../../assets/images/product-3.jpg")} alt="" />
              </Link>
              <span class="discount">50%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Sonata White Men’s Shirt</Link>
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
                <img src={require("../../assets/images/product-2.jpg")} alt="" />
              </Link>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Concepts Solid Pink Men’s Polo</Link>
              <h4>250.000</h4>
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
              <span class="discount">50%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Grey Man Jacket</Link>
              <h4>180.000</h4>
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
                <img src={require("../../assets/images/product-5.jpg")} alt="" />
              </Link>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Black Man Jacket</Link>
              <h4>250.000</h4>
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
              <Link to="/product/1">Green Shirt Men</Link>
              <h4>85.000</h4>
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
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
              </Link>
              <span class="discount">50%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Blue Shirt Men</Link>
              <h4>95.000</h4>
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
                <img src={require("../../assets/images/product-2.jpg")} alt="" />
              </Link>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Strong Red Bag</Link>
              <h4>300.000</h4>
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

export default NewArrival;