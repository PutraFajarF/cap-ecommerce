import React from 'react';
import SignUpForm from '../../components/AccountDetail/SignUpForm';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Header/Navigation';
import TopNav from '../../components/Header/TopNav';

const Register = () => {
  return (
    <div>
      <TopNav />
      <Navigation />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Register;