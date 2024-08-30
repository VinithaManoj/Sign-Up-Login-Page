import React, { useState } from 'react';
import './LoginSignup.css';
import person_name from './person_name.png';
import email from './email.png';
import password from './password.png';

const LoginSignup = () => {

    const [action,setAction] =useState("Sign Up");
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'>
    
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    <img src={person_name} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}
                
                <div className='input'>
                    <img src={email} alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className='input'>
                    <img src={password} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action==="Sign Up"?<div></div>: <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
           
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> SignUp </div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Login </div>
            </div>
        </div>

    </div>
  )
}

export default LoginSignup