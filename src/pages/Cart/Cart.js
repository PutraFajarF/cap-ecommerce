import React from 'react';
import CartDetail from '../../components/CartDetails/CartDetail';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Header/Navigation';
import TopNav from '../../components/Header/TopNav';

const Cart = () => {
  return (
    <div>
      {/* Navigation */}
      <TopNav />
      <Navigation />
      {/* Cart Items */}
      <CartDetail />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;