import { motion } from 'motion/react';
import { FaFileCode } from 'react-icons/fa6';
import { IoCodeSlash } from 'react-icons/io5';
import { MdPalette } from 'react-icons/md';
import { RiSmartphoneFill } from 'react-icons/ri';


function Skills() {
  const skillsData = [
    {
      icon: IoCodeSlash,
      title: "Web Development",
      description:
        "I create websites and applications on the internet using Javascript frameworks.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MdPalette,
      title: "Web Design",
      description:
        "I design aesthetically pleasing interfaces for websites for enhanced user experience and engagement.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: RiSmartphoneFill,
      title: "Mobile Apps Development",
      description:
        "I develop software applications tailored for mobile devices using Flutter.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: FaFileCode,
      title: "Bash Scripting",
      description:
        "I am skilled in writing scripts that automate tasks on Unix-like operating systems using the Bash interface.",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <div className="m-12 flex flex-col items-center" id="skills">
      
      {/* <div className=" w-fit text-center bg-primary/20 hover:underline cursor-pointer text-xl px-6 py-2  md:text-3xl font-bold rounded-3xl mb-6 ">
        Skills
      </div> */}
      <div className=" bg-primary-400 bg-primary/10 hover:bg-primary-600 text-neutral-50 py-3 px-10 rounded-full w-fit md:text-4xl text-2xl text-center mb-6 border border-white/10">
        Skills
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 mx-auto">
        {skillsData.map(({ icon: Icon, title, description, gradient}, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="max-w-98 border border-white/20 dark:border-neutral-600/50 group relative flex flex-col items-center p-6 bg-gray-900/50 rounded-xl overflow-hidden hover:scale-[103%] transition-all ease-in-out duration-300"
          >
            <Icon size={55} className={`mb-6 text-linear-to-r ${gradient}`}/>
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
