import React from 'react';
import SignInForm from '../../components/AccountDetail/SignInForm';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Header/Navigation';
import TopNav from '../../components/Header/TopNav';

const Account = () => {
  return (
    <div>
      <TopNav />
      <Navigation />
      <SignInForm />
      <Footer />
    </div>
  );
};

export default Account;