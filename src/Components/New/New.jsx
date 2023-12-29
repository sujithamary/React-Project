import React from 'react';
import './New.css';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import { sliderSettings } from '../../utils/common';

import data from '../../utils/slider.json';
const New = () => {
  return (
    <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
          <div className='r-head flexColStart'>
            <span className='orangeText'>New Curvated</span>
            <span className='primaryText'>Latest Products</span>
          </div>

          <Swiper {...sliderSettings}  >
              
            {
              data.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className='r-card'>
                    <img src = {card.image} alt='home'/>
                    <br/>
                    <span className='primaryText'>{card.name}</span><br/>
                    <span  className='secondaryText r-price new-price'>
                        <span style={{color: "black"}}>&#8377;</span><span>{card.price}</span>
                    </span> <br/>

                    <span className='secondaryText'>{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </section>
  );
}

export default New;
