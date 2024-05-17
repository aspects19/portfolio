import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <h1>Skills</h1>
      <div className='skills'>
        <div className='skill'>
          <div className='skill-icon'>
            <img className='skill-icon-icon' src='/assets/website-design.png' alt=''/>
          </div>
          
          <div className='skill-description'> <h2>Web development</h2>
            I create websites and applications on the internet using Javascript frameworks.</div>
        </div>
        <div className='skill'>
          <div className='skill-icon'>
          <img className='skill-icon-icon' src='/assets/web-code.png' alt=''/>
          </div>
          
          <div className='skill-description'> <h2>Web Design</h2>
            I design aesthetically pleasing interfaces for websites for enhanced user experience and engagement.</div>
        </div>
        <div className='skill'>
          <div className='skill-icon'>
          <img className='skill-icon-icon' src='/assets/mobile-apps.png' alt=''/>
          </div>
          
          <div className='skill-description'> <h2>mobile apps development</h2>
            I develop software applications tailored for mobile devices using Flutter.</div>
        </div>
        <div className='skill'>
          <div className='skill-icon'>
          <img className='skill-icon-icon' src='/assets/bash.png' alt=''/>
          </div>
          
          <div className='skill-description'> <h2>Bash scripting</h2>
            I am skilled in writing scripts that automate tasks on Unix-like operating systems using the Bash interface.</div>
        </div>
      </div>
    </div>  
  )
}

export default Skills