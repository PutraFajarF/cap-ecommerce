import React from 'react';


const AccountDetail = () => {
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
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" class="btn">Login</button>
                  <a href="/">Forgot Password</a>
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