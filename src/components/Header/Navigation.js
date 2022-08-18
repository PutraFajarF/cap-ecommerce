import React from 'react';
import {
  auth,
  logout
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="navigation">
        <div className="nav-center container d-flex">
          <Link to="/" className="logo"><h1>CapToko</h1></Link>
          <ul className="nav-list d-flex">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="#contact" className="nav-link">Contact</Link>
            </li>
            <li className="icons d-flex">
              <Link to="/login" className="icon">
                <i className="bx bx-user"></i>
              </Link>
              <div className="icon">
                <i className="bx bx-search"></i>
              </div>
              <Link to="/cart" className="icon">
                <i className="bx bx-cart"></i>
                <span className="d-flex">0</span>
              </Link>
            </li>
          </ul>
          {/* Icons */}
          <div className="icons d-flex">
            {user ? (
              <Link to="/login" className="icon" onClick={logout}>
                <i className="bx bx-user">Logout</i>
              </Link>
            ) : (
              <Link to="/login" className="icon">
                <i className="bx bx-user">Login</i>
              </Link>
            )}
            <div className="icon">
              <Link to="product/1">
                <i className="bx bx-search"></i>
              </Link>
            </div>
            <Link to={user ? '/cart' : '/login'} className="icon">
              <i className="bx bx-cart"></i>
              <span className="d-flex">0</span>
            </Link>
          </div>
          <div className="hamburger">
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;