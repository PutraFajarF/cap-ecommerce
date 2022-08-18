import React from 'react';
import { auth } from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const DetailProduct = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      <section className="section product-detail">
        <div className="details container">
          <div className="left image-container">
            <div className="main">
              <img src={require("../../assets/images/product-5.jpg")} id="zoom" alt="" />
            </div>
          </div>
          <div className="right">
            <span>Home/T-shirt</span>
            <h1>Boy’s T-Shirt By Handsome</h1>
            <div className="price">185.000</div>
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
                <span><i className="bx bx-chevron-down"></i></span>
              </div>
            </form>
            <form className="form">
              <input type="text" placeholder="1" />
              <Link to={user ? "/cart" : "/login"} className="addCart">Add To Cart</Link>
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
      <section className="section featured">
        <div className="top container">
          <h1>Related Products</h1>
          <Link to="/product" className="view-more">View more</Link>
        </div>
        <div className="product-center container">
          <div className="product-item">
            <div className="overlay">
              <Link to="/product/1" className="product-thumb">
                <img src={require("../../assets/images/product-5.jpg")} alt="" />
              </Link>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Concepts Solid Pink Men’s Polo</Link>
              <h4>150.000</h4>
            </div>
            <ul className="icons">
              <li><i className="bx bx-heart"></i></li>
              <li><i className="bx bx-search"></i></li>
              <li><i className="bx bx-cart"></i></li>
            </ul>
          </div>
          <div className="product-item">
            <div className="overlay">
              <Link to="/product/1" className="product-thumb">
                <img src={require("../../assets/images/product-2.jpg")} alt="" />
              </Link>
              <span className="discount">40%</span>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Concepts Solid Pink Men’s Polo</Link>
              <h4>150.000</h4>
            </div>
            <ul className="icons">
              <li><i className="bx bx-heart"></i></li>
              <li><i className="bx bx-search"></i></li>
              <li><i className="bx bx-cart"></i></li>
            </ul>
          </div>
          <div className="product-item">
            <div className="overlay">
              <Link to="/product/1" className="product-thumb">
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
              </Link>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Concepts Solid Pink Men’s Polo</Link>
              <h4>150.000</h4>
            </div>
            <ul className="icons">
              <li><i className="bx bx-heart"></i></li>
              <li><i className="bx bx-search"></i></li>
              <li><i className="bx bx-cart"></i></li>
            </ul>
          </div>
          <div className="product-item">
            <div className="overlay">
              <Link to="/product/1" className="product-thumb">
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
              </Link>
              <span className="discount">40%</span>
            </div>
            <div className="product-info">
              <span>MEN'S CLOTHES</span>
              <Link to="/product/1">Concepts Solid Pink Men’s Polo</Link>
              <h4>150.000</h4>
            </div>
            <ul className="icons">
              <li><i className="bx bx-heart"></i></li>
              <li><i className="bx bx-search"></i></li>
              <li><i className="bx bx-cart"></i></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailProduct;