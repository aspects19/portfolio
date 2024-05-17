import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { ReactOriginal, Html5Original, LinuxOriginal, PythonOriginal, VscodeOriginal, DebianOriginal, JavascriptPlain, Css3Original, BootstrapOriginal, LaravelOriginal, PhpOriginal } from 'devicons-react';
import 'react-circular-progressbar/dist/styles.css';
import scrollToTarget from '../../SharedFunctions/scrollToTarget';
import './About.css';

function About() {
  const IconSize = 55;

  return (
    <div className='about'id='about'>
      <div className='section-2'>
          <div className='info'>
            <div className='my-info'>
              <span className='about-me-text'> I am Jeffarson Amenya, a junior React developer from Kenya passionate in Javascript language. I am also a student persuing IT. </span>
              <div className='about-buttons'>
                <button className='cv-download-btn'>Download CV</button>
                <button onClick={()=>scrollToTarget('contacts')} className='hire-me-btn'>Hire Me</button>
              </div>
            </div>
            
              <div className='skill-graphs'>

                <div className='skill-graph'>
                  <CircularProgressbar value={83} text={`${83}%`}/>
                  <div className="skill-label">React</div>
                </div>
                
                <div className='skill-graph'>
                  <CircularProgressbar value={98} text={`${98}%`}/>
                  <div className="skill-label">HTML</div>
                </div>
                
                <div className='skill-graph'>
                  <CircularProgressbar value={93} text={`${93}%`}/>
                  <div className="skill-label">CSS</div>
                </div>
                
                <div className='skill-graph'>
                  <CircularProgressbar value={75} text={`${75}%`}/>
                  <div className="skill-label">Laravel</div>
                </div>
                
                <div className='skill-graph'>
                  <CircularProgressbar value={78} text={`${78}%`}/>
                  <div className="skill-label">Javascript</div>
                </div>
                
                <div className='skill-graph'>
                  <CircularProgressbar value={85} text={`${85}%`}/>
                  <div className="skill-label">Python</div>
                </div>
                
              </div>
              
          

          </div>
      </div> 
      <div className='section-3'>
        <h1>Languages and Technologies</h1>
        <div className='achievements'>
          <div className='achievement'>
            <LinuxOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <DebianOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <VscodeOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <PythonOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <JavascriptPlain size={IconSize}/>
          </div>
          <div className='achievement'>
            <ReactOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <Html5Original size={IconSize}/>
          </div>
          <div className='achievement'>
            <Css3Original size={IconSize}/>
          </div>
          <div className='achievement'>
            <BootstrapOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <LaravelOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <PhpOriginal size={IconSize}/>
          </div>
        </div>  
      </div> 
    </div>
  )
}

export default About