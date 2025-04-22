import React, {useState} from 'react';
import { RxHamburgerMenu} from 'react-icons/rx';
import {IoMdClose} from 'react-icons/io'

function Navigation() {
    const IconSize =  25;
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
      setCollapsed(!collapsed)
    };

    const scrollToTarget = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setCollapsed(false);
      } else {}
    };

  return (
    <div className='fixed top-1 left-2 right-2 md:bg-[#10082565] md:backdrop-blur-2xl z-50'>
      <div className=' md:hidden z-50 top-6 cursor-pointer' onClick={handleCollapse}>
        {collapsed ? <IoMdClose size={IconSize}/> : <RxHamburgerMenu size={IconSize} />}
      </div>
      <div className={` ${collapsed ? 
        'fixed flex flex-col justify-around text-white items-center backdrop-blur-[4px] top-0 left-0 right-0 bottom-0 py-36 font-bold text-3xl *:cursor-pointer' : 
        ' hidden text-4xl md:text-xl w-full md:flex flex-row pl-2 py-28 md:py-0 md:pl-16 md:top-2.5 md:h-12 items-center justify-around '}`}
        >
        <div className=' transition-colors cursor-pointer hover:underline hover:text-blue-300  ' onClick={() => scrollToTarget('home')}>
          <span >Home</span>
        </div>
        <div className=' transition-colors cursor-pointer hover:underline hover:text-blue-300  ' onClick={() => scrollToTarget('about')}>
          <span >About Me</span>
        </div>
        <div className=' transition-colors cursor-pointer hover:underline hover:text-blue-300  ' onClick={() => scrollToTarget('skills')}>
          <span >Skills</span>
        </div>
        <div className=' transition-colors cursor-pointer hover:underline hover:text-blue-300  ' onClick={() => scrollToTarget('works')}>
          <span >My Works</span>
        </div>
        <div className=' transition-colors cursor-pointer hover:underline hover:text-blue-300  ' onClick={() => scrollToTarget('reviews')}>
          <span >Reviews</span>
        </div>
        <div className=' transition-colors cursor-pointer hover:underline hover:text-blue-300  ' onClick={() => scrollToTarget('contacts')}>
          <span >Contact Me</span>
        </div>
      </div>
    </div>
  );
};


export default Navigation;