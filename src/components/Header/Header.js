import React from 'react';

// styled-component
import { StyledHeader, } from './Header.styled';

// Components
import Hero from './Hero';
import Navigation from './Navigation';
import TopNav from './TopNav';

const Header = () => {
  return (
    <div>
      <StyledHeader>
        {/* Top Navigation */}
        <TopNav />
        {/* Navigation */}
        <Navigation />
        {/* Hero Section */}
        <Hero />
      </StyledHeader>
    </div>
  );
};

export default Header;