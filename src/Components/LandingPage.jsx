import React from 'react'
import Slider from './Slider/Slider'
import Brands from './Brands/Brands'
import New from './New/New'
import Value from './Value/Value'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'

export default function LandingPage() {
  return (
    <div>
         <NavBar />
         <Slider/>
        <Brands />
        <New />
        <Value />
        <Contact />
        <Footer />
    </div>
  )
}
