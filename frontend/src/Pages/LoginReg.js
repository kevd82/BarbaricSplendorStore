import React, { useState } from 'react';
import "./CSS/LoginReg.css";

const LoginReg = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:"",
  })

  const login = async () =>{
    console.log("Login function executed");
  }

  const signup = async () =>{
    console.log("Signup function executed");
  }

  return (
    <div className="loginreg">
      <div className="loginreg-container">
        <h1>{state}</h1>
        <div className="loginreg-fields">
          {state==="Signup"? <input type="text" placeholder="User Name"/>:<></> } 
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
          <button onClick={()=>{state==="Login"?login():signup()}} >Continue</button>
          <div className="loginreg-agree">
            <input type="checkbox" name="" id=""/>
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {state==="Signup"?
            <p className="loginreg-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
            :<p className="loginreg-login">Would you like to create an account? <span onClick={()=>{setState("Signup")}}>Register here</span></p>
            }
          </div>      
      </div>
    </div>
  )
}

export default LoginReg;
