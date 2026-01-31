import { motion } from "motion/react";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

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
  }, []);

  return (
    <motion.div
      key={index}
      initial={{ rotateX: 90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="h-10 text-xl text-gray-600 origin-bottom"
      style={{ perspective: 800 }}
    >
      {roles[index]}
    </motion.div>
  );
}

function Home() {
  return (
    <motion.section
      id="home"
      className="h-[500px] flex items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative flex flex-col items-center gap-10">
        <div className="absolute -left-40 top-20 h-20 w-40 blur-[100px] bg-white/40 animate-pulse" />
        <div className="absolute left-40 -top-20 h-24 w-48 blur-[120px] bg-white/30 animate-pulse" />

        <div className="flex flex-col gap-2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-sm text-gray-400 tracking-wide"
          >
            Crafting
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-bold"
          >
            Simple solutions
          </motion.h2>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl font-light"
          >
            for complex problems
          </motion.span>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <AnimatedSlug />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="flex gap-6 mt-4"
        >
          <a
            href="https://github.com/aspects19"
            className="hover:text-blue-500 transition-colors"
          >
            <IoLogoGithub size={40} />
          </a>

          <a
            href="https://linkedin.com/in/amenya5643"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={40} />
          </a>

          <a
            href="mailto:hello@amenya.dev"
            className="hover:text-blue-500 transition-colors"
          >
            <IoMdMail size={40} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
