import React from 'react';
import Hero from './Hero';
import Navigation from './Navigation';
import TopNav from './TopNav';

const Header = () => {
  return (
    <div>
      <header class="header" id="header">
        {/* Top Navigation */}
        <TopNav />
        {/* Navigation */}
        <Navigation />
        {/* Hero Section */}
        <Hero />
      </header>
    </div>
  );
};

export default Header;