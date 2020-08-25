import React, { useRef, useEffect } from 'react';
import './style/startPage.css';
import './style/mainPage.css';

import { TweenMax, Power4 } from 'gsap';

function App() {
  let hideText = useRef(null);

  useEffect(() => {
    const hideText = document.querySelectorAll('#hide--text');
    TweenMax.from(hideText, 1.5, { y: '100%', ease: Power4.easeOut });
  });

  return (
    <div className='App'>
      <div className='intro'>
        <p className='intro-text'>Let's animate</p>
        <button className='enter-portfolio-btn'>Click me!</button>
      </div>

      <div className='hidden-element'>
        <h1 className='big-text-name'>
          <span className='hide-text' id='hide--text'>
            Hadla
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

export default App;
