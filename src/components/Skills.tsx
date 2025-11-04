import { Code2, FileCode, Palette, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { BsWebcamFill } from 'react-icons/bs';
import { IoPhonePortrait } from 'react-icons/io5';


function Skills() {
  const skillsData = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "I create websites and applications on the internet using Javascript frameworks.",
    },
    {
      icon: Palette,
      title: "Web Design",
      description:
        "I design aesthetically pleasing interfaces for websites for enhanced user experience and engagement.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps Development",
      description:
        "I develop software applications tailored for mobile devices using Flutter.",
    },
    {
      icon: FileCode,
      title: "Bash Scripting",
      description:
        "I am skilled in writing scripts that automate tasks on Unix-like operating systems using the Bash interface.",
    },
  ];

  return (
    <div className="m-12 flex flex-col" id="skills">
      <h1 className="w-full text-center  pb-2  hover:underline cursor-pointer text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
        Skills And Tech stack
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 mx-auto">
        {skillsData.map(({ icon: Icon, title, description }, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="max-w-98 border border-white/20 dark:border-neutral-600/50 group relative flex flex-col items-center p-6 bg-gray-900/50 rounded-xl overflow-hidden hover:scale-[103%] transition-all ease-in-out duration-300"
          >
            <Icon size={55} className='mb-6'/>
            {/* <img className="h-16 mx-0 my-4" src={icon} alt={title} /> */}
            <h2 className="w-full text-center text-[16px] font-bold mb-2">
              {title}
            </h2>
            <p className="text-center text-sm text-gray-300">{description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Skills;
