import { motion } from "motion/react";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

function Home() {

    function AnimatedSlug() {
        const roles = [
            "Full Stack Developer",
            "Web Designer",
            "Open Source Contributor",
            "UI/UX Enthusiast",
        ];
        const [index, setIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
            setIndex((i) => (i + 1) % roles.length);
            }, 2000);
            return () => clearInterval(interval);
        }, [roles.length]);

        return (
            <motion.div
            key={index}
            initial={{ rotateX: 90,opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1}}
            exit={{ rotateX: 90, opacity: 0}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-10 text-2xl text-gray-700 text-center origin-bottom"
            style={{ perspective: 1 }}
            >
            {roles[index]}
            </motion.div>
        );
        }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-[500px] flex items-center justify-center"
    >
      
    
      <div className="flex relative flex-col items-center gap-10">
        <div className="text-left flex flex-col gap-2">
          <div className=" absolute hidden md:block top-10/12 md:-left-[55%] h-12 transition-all duration-900 animate-pulse w-40 blur-[80px] bg-white/60"></div>
          <div className=" absolute top-10  md:-top-16 left-10 md:left-[99%] h-16 md:h-12 transition-all duration-1000 animate-pulse w-40 blur-[100px] md:blur-[80px] bg-white"></div>
          <h1 className="text-5xl text-gray-400">
            Hi<span className="text-6xl">👋</span>
          </h1>
          <h2 className="text-6xl font-bold">Amenya <span className="font-light text-5xl">here</span></h2>

          <AnimatedSlug/>
        </div>

        <div className="flex flex-row gap-6 mt-4">
          <a href="https://github.com/aspects19" className="hover:text-gray-500 hover:translate-1 transition-colors">
            <IoLogoGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/amenya5643" className="hover:text-blue-600 hover:-translate-1 transition-colors">
            <FaLinkedin size={40} />
          </a>
          <a href="mailto:jeffamenya388@gmail.com" className="hover:text-blue-500 hover:translate-1 transition-colors">
            <IoMdMail size={40} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
