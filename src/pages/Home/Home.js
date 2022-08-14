import React from 'react';
import '../../assets/images/sprite.svg'


const Home = () => {
  return (
    <div>
      {/* Header */}
      <header class="header" id="header">
        {/* Top Navigation */}
        <div class="top-nav">
          <div class="container d-flex">
            <p>Order Online or Call us: (0251) 8331-555</p>
            <ul class="d-flex">
              <li><a href="/#">About Us</a></li>
              <li><a href="/#">FAQ</a></li>
              <li><a href="/#">Contact</a></li>
            </ul>
          </div>
        </div>
        {/* Navigation */}
        <div class="navigation">
          <div class="nav-center container d-flex">
            <a href="/#" class="logo"><h1>CapToko</h1></a>
            <ul class="nav-list d-flex">
              <li class="nav-item">
                <a href="/#index.html" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="/#product.html" class="nav-link">Shop</a>
              </li>
              <li class="nav-item">
              <a href="/##terms" class="nav-link">Terms</a>
              </li>
              <li class="nav-item">
                <a href="/##about" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="/##contact" class="nav-link">Contact</a>
              </li>
              <li class="icons d-flex">
                <a href="/#account.html" class="icon">
                  <i class="bx bx-user"></i>
                </a>
                <div class="icon">
                  <i class="bx bx-search"></i>
                </div>
                <div class="icon">
                  <i class="bx bx-heart"></i>
                  <span class="d-flex">0</span>
                </div>
                <a href="/#cart.html" class="icon">
                  <i class="bx bx-cart"></i>
                  <span class="d-flex">0</span>
                </a>
              </li>
            </ul>
            {/* Icons */}
            <div class="icons d-flex">
              <a href="/#account.html" class="icon">
                <i class="bx bx-user"></i>
              </a>
              <div class="icon">
                <i class="bx bx-search"></i>
              </div>
              <div class="icon">
                <i class="bx bx-heart"></i>
                <span class="d-flex">0</span>
              </div>
              <a href="/#cart.html" class="icon">
                <i class="bx bx-cart"></i>
                <span class="d-flex">0</span>
              </a>
            </div>
            <div class="hamburger">
              <i class="bx bx-menu-alt-left"></i>
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <div class="hero">
          <div class="hero-content d-flex container">
            <div class="left">
              <span class="subtitle">GET YOUR SPRING COLLECTION</span>
              <h1 class="title">
                Up to
                <span class="color">90% <br />
                  Discount</span>
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
      </header>

      {/* Categories Section */}
      <section class="section category">
        <div class="cat-center">
          <div class="cat">
            <img src={require("../../assets/images/cat3.jpg")} alt="" />
            <div>
              <p>WOMEN'S WEAR</p>
            </div>
          </div>
          <div class="cat">
            <img src={require("../../assets/images/cat2.jpg")} alt="" />
            <div>
              <p>ACCESSORIES</p>
            </div>
          </div>
          <div class="cat">
            <img src={require("../../assets/images/cat1.jpg")} alt="" />
            <div>
              <p>MEN'S WEAR</p>
            </div>
          </div>
        </div>
      </section>
      {/* New Arrivals */}
      <section class="section new-arrival">
        <div class="title">
          <h1>NEW ARRIVALS</h1>
          <p>All the latest picked from designer of our store</p>
        </div>
        <div class="product-center">
          <div class="product-item">
            <div class="overlay">
              <a href="/#productDetails.html" class="product-thumb">
                <img src={require("../../assets/images/product-1.jpg")} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#productDetails.html">Quis Nostrud Exercitation</a>
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
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-3.jpg")} alt="" />
              </a>
              <span class="discount">50%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Sonata White Men’s Shirt</a>
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
                <img src={require("../../assets/images/product-2.jpg")} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Concepts Solid Pink Men’s Polo</a>
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
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
              </a>
              <span class="discount">50%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Grey Man Jacket</a>
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
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-5.jpg")} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Black Man Jacket</a>
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
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-6.jpg")} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Green Shirt Men</a>
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
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
              </a>
              <span class="discount">50%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Blue Shirt Men</a>
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
              <a href="/#" class="product-thumb">
                <img src={require("../../assets/images/product-2.jpg")} alt="" />
              </a>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#">Strong Red Bag</a>
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

      {/* Promotion Section */}
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

      {/* Popular Products */}
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

      {/* Facility Section */}
      <section class="facility__section section" id="facility">
        <div class="container">
          <div class="facility__contianer" data-aos="fade-up" data-aos-duration="1200">
            <div class="facility__box">
              <div class="facility-img__container">
                <svg viewBox='0 0 20 20' className='icon icon-airplane'>
                  <use xlinkHref="../../assets/images/sprite.svg#icon-airplane"></use>
                </svg>
              </div>
              <p>FREE SHIPPING WORLD WIDE</p>
            </div>
            <div class="facility__box">
              <div class="facility-img__container">
                <svg>
                  <use xmlnsXlink="../../assets/images/sprite.svg#icon-credit-card-alt"></use>
                </svg>
              </div>
              <p>100% MONEY BACK GUARANTEE</p>
            </div>
            <div class="facility__box">
              <div class="facility-img__container">
                <svg>
                  <use xmlnsXlink="/#./images/sprite.svg#icon-credit-card"></use>
                </svg>
              </div>
              <p>MANY PAYMENT GATWAYS</p>
            </div>
            <div class="facility__box">
              <div class="facility-img__container">
                <svg>
                  <use xmlnsXlink="/#./images/sprite.svg#icon-headphones"></use>
                </svg>
              </div>
              <p>24/7 ONLINE SUPPORT</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* NewsLetter */}
      <section class="section newsletter" id="contact">
        <div class="container">
          <div class="newsletter__content">
            <div class="newsletter__data">
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <p>A short sentence describing what someone will receive by subscribing</p>
            </div>
            <form action="#">
              <input type="email" placeholder="Enter your email address" class="newsletter__email" />
              <a class="newsletter__link" href="/##">subscribe</a>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <div id="footer" class="section footer">
        <div class="container">
          <div class="footer-container">
            <div class="footer-center">
              <h3>EXTRAS</h3>
              <a href="/##">Brands</a>
              <a href="/##">Gift Certificates</a>
              <a href="/##">Affiliate</a>
              <a href="/##">Specials</a>
              <a href="/##">Site Map</a>
            </div>
            <div class="footer-center">
              <h3>INFORMATION</h3>
              <a href="/##">About Us</a>
              <a href="/##">Privacy Policy</a>
              <a href="/##">Terms & Conditions</a>
              <a href="/##">Contact Us</a>
              <a href="/##">Site Map</a>
            </div>
            <div class="footer-center">
              <h3>MY ACCOUNT</h3>
              <a href="/##">My Account</a>
              <a href="/##">Order History</a>
              <a href="/##">Wish List</a>
              <a href="/##">Newsletter</a>
              <a href="/##">Returns</a>
            </div>
            <div class="footer-center">
              <h3>CONTACT US</h3>
              <div>
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                Jalan kenanga terusan no.88, Pasar Minggu, Jakarta Selatan
              </div>
              <div>
                <span>
                  <i class="far fa-envelope"></i>
                </span>
                captoko@gmail.com
              </div>
              <div>
                <span>
                  <i class="fas fa-phone"></i>
                </span>
                0251-8331555
              </div>
              <div>
                <span>
                  <i class="far fa-paper-plane"></i>
                </span>
                Jakarta, Indonesia
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;