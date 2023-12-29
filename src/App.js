import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/LoginForm/SignUp.jsx';
// import NavBar from './Components/NavBar/NavBar.jsx';
// import Brands from './Components/Brands/Brands.jsx';
// import New from './Components/New/New.jsx';
// import Value from './Components/Value/Value.jsx';
// import Contact from './Components/Contact/Contact.jsx';
// import Footer from './Components/Footer/Footer.jsx';
// import Slider from './Components/Slider/Slider.js';
import LandingPage from './Components/LandingPage.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/' element = {<LandingPage />} ></Route>
        </Routes>
      </BrowserRouter>
      {/* <div className='App'>
        <div>
          <div className='white-gradient' />
          <NavBar />
        </div>
        <Slider/>
        <Brands />
        <New />
        <Value />
        <Contact />
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
