import React, { useRef, useEffect, Component } from 'react';
import '../style/homePage.css';

import { TweenMax, Power4, TimelineMax } from 'gsap';
import { _renderComplexString } from 'gsap/gsap-core';

function Home() {
  let app = useRef(null);
  let tl = new TimelineMax({ paused: true });

  useEffect(() => {
    const hideText = document.querySelectorAll('#hide--text');
    const intro = document.querySelectorAll('.intro');
    const projectBtn = document.querySelectorAll('.project-btn');
    // This tween reveals the name of #hide--text
    tl.staggerFrom(hideText, 1.2, { y: '100%', ease: Power4.easeOut }, 0.25);
    tl.from(projectBtn, 1.2, { x: '300%', ease: Power4.easeOut });
    tl.to(intro, 0.3, { opacity: 0 });
  });

  return (
    <div
      className='App'
      ref={(el) => {
        app = el;
      }}
    >
      <div className='intro'>
        <p className='intro-text'>Let's animate</p>
        <button
          className='enter-portfolio-btn'
          onClick={() => {
            tl.play();
          }}
        >
          Click me!
        </button>
      </div>
      <div className='hidden-element'>
        <h1 className='big-text-name'>
          <span className='hide-text' id='hide--text'>
            Hadla <button className='project-btn'>Projects</button>
          </span>
        </h1>

        <h1 className='big-text-name'>
          <span className='hide-text' id='hide--text'>
            Bergman
          </span>
        </h1>
        <h1 className='big-text-name'>
          <span className='hide-text' id='hide--text'>
            Fredrikson
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
