import React, { useRef, useEffect, Component } from 'react';
import '../style/homePage.css';
import profileImage from '../images/profile-image.JPG';

import { TweenMax, Power4, Back, TimelineMax } from 'gsap';
import { _renderComplexString } from 'gsap/gsap-core';

function Home() {
  let app = useRef(null);
  let tl = new TimelineMax({ paused: true });

  useEffect(() => {
    const hideName = document.querySelectorAll('#hide--name');
    const intro = document.querySelectorAll('.intro');
    const hideMenuItem = document.querySelectorAll('.hide-menu-item');
    const hideMenuBtns = document.querySelectorAll('.menu-btns');
    tl.to(intro, 0.3, { opacity: 0 });

    tl.staggerFrom(hideName, 1.2, { y: '100%', ease: Power4.easeOut }, 0.25)
      .staggerFrom(hideMenuBtns, 1.2, { opacity: 0, duration: 1, y: 50 }, 0.25)
      .staggerFrom(hideMenuItem, 1.5, { opacity: 0, duration: 1 }, 0.2);
  });

  return (
    <div
      className='App'
      ref={(el) => {
        app = el;
      }}
    >
      <div className='intro'>
        {/* <img className='profile-image' src={profileImage}></img> */}
        <p className='intro-text'>Welcome!</p>
        <button
          className='enter-portfolio-btn'
          onClick={() => {
            tl.play();
          }}
        >
          Enter
        </button>
      </div>
      <div className='hidden-elements'>
        <div className='hidden-element'>
          <h1 className='name-item'>
            <span className='hide-name' id='hide--name'>
              Hadla
            </span>
          </h1>

          <h1 className='name-item'>
            <span className='hide-name' id='hide--name'>
              Bergman
            </span>
          </h1>
          <h1 className='name-item'>
            <span className='hide-name' id='hide--name'>
              Fredrikson
            </span>
          </h1>
        </div>
        <div className='hidden-element menu-btns'>
          <p className='menu-item'>
            <span className='hide-menu-item'>About</span>
          </p>
          <p className='menu-item'>
            <span className='hide-menu-item'>Projects</span>
          </p>
          <p className='menu-item'>
            <span className='hide-menu-item'>Contact</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
