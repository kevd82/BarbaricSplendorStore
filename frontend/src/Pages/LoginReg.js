import React, { useState } from 'react';
import "./CSS/LoginReg.css";

const LoginReg = () => {

  const [state, setState] = useState("Login");

  return (
    <div className="loginreg">
      <div className="loginreg-container">
        <h1>{state}</h1>
        <div className="loginreg-fields">
          <input type="text" placeholder="User Name"/>
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
          <button>Continue</button>
            <div className="loginreg-agree">
            <input type="checkbox" name="" id=""/>
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          <p className="loginreg-login">Already have an account? <span>Login here</span></p>
          
          
        </div>      
      </div>
    </div>
  )
}

export default LoginReg;
