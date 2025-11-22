import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { BiHome, BiUser, BiCodeAlt, BiBriefcase, BiMessageSquareDetail, BiPhone } from 'react-icons/bi';

function Navigation() {
  const IconSize = 20;
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => setCollapsed(!collapsed);

  const scrollToTarget = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCollapsed(false);
    }
  };

  const navItems = [
    { id: 'home', icon: <BiHome size={IconSize} /> },
    { id: 'about', icon: <BiUser size={IconSize} /> },
    { id: 'skills', icon: <BiCodeAlt size={IconSize} /> },
    { id: 'works', icon: <BiBriefcase size={IconSize} /> },
    { id: 'reviews', icon: <BiMessageSquareDetail size={IconSize} /> },
    { id: 'contacts', icon: <BiPhone size={IconSize} /> },
  ];

  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 border border-gray-500 rounded-lg bg-[#100825aa] backdrop-blur-md">
      {/* Top bar container */}
      <div className="flex justify-between items-center p-2 md:hidden">
        <div className="flex-1" />
        <div className="z-50 cursor-pointer" onClick={handleCollapse}>
          {collapsed ? <IoMdClose size={IconSize} /> : <RxHamburgerMenu size={IconSize} />}
        </div>
      </div>

      {/* Navigation links */}
      <div
        className={`${
          collapsed
            ? 'fixed flex flex-col justify-around text-white items-center backdrop-blur-xs top-0 left-0 right-0 bottom-0 py-24 font-bold text-xl cursor-pointer'
            : 'hidden md:flex flex-row gap-6 p-2 justify-center items-center'
        }`}
      >
        {navItems.map(({ id, icon }) => (
          <div
            key={id}
            className="transition-colors cursor-pointer hover:text-blue-300"
            onClick={() => scrollToTarget(id)}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
