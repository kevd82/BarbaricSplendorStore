import React, { useState } from 'react';
import "./CSS/LoginReg.css";

const LoginReg = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:"",
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () =>{
    console.log("Login function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/login",{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async () =>{
    console.log("Signup function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData),
    }).then((res)=> res.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className="loginreg">
      <div className="loginreg-container">
        <h1>{state}</h1>
        <div className="loginreg-fields">
          {state==="Signup"? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="User Name"/>:<></> } 
          <input name="email"value={formData.email} onChange={changeHandler}  type="email" placeholder="Email Address"/>
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password"/>
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
