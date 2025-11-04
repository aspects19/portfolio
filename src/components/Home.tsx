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
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-10 text-3xl text-gray-700 text-center origin-bottom"
            style={{ perspective: 800 }}
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
      <div className=" absolute top-60 left-20 h-10 transition-all duration-700 animate-pulse w-40 blur-[60px] bg-white/60"></div>
      <div className=" absolute top-30 right-20 h-10 transition-all duration-700 animate-pulse w-40 blur-[70px] bg-white"></div>
    
      <div className="flex flex-col items-center gap-10">
        <div className="text-left flex flex-col gap-2">
          <h1 className="text-5xl text-gray-400">
            Hi<span className="text-6xl">👋</span>
          </h1>
          <h2 className="text-6xl font-bold">Amenya here</h2>

          <AnimatedSlug/>
        </div>

        <div className="flex flex-row gap-6 mt-4">
          <a href="https://github.com/aspects19" className="hover:text-gray-500 transition-colors">
            <IoLogoGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/amenya5643" className="hover:text-blue-600 transition-colors">
            <FaLinkedin size={40} />
          </a>
          <a href="mailto://jeffamenya388@gmail.com" className="hover:text-blue-500 transition-colors">
            <IoMdMail size={40} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
