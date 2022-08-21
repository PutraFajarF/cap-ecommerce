import React from 'react';
import {
  auth,
  logout
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// Styled Components
import { StyledNavigation, StyledNavCenter, LinkLogo, NavLink, StyledNavList, StyledNavItem, StyledNavIcon, StyledLinkIcon, SearchIcon, StyledDivIcon, StyledSpanIcon } from './Navigation.styled';

const Navigation = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <StyledNavigation>
        <StyledNavCenter>
          <LinkLogo to="/">
            <h1>&#10051; CapToko</h1>
          </LinkLogo>
          <StyledNavList>
            <StyledNavItem>
              <NavLink to="/">Home</NavLink>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink to="/product">Shop</NavLink>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink to="#contact">Contact</NavLink>
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
              <SearchIcon to="/product">
                <i className="bx bx-search"></i>
              </SearchIcon>
            </StyledDivIcon>
            {user && (
              <StyledLinkIcon to={user ? '/cart' : '/login'}>
                <i className="bx bx-cart"></i>
                <StyledSpanIcon>0</StyledSpanIcon>
              </StyledLinkIcon>
            )}
          </StyledNavIcon>
        </StyledNavCenter>
      </StyledNavigation>
    </>
  );
};

export default Navigation;