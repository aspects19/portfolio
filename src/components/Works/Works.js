import React from 'react';
import './Works.css'; 

const Project = ({ title, moreInfo, link, image}) => {
 
  const ProjectStyles = {backgroundImage: `url(${image})`};

  return (
     <div style={ProjectStyles} className='project'>
      <span>{title}</span>
      <div className='work-header'>
        <button><span>More</span><a href={link}><button>&gt;</button></a></button>
      </div>
      <div className='more-info'>{moreInfo}</div>
    </div>
  );
};


function Works() {
  const projects = [
    { title: 'AMD', moreInfo: 'A WhatsApp bot made in Javascript using @whiskeysockets/baileys library that has many functions', link: "https://github.com" , image: "/backgrounds/whatsapp.png"},
    { title: "My Portofolio", moreInfo: 'My own portofolio developed using React', link: "https://github.com" , image: "/backgrounds/portofolio.png"},
    { title: 'Mobile Money Wallet', moreInfo: 'A mobile money project written in C for my school project', link: "https://github.com" , image: "/backgrounds/wallet.png"},
    { title: 'Recipe web', moreInfo: 'A recipe website created using HTML css and javascript', link: "https://github.com", image: "/backgrounds/recipe.jpg" },
    { title: 'TestGram', moreInfo: "A Telegram bot written in python using telegram,s python wrapper library PyTelegramAPI(telebot)", link: "https://github.com" , image: "/backgrounds/tele.jpg"},
  ];

  return (
    <div className='works' id='works'>
      <h1>My creations</h1>
      <div className='works-container'>
        {projects.map((project, index) => (
          <Project key={index} title={project.title} moreInfo={project.moreInfo} link={project.link} image={project.image}/>
        ))}
      </div>  
    </div>
  );
};

export default Works