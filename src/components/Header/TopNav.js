import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <>
      <div className="top-nav">
        <div className="container d-flex">
          <p>Order Online or Call us: (0251) 8331-555</p>
          <ul className="d-flex">
            <li><Link to="#contact">About Us</Link></li>
            <li><Link to="#contact">FAQ</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopNav;