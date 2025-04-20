import "./Skills.css";
import React from 'react';


function Skills() {
  const skillsData = [
    {
      icon: '/assets/website-design.png',
      title: 'Web Development',
      description: 'I create websites and applications on the internet using Javascript frameworks.',
    },
    {
      icon: '/assets/web-code.png',
      title: 'Web Design',
      description: 'I design aesthetically pleasing interfaces for websites for enhanced user experience and engagement.',
    },
    {
      icon: '/assets/mobile-apps.png',
      title: 'Mobile Apps Development',
      description: 'I develop software applications tailored for mobile devices using Flutter.',
    },
    {
      icon: '/assets/bash.png',
      title: 'Bash Scripting',
      description: 'I am skilled in writing scripts that automate tasks on Unix-like operating systems using the Bash interface.',
    },
  ];

  function SkillCard({ icon, title, description }) {
    return (
      <div className='bg-gray-500/10 flex flex-col items-center'>
        <div className='skill-icon'>
          <img className='skill-icon-icon' src={icon} alt={title} />
        </div>
        <div className='skill-description'>
          <h2>{title}</h2>
          {description}
        </div>
      </div>
    );
  }

  return (
    <div className='m-12' id='skills'>
      <h1>Skills</h1>
      <div className='skills'>
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
