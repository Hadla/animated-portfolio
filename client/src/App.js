import React from 'react';
import './style/startPage.css';
import './style/mainPage.css';

function App() {
  return (
    <div className='App'>
      <div className='intro'>
        <p className='intro-text'>Let's animate</p>
        <button className='enter-portfolio-btn'>Click me!</button>
      </div>

      <div className='hidden-element'>
        <h1 className='big-text-name'>
          <span className='hide-text'>Hadla</span>
        </h1>
        <h1 className='big-text-name'>
          <span className='hide-text'>Bergman</span>
        </h1>
        <h1 className='big-text-name'>
          <span className='hide-text'>Fredrikson</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
