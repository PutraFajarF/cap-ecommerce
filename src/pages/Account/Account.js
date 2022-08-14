import React from 'react';
import AccountDetail from '../../components/AccountDetail/AccountDetail';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Header/Navigation';
import TopNav from '../../components/Header/TopNav';

const Account = () => {
  return (
    <div>
      <TopNav />
      <Navigation />
      <AccountDetail />
      <Footer />
    </div>
  );
};

export default Account;