import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";

interface ProjectProps {
  title: string;
  tags: string[];
  description: string;
  link: string;
  image?: string;
}

const projects = [
  {
    title: "Kyru",
    category: "Application",
    description:
      "A native Linux Gallery app for managing and viewing Pictures and videos on your workstation",
    link: "https://github.com/aspects19/kyru",
    site: "https://kyru.amenya.dev",
    tags: ["rust", "GTK", "gallery"],
    image: "/assets/recipe-web.png"
  },
  {
    title: "Tuno",
    category: "Mobile",
    description:
      "A native Linux Gallery app ",
    link: "https://github.com/aspects19/tuno",
    site: "https://tuno.amenya.dev",
    tags: ["kotlin", "music", "compose"],
  },
  {
    title: "Kwanah",
    category: "Application",
    description:
      "Linux native WhatsApp client written in Rust and Webkit",
    link: "https://github.com/aspects19/kwanah",
    site: "https://kwanah.amenya.dev",
    tags: ["Rust", "webkit","GTK"],
  },
  {
    title: "Quwa",
    category: "AI and ML",
    description:
      "Machine learning model to accelerate diagnosis of rare diseases",
    link: "https://github.com/aspects19/quwa",
    site: "https://quwa.amenya.dev",
    tags: ["rust", "axum", "rig"],
  },
  {
    title: "StudyLux",
    category: "Application",
    description:
      "An assistant to plan, guide and help you study more efficiently",
    link: "https://github.com/aspects19/studylux",
    site: "https://studylux.amenya.dev",
    tags: ["Rust", "GTK"],
  },
  {
    title: "Gemisave",
    category: "web-extension",
    description: "Keep your Gemini chats without allowing them to use it in Model training",
    link: "https://github.com/aspects19/gemisave",
    site: "https://gemisave.amenya.dev", //TODO: Firefox link
    tags: ["javascript"],
  },
  {
    title: "My portfolio",
    category: "web",
    description: "My own portfolio developed using React",
    link: "https://github.com/aspects19/portfolio",
    site: "https://amenya.dev",
    tags: ["react"],
  },
  {
    title: "Recipe web",
    category: "web",
    description: "A recipe website created using HTML css and javascript",
    link: "https://github.com/aspects19/mrecipe",
    site: "https://mrecipe.amenya.dev",
    tags: ["react", "python"],
  },
  {
    title: "Hitimu",
    category: "web",
    description: "Easier access to study material within campus",
    link: "https://github.com/aspects19//hitimu",
    site: "https://hitimu.vercel.app",
    tags: ["react", "appwrite"],
  },
  {
    title: "Travvy",
    category: "Mobile",
    description:
      "Carpool easily within Campus",
    link: "https://github.com/aspects19/travvy",
    tags: ["dart", "rust"],
  }
];

const Work: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative h-64 md:h-80 w-full py-10 px-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
    >
       <img
        src={project.image || "/assets/recipe-web.png"}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-br from-black/80 to-[#010116]/20" />


      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#010116]/40 backdrop-blur-sm">
        <motion.a
          href={project.link}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          aria-label="View Link"
        >
          <FaLink className="w-6 h-6" />
        </motion.a>
        <motion.a
          href={project.link}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          aria-label="View Source"
        >
          <BsGithub className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const WorkInfo: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div className="flex flex-col justify-center md:p-4">
      <h3 className="text-3xl font-bold text-white  md:mb-4">{project.title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6 text-lg">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-cyan-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative mx-auto mt-2 sm:mt-8  max-w-5xl px-10 py-10"
      id="works"
    >
      <AnimatePresence>
        <div className="relative z-10 md:mb-2 text-center">
          <p className="mb-3 text-xs font-normal tracking-widest text-slate-400 uppercase md:text-sm">
            FEATURED CASE STUDIES
          </p>

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="inline-block px-4 py-2 mb-5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400"
          >
            curated projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-white"
            style={{
              textShadow:
                "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
            }}
          ></motion.h2>
        </div>
      </AnimatePresence>
      <div ref={containerRef} className="grid gap-16 md:gap-24">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className={`relative  mx-auto w-full flex md:grid md:grid-cols-2 gap-8 md:gap-6 ${
              index % 2 !== 0 ? "flex-col-reverse" : "flex-col"
            }`}
          >
            {index % 2 !== 0 ? (
              <>
                <WorkInfo project={project} />
                <Work project={project} />
              </>
            ) : (
              <>
                <Work project={project} />
                <WorkInfo project={project} />
              </>
            )}
          </div>
        ))}
      </div>
      { visibleCount < projects.length && (
        <button
          className="group flex w-fit items-center justify-center gap-2 text-neutral-300 hover:text-neutral-100 mx-auto mt-20"
          onClick={() => {
              const y = window.scrollY;
              setVisibleCount(projects.length);
              requestAnimationFrame(() => {
              window.scrollTo({ top: y });
    });
          }}
        >
          See more projects
          <div className="relative flex h-6 w-6 overflow-hidden rounded-full border border-white/10 bg-white/5 duration-500 group-hover:bg-white/10 items-center justify-center">
            <div className="flex w-12 -translate-x-5 duration-500 ease-in-out group-hover:translate-x-1">
              <span className="flex h-6 w-6 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right size-3.5 pl-5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
              <span className="flex h-6 w-6 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right size-3.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </button>
      )}
    </section>
  );
}

export default Projects;
