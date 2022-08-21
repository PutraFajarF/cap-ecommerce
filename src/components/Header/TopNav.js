import React from 'react';

// Styled Components
import { StyledTopNav, StyledTopNavDiv, TopNavUl, TopNavLink } from './TopNav.styled';

const TopNav = () => {
  return (
    <>
      <StyledTopNav>
        <StyledTopNavDiv>
          <p>Order Online or Call us: (0251) 8331-555</p>
          <TopNavUl>
            <li><TopNavLink to="#contact">About Us</TopNavLink></li>
            <li><TopNavLink to="#contact">FAQ</TopNavLink></li>
            <li><TopNavLink to="#contact">Contact</TopNavLink></li>
          </TopNavUl>
        </StyledTopNavDiv>
      </StyledTopNav>
    </>
  );
};

export default TopNav;