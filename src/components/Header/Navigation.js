import React from 'react';

const Navigation = () => {
  return (
    <>
      <div class="navigation">
        <div class="nav-center container d-flex">
          <a href="/" class="logo"><h1>CapToko</h1></a>
          <ul class="nav-list d-flex">
            <li class="nav-item">
              <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="/product" class="nav-link">Shop</a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>
            <li class="icons d-flex">
              <a href="/account" class="icon">
                <i class="bx bx-user"></i>
              </a>
              <div class="icon">
                <i class="bx bx-search"></i>
              </div>
              <a href="/cart" class="icon">
                <i class="bx bx-cart"></i>
                <span class="d-flex">0</span>
              </a>
            </li>
          </ul>
          {/* Icons */}
          <div class="icons d-flex">
            <a href="/account" class="icon">
              <i class="bx bx-user"></i>
            </a>
            <div class="icon">
              <a href="product/1">
                <i class="bx bx-search"></i>
              </a>
            </div>
            <a href="/cart" class="icon">
              <i class="bx bx-cart"></i>
              <span class="d-flex">0</span>
            </a>
          </div>
          <div class="hamburger">
            <i class="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;