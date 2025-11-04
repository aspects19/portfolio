import React from 'react';

interface ProjectProps {
  title: string;
  tags: string[];
  description: string;
  link: string;
  image?: string;
}

const Project: React.FC<ProjectProps> = ({ title, tags, description, link, image }) => {

  return (
    <div className=" max-w-[440px] bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 hover:scale-[103%] transition-all ease-in-out duration-300" >
      <img src={image || 'default-image.jpg'}
        alt={title}
        className="w-full h-48 object-cover"/>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4 ">
         {tags.map((tag, index) => (
          <span className='px-2 py-1 text-xs rounded-[10px] bg-blue-500/20 text-blue-200' key={index}>{tag}</span>
         ))}
        </div>
        <h2 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors">
            <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        </h2>
        <p className="text-gray-400 mb-4">{description}</p>
        <a href={link} target='_blank' rel="noopener noreferrer" className="flex items-center">
            <img src={"/assets/avatar.jpg"}
              alt={title}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="font-medium  hover:text-blue-400 transition-colors">{link}</span>
        </a>
    </div>
</div>
  );
};


function Projects() {
  const projects = [
    { title: 'AMD', moreInfo: 'A WhatsApp bot made in Javascript using @whiskeysockets/baileys library that has many functions', link: "https://github.com" , image: "/backgrounds/whatsapp.png", tags: ["react", "python"]},
    { title: "My portfolio", moreInfo: 'My own portfolio developed using React', link: "https://github.com" , image: "/backgrounds/portfolio.png", tags: ["react", "python"]},
    { title: 'Mobile Money Wallet', moreInfo: 'A mobile money project written in C for my school project', link: "https://github.com" , image: "/backgrounds/wallet.png", tags: ["react", "python"]},
    { title: 'Recipe web', moreInfo: 'A recipe website created using HTML css and javascript', link: "https://github.com", image: "/backgrounds/recipe.jpg", tags: ["react", "python"] },
    { title: 'TestGram', moreInfo: "A Telegram bot written in python using telegram,s python wrapper library PyTelegramAPI(telebot)", link: "https://github.com" , image: "/backgrounds/tele.jpg", tags: ["react", "python"]},
  ];

  return (
    <div className='flex flex-col px-7' id='works'>
      <h1 className="w-full text-center  pb-2  hover:underline cursor-pointer text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
        Projects
      </h1>
      <div className='m-2 grid rounded-xl grid-cols-1 sm:grid-cols-2  gap-8 mx-auto'>
        {projects.map((project, index) => (
          <Project key={index} title={project.title} description={project.moreInfo} link={project.link} image={project.image} tags={project.tags}/>
        ))}
      </div>  
    </div>
  );
};

export default Projects;