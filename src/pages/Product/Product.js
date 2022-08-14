import React from 'react';

const Product = () => {
  return (
    <div>
      {/* Top Navigation */}
      <div class="top-nav">
        <div class="container d-flex">
          <p>Order Online or Call us: (0251) 8331-555</p>
          <ul class="d-flex">
            <li><a href="/#/#">About Us</a></li>
            <li><a href="/#/#">FAQ</a></li>
            <li><a href="/#/#">Contact</a></li>
          </ul>
        </div>
      </div>
      {/* Navigation */}
      <div class="navigation">
        <div class="nav-center container d-flex">
          <a href="/#/#" class="logo"><h1>CapToko</h1></a>
          <ul class="nav-list d-flex">
            <li class="nav-item">
              <a href="/#/#index.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="/#/#product.html" class="nav-link">Shop</a>
            </li>
            <li class="nav-item">
            <a href="/#/##terms" class="nav-link">Terms</a>
            </li>
            <li class="nav-item">
              <a href="/#/##about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a href="/#/##contact" class="nav-link">Contact</a>
            </li>
            <li class="icons d-flex">
              <a href="/#/#account.html" class="icon">
                <i class="bx bx-user"></i>
              </a>
              <div class="icon">
                <i class="bx bx-search"></i>
              </div>
              <div class="icon">
                <i class="bx bx-heart"></i>
                <span class="d-flex">0</span>
              </div>
              <a href="/#/#cart.html" class="icon">
                <i class="bx bx-cart"></i>
                <span class="d-flex">0</span>
              </a>
            </li>
          </ul>
          {/* Icons */}
          <div class="icons d-flex">
            <a href="/#/#account.html" class="icon">
              <i class="bx bx-user"></i>
            </a>
            <div class="icon">
              <i class="bx bx-search"></i>
            </div>
            <div class="icon">
              <i class="bx bx-heart"></i>
              <span class="d-flex">0</span>
            </div>
            <a href="/#/#cart.html" class="icon">
              <i class="bx bx-cart"></i>
              <span class="d-flex">0</span>
            </a>
          </div>
          <div class="hamburger">
            <i class="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>

      {/* All Products */}
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
              <a href="/#productDetails.html" class="product-thumb">
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
              </a>
              <span class="discount">40%</span>
            </div>
            <div class="product-info">
              <span>MEN'S CLOTHES</span>
              <a href="/#productDetails.html">Concepts Solid Pink Men’s Polo</a>
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
                <img src={require("../../assets/images/product-3.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
              </a>
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
                <img src={require("../../assets/images/product-5.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-7.jpg")} alt="" />
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
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
              </a>
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
        </div>
      </section>
      <section class="pagination">
        <div class="container">
          <span>1</span> <span>2</span> <span>3</span> <span>4</span>
          <span><i class="bx bx-right-arrow-alt"></i></span>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" class="section footer">
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
      </footer>
    </div>
  );
};

export default Product;