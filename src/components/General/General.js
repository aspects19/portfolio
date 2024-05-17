import React, {useState} from 'react';
import { RxHamburgerMenu} from 'react-icons/rx';
import {IoMdClose} from 'react-icons/io'
import './General.css'

function General() {
    const IconSize =  25;
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
      setCollapsed(!collapsed)
    };

    const scrollToTarget = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setCollapsed(false);
      } else {
        console.log(`Element "$(id)" not found`)
      }
    };

  return (
  <div className='nav-bar'>
    <div className='humberger' onClick={handleCollapse}>
      {collapsed ? <IoMdClose size={IconSize}/> : <RxHamburgerMenu size={IconSize} />}</div>
    <div className={collapsed ? 'sidebar-active' : 'sidebar'}>
      <div className='menu-text' onClick={() => scrollToTarget('home')}>
        <span >Home</span>
      </div>
      <div className='menu-text' onClick={() => scrollToTarget('about')}>
        <span >About Me</span>
      </div>
      <div className='menu-text' onClick={() => scrollToTarget('skills')}>
        <span >Skills</span>
      </div>
      <div className='menu-text' onClick={() => scrollToTarget('works')}>
        <span >My Works</span>
      </div>
      <div className='menu-text' onClick={() => scrollToTarget('reviews')}>
        <span >Reviews</span>
      </div>
      <div className='menu-text' onClick={() => scrollToTarget('contacts')}>
        <span >Contact Me</span>
      </div>
    </div>
  </div>
  );
};


export default General