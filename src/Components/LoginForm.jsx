import React from 'react';
import './LoginForm.css';
import { FaUser , FaLock, FaFacebook} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'


const LoginForm = () => {
    
  return (
    <div className = 'wrapper'>
        <form action = "">
            <h1>Login</h1>
            <div className = "input-box">
                <input type = "text" placeholder = "Username" required/>
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

            <button type = "submit">Login</button>

            <div className = "register-link">
                <p>Don't have an account? <Link to = "/SignUp" >Signup</Link></p>
            </div>  
        </form>
    </div>
  )
}

export default LoginForm
