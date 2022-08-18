import React from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  return (
    <>
      <section class="section all-products" id="products">
        <div class="top container">
          <h1>All Products</h1>
          <form>
            <select>
              <option value="1">Default Sorting</option>
              <option value="2">Sort By Price</option>
              <option value="3">Sort By Popularity</option>
              <option value="4">Sort By Sale</option>
              <option value="5">Sort By Rating</option>
            </select>
            <span><i class="bx bx-chevron-down"></i></span>
          </form>
        </div>
        <div class="product-center container">
          <div class="product-item">
            <div class="overlay">
              <Link to="/product/1" class="product-thumb">
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-2.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-3.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
              </Link>
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
                <img src={require("../../assets/images/product-5.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
              </Link>
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
        </div>
      </section>
      <section class="pagination">
        <div class="container">
          <span>1</span> <span>2</span> <span>3</span> <span>4</span>
          <span><i class="bx bx-right-arrow-alt"></i></span>
        </div>
      </section>
    </>
  );
};

export default AllProducts;