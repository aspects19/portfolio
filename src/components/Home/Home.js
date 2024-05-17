import React from 'react';
import './Home.css';
import './typewriter.css'

function Home() {
  return (
    <div className='home' id='home'>
      <div className='overview'></div> 
      <div className='home-container'>
        <div className='avatar'>
          <img src='assets/avatar2.jpg' alt=''/>
        </div>
        <div className='description'>
          <h3 aria-label="Hi! I'm a developer">
            <span className="typewriter"></span>
          </h3>
        </div>
         
      </div>
    </div>
  )
}

export default Home