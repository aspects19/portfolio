import React from 'react';

const Project = ({ title, tags, description, link, image}) => {

  return (
    <div className=" max-w-[440px] bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300" data-aos="fade-up">
      <img src={image || 'default-image.jpg'}
        alt={title}
        className="w-full h-48 object-cover"/>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4 ">
         {tags.map((tag: string, index: number) => (
          <span className='px-2 py-1 text-xs rounded-[10px] bg-blue-500/20 text-blue-200' key={index}>{tag}</span>
         ))}
        </div>
        <h2 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors">
            <a href={title} target="_blank">{title}</a>
        </h2>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center">
            <img src={image}
                 alt={title}
                 className="w-10 h-10 rounded-full mr-3"/>
            <div>
                <div className="font-medium">{link}</div>
                <div className="text-sm text-gray-400">
                    12:44 pm
                </div>
            </div>
        </div>
    </div>
</div>
  );
};


function Works() {
  const projects = [
    { title: 'AMD', moreInfo: 'A WhatsApp bot made in Javascript using @whiskeysockets/baileys library that has many functions', link: "https://github.com" , image: "/backgrounds/whatsapp.png", tags: ["react", "python"]},
    { title: "My Portofolio", moreInfo: 'My own portofolio developed using React', link: "https://github.com" , image: "/backgrounds/portofolio.png", tags: ["react", "python"]},
    { title: 'Mobile Money Wallet', moreInfo: 'A mobile money project written in C for my school project', link: "https://github.com" , image: "/backgrounds/wallet.png", tags: ["react", "python"]},
    { title: 'Recipe web', moreInfo: 'A recipe website created using HTML css and javascript', link: "https://github.com", image: "/backgrounds/recipe.jpg", tags: ["react", "python"] },
    { title: 'TestGram', moreInfo: "A Telegram bot written in python using telegram,s python wrapper library PyTelegramAPI(telebot)", link: "https://github.com" , image: "/backgrounds/tele.jpg", tags: ["react", "python"]},
  ];

  return (
    <div className='flex flex-col px-7' id='works'>
      <h1 className='w-full font-bold text-center hover:underline cursor-pointer'>My creations</h1>
      <div className='m-2 grid rounded-[4px] grid-cols-1 sm:grid-cols-2  gap-5 mx-auto'>
        {projects.map((project, index) => (
          <Project key={index} title={project.title} description={project.moreInfo} link={project.link} image={project.image} tags={project.tags}/>
        ))}
      </div>  
    </div>
  );
};

export default Works