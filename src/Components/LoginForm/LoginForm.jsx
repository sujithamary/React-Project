import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser , FaLock, FaFacebook} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { LoginHandle } from '../LoginContext';


const LoginForm = () => {
    const Navigate = useNavigate()

    const HandleSubmit = () => {
        LoginHandle.islogedin = true;
        LoginHandle.name = Username;
        console.log(Username)
        Navigate('/')
    }

    const [Username , setUsername] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setUsername(event.target.value)
    }
    
  return (
    <div className='body'>
            <div className = 'wrapper'>
        <form onSubmit={HandleSubmit}> 
            <h1>Login</h1>
            <div className = "input-box">
                <input type = "text" placeholder = "Username" required onChange={handleChange}/>
                <FaUser className='icon'/>
            </div>
            <div className = "input-box">
                <input type = "password" placeholder = "Password" required/>
                <FaLock className='icon'/>
            </div>

            <div className = "remember-forgot">
                <label><input type = "checkbox" />Remember me</label>
                <a href = "#">Forgot password?</a>
            </div>

            <hr className="horizontal-line" />

            <div className="social-login">
            <p>or login using</p>
            <FcGoogle className='social-icon1' />
            <FaFacebook className='social-icon2'/>

            </div>

            <input type = "submit" className='button' value= 'Login'></input>

            <div className = "register-link">
                <p>Don't have an account? <Link to = "/SignUp" >Signup</Link></p>
            </div>  
        </form>
    </div>
    </div>
  )
}

export default LoginForm
