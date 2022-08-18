import React, { useState, useEffect } from 'react';
import {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const AccountDetail = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({ email: '', password: '' });
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e, params) => {
    e.preventDefault();
    if (params === 'login') {
      await loginWithEmailAndPassword(userLogin.email, userLogin.password);
    } else {
      await registerWithEmailAndPassword(
        userRegister.name,
        userRegister.email,
        userRegister.password
      );
      alert('User created successfully');
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
    if (error) alert(error);
  }, [loading, user, error, navigate]);

  const authToggle = (toggle) => {
    const LoginForm = document.getElementById("LoginForm");
    const RegForm = document.getElementById("RegForm");
    const indicator = document.getElementById("indicator");
    if (toggle === 'register') {
      RegForm.style.transform = "translateX(0px)";
      LoginForm.style.transform = "translateX(0px)";
      indicator.style.transform = "translateX(100px)";
    } else {
      RegForm.style.transform = "translateX(300px)";
      LoginForm.style.transform = "translateX(300px)";
      indicator.style.transform = "translateX(0px)";
    }
  }
  return (
    <div>
      <div class="account-page">
        <div class="container-1">
          <div class="row">
            <div class="col-2">
              <img src={require("../../assets/images/banner1.png")} width="100%" alt='banner' />
            </div>
            <div class="col-2">
              <div class="form-container">
                <div class="form-btn">
                  <span onClick={() => authToggle('login')}>Login</span>
                  <span onClick={() => authToggle('register')}>Register</span>
                  <hr id="indicator" />
                </div>
                <form action="" id="LoginForm">
                  <input 
                    type="text" 
                    placeholder="Username" 
                    onChange={e => setUserLogin({...userLogin, email: e.target.value })}
                  />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={e => setUserLogin({...userLogin, password: e.target.value })}
                  />
                  <button 
                    type="submit" 
                    class="btn"
                    onClick={e => handleSubmit(e, 'login')}
                  >
                  Login
                  </button>
                  <Link to="/">Forgot Password</Link>
                </form>
                <form action="" id="RegForm">
                  <input type="text" placeholder="Username" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" class="btn">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;