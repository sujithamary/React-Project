// import React from 'react'
// import './Brands.css';
// const  Brands = () => {
//   return (
//     <section className='c-wrapper'>
//       <div className='paddings innerWidth flexCenter c-container'>
//         <img src = './brand1.png' alt='brand1'/>
//         <img src = './brand2.png' alt='brand2'/>
//         <img src = './brand3.png' alt='brand3'/>
//         <img src = './brand4.png' alt='brand4'/>
//       </div>
//     </section>
//   )
// }

// export default Brands

// Brands.jsx
// Brands.jsx
import React, { useEffect, useRef } from 'react';
import './Brands.css';

const Brands = () => {
  const titleRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const titleAnimation = titleRef.current.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards',
      }
    );

    const images = imagesRef.current.children;
    Array.from(images).forEach((image, index) => {
      image.animate(
        [
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          duration: 500,
          easing: 'ease-in-out',
          fill: 'forwards',
          delay: index * 200, // Delay each image by 200ms
        }
      );
    });

    return () => {
      titleAnimation.cancel();
    };
  }, []);

  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        <h2 className='title' ref={titleRef}>
          
        </h2>
        <div className='brand-container' ref={imagesRef}>
          <img src='./brand1.png' alt='brand1' className='brand-image' />
          <img src='./brand2.png' alt='brand2' className='brand-image' />
          <img src='./brand3.png' alt='brand3' className='brand-image' />
          <img src='./brand4.png' alt='brand4' className='brand-image' />
          
        </div>
      </div>
    </section>
  );
};

export default Brands;


