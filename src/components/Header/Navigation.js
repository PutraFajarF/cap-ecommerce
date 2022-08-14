import React from 'react';

const Navigation = () => {
  return (
    <>
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
    </>
  );
};

export default Navigation;