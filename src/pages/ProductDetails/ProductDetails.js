import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Header/Navigation';
import TopNav from '../../components/Header/TopNav';
import DetailProduct from '../../components/Product-Details/DetailProduct';

const ProductDetails = () => {
  return (
    <div>
      {/* Navigation */}
      <TopNav />
      <Navigation />
      {/* Product Details */}
      <DetailProduct />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;