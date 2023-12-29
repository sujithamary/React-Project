import React, { useState, useEffect } from 'react';
import './NavBar.css'
import {BiMenuAltRight} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { LoginHandle } from '../LoginContext';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Kalnia&family=Poppins:wght@400;600;700&display=swap');
</style>

const NavBar = ()=> {
  
  return (
    <div className = 'h-wrapper' style={{background : 'black'}} >
        <div className='flexCenter paddings h-container' >
          <div style={{ display : 'flex' , justifyContent : 'center' , textAlign : 'center' , alignItems : 'center'}}>
            <img src = "./logo.png" alt='logo' width={25} />
            <span style={{fontSize: '22px'}} >clatique</span>
          </div>
            <div className='flexCenter h-menu'>
                <a href="/New">New</a>
                <a href ="/Brands">Brands</a>
                <a href ="/Explore">Explore</a>
                <a href ="/Services">Services</a>
                <a href ="/Contact">Contact us</a>
                
                {LoginHandle.islogedin  ? <h3>{LoginHandle.name}</h3> : <button className='button'>
                    <Link to='/LoginForm' ><a>Login</a></Link>
                </button>}
            </div>
        </div>
        <div className='menu-icon'>
          <BiMenuAltRight size={30}/>
        </div>
    </div>
  );
}

export default NavBar;
