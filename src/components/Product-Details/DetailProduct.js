import React from 'react';
import { Link } from 'react-router-dom';

const DetailProduct = () => {
  return (
    <>
      <section class="section product-detail">
        <div class="details container">
          <div class="left image-container">
            <div class="main">
              <img src={require("../../assets/images/product-5.jpg")} id="zoom" alt="" />
            </div>
          </div>
          <div class="right">
            <span>Home/T-shirt</span>
            <h1>Boy’s T-Shirt By Handsome</h1>
            <div class="price">185.000</div>
            <form>
              <div>
                <select>
                  <option value="Select Size" selected disabled>
                    Select Size
                  </option>
                  <option value="1">32</option>
                  <option value="2">42</option>
                  <option value="3">52</option>
                  <option value="4">62</option>
                </select>
                <span><i class="bx bx-chevron-down"></i></span>
              </div>
            </form>
            <form class="form">
              <input type="text" placeholder="1" />
              <Link to="/cart" class="addCart">Add To Cart</Link>
            </form>
            <h3>Product Detail</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
              delectus nulla voluptates nesciunt quidem laudantium, quisquam
              voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section class="section featured">
        <div class="top container">
          <h1>Related Products</h1>
          <Link to="/product" class="view-more">View more</Link>
        </div>
        <div class="product-center container">
          <div class="product-item">
            <div class="overlay">
              <Link to="/product/1" class="product-thumb">
                <img src={require("../../assets/images/product-5.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
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
        </div>
      </section>
    </>
  );
};

export default DetailProduct;