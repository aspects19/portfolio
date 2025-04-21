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

  function SkillCard({ icon , title, description }) {
    return (
      <div className='max-w-98 flex flex-col items-center p-6 bg-gray-900/50 rounded-xl overflow-hidden hover:scale-[103%] transition-all ease-in-out duration-300'>
        <img className=' h-15 mx-0 my-4' src={icon} alt={title} />
        <h2 className=" w-full text-center text-[16px] font-bold">{title}</h2>
        {description}
      </div>
    );
  }

  return (
    <div className='m-12 flex flex-col' id='skills'>
      <h1 className="w-full text-center text-2xl pb-2 font-bold hover:underline cursor-pointer">Skills</h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 mx-auto '>
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
