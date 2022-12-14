import React from 'react';
import AllProducts from '../../components/AllProducts/AllProducts';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Header/Navigation';
import TopNav from '../../components/Header/TopNav';

const Product = () => {
  return (
    <div>
      {/* Top Navigation */}
      <TopNav />
      {/* Navigation */}
      <Navigation />
      {/* All Products */}
      <AllProducts />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Product;