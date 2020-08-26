import React, { useRef, useEffect, Component } from 'react';
import '../style/homePage.css';
import '../style/backgroundAnimation.css';
import profileImage from '../images/profile-image.JPG';

import { TweenMax, Circ, Back, TimelineMax } from 'gsap';
import { _renderComplexString } from 'gsap/gsap-core';

function Home() {
  let app = useRef(null);
  let tl = new TimelineMax({ paused: true });

  //   function changeBackgroundColor(color) {
  //     document.body.style.background = color;
  //  }

  useEffect(() => {
    const hideName = document.querySelectorAll('#hide--name');
    const intro = document.querySelectorAll('.intro');
    const hideMenuItem = document.querySelectorAll('.hide-menu-item');
    const hideMenuBtns = document.querySelectorAll('.menu-btns');
    tl.to(intro, 0.3, { opacity: 0 });

    tl.staggerFrom(hideName, 1.2, { y: '100%', ease: Back.easeOut }, 0.25).staggerFrom(
      hideMenuItem,
      0.5,
      { opacity: 0, duration: 1, x: 150, ease: Circ.easeOut },
      1
    );
  });

  return (
    <div
      className='App'
      ref={(el) => {
        app = el;
      }}
    >
      <ul className='flying-dots'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className='intro'>
        {/* <img className='profile-image' src={profileImage}></img> */}
        <p className='intro-text'>Welcome</p>
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
