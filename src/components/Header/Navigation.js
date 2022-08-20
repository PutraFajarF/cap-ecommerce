import React from 'react';
import {
  auth,
  logout
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

// Styled Components
import { StyledNavigation, StyledNavCenter, StyledNavList, StyledNavItem, StyledNavIcon, StyledLinkIcon, StyledDivIcon, StyledSpanIcon } from './Navigation.styled';

const Navigation = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <StyledNavigation>
        <StyledNavCenter>
          <Link to="/" className="logo"><h1>CapToko</h1></Link>
          <StyledNavList>
            <StyledNavItem>
              <Link to="/" className="nav-link">Home</Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link to={user ? "/product" : "/login"} className="nav-link">Shop</Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link to="#contact" className="nav-link">Contact</Link>
            </StyledNavItem>
          </StyledNavList>
          {/* Icons */}
          <StyledNavIcon>
            {user ? (
              <StyledLinkIcon to="/login" onClick={logout}>
                <i className="bx bx-user">Logout</i>
              </StyledLinkIcon>
            ) : (
              <StyledLinkIcon to="/login">
                <i className="bx bx-user">Login</i>
              </StyledLinkIcon>
            )}
            <StyledDivIcon>
              <Link to="product/1">
                <i className="bx bx-search"></i>
              </Link>
            </StyledDivIcon>
            <StyledLinkIcon to={user ? '/cart' : '/login'}>
              <i className="bx bx-cart"></i>
              <StyledSpanIcon>0</StyledSpanIcon>
            </StyledLinkIcon>
          </StyledNavIcon>
        </StyledNavCenter>
      </StyledNavigation>
    </>
  );
};

export default Navigation;