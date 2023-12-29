import React from 'react';
import CountUp from 'react-countup';
import "./Home.css";
import {motion} from 'framer-motion';
const Home = () => {
  return (
    <div>
      <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>

          <div className='flexcolStart hero-left'>
            <div className='hero-title'>
              <motion.h1
              initial={{y: "2rem", opacity: 0}}
              animate={{y: 0, opacity: 1}} 
              transition={{
                duration: 2,
                type: "spring"
              }}> 
                 Discover the Art of Timeless Beauty, Crafted Just for You.
              </motion.h1>
            </div>

            <div className='flexColStart hero-des'>
              <span>
              Unveil timeless beauty with our curated collection, 
               a fusion of artistry and sophistication. Crafted just for you, each product is an expression of personalized allure and enduring elegance
              </span>
            </div>
              <div className='flesCenter stats'>
                <div className='flexColStart stat'>
                  <span>
                    <CountUp start={1800} end={2000} duration={4}/>
                    <span>+</span>
                  </span>
                  <span>
                    Happy Customers
                  </span>

                </div>
              </div>

            <div>

            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}

export default Home;
