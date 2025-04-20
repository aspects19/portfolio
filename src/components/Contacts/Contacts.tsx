import React from 'react';
import { RiGithubFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";

import './Contacts.css';

function Contacts() {
  return (
    <div className='contacts' id='contacts'>
      <h1>Contact me</h1>
      <div className='contacts-container'>
        <div className='socials'>
          <div className='social-media flex w-full h-20'>
            <a href='https://github.com/aspects19/' target='_blank' rel='noopener noreferrer'><RiGithubFill className='social-icon' /> </a>
            <a href='https://ke.linkedin.com/in/jeff-amenya-55ba872b9' target='_blank' rel='noopener noreferrer'><ImLinkedin2 className='social-icon' /></a>
          </div>
        </div>
        <div className='email-container'>
          <div className='contact-me'><span>Talk to me?</span></div>
        </div>
      </div>
      <div className='email-footer'>&copy;amenya creations | 2024 </div>
    </div>
  );
}

export default Contacts;
