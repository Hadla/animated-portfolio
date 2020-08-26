import React, { useRef, useEffect, Component } from 'react';
import '../style/homePage2.css';
import '../style/backgroundAnimation.css';
import profileImage from '../images/profile-image.JPG';

import { TweenMax, Circ, Back, TimelineMax, Expo } from 'gsap';
import { _renderComplexString } from 'gsap/gsap-core';

function Home() {
  let app = useRef(null);
  let tl = new TimelineMax({ paused: true });

  useEffect(() => {
    const leftContainer = document.querySelectorAll('.left-container');
    const rightContainer = document.querySelectorAll('.right-container');
    const centerContainer = document.querySelectorAll('.center-container');
    const jobTitle = document.querySelectorAll('.job-title');
    const info = document.querySelectorAll('.info');
    const story = document.querySelectorAll('.story');
    const menu = document.querySelectorAll('.menu');
    const socialUl = document.querySelectorAll('.social ul');
    TweenMax.from(leftContainer, 2, {
      width: '0',
      ease: Expo.easeInOut,
    });
    TweenMax.from(rightContainer, 2, {
      delay: 1.5,
      width: '0',
      opacity: '0',
      ease: Expo.easeInOut,
    });
    TweenMax.from(centerContainer, 2, {
      delay: 3,
      width: '0',
      x: -20,
      ease: Expo.easeInOut,
    });
    TweenMax.from(jobTitle, 2, {
      delay: 1.5,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(info, 2, {
      delay: 1.5,
      y: 50,
      opacity: 0,
      scale: 2.5,
      ease: Expo.easeInOut,
    });
    TweenMax.from(story, 2, {
      delay: 2.5,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.from(menu, 2, {
      delay: 3.5,
      y: 20,
      opacity: 0,
      rotation: 90,
      ease: Expo.easeInOut,
    });
    TweenMax.staggerFrom(
      socialUl,
      2,
      {
        delay: 3.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      },
      0.1
    );
  });

  return (
    <div class='containers'>
      <div class='left-container'>
        <div class='job-title'>Fullstack Web Developer</div>
        <div class='info'>
          <a href='#'>FAQ</a>
          <a href='#'>Help</a>
        </div>
      </div>

      <div class='right-container'>
        <div class='first-block'></div>
        <div class='menu-container'>
          <div class='menu'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class='story'>
          <h1>Hadla Bergman</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore.ipsum dolor sit. tempore</p>
          <p>Read More</p>
        </div>
        <div class='social-container'>
          <li class='social'>
            <ul>Facebook</ul>
            <ul>Instagram</ul>
            <ul>Twitter</ul>
          </li>
        </div>
      </div>
      <div class='center-container'></div>
    </div>
  );
}

export default Home;
