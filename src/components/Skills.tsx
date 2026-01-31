import { motion } from "motion/react";
import {
  SiReact,
  SiTypescript,
  SiRust,
  SiPython,
  SiFastapi,
  SiLinux,
  SiAndroid,
  SiKotlin,
  SiFlutter,
  SiGtk,
} from "react-icons/si";

function Skills() {
  const skillsData = [
    {
      title: "Backend",
      animationDir: "left",
      skills: [
        {
          name: "Rust",
          icon: SiRust,
          color: "text-orange-500",
          bg: "bg-orange-500",
          border: "border-orange-500",
        },
        {
          name: "Axum",
          icon: SiRust,
          color: "text-orange-500",
          bg: "bg-orange-500",
          border: "border-orange-500",
        },
        {
          name: "Python",
          icon: SiPython,
          color: "text-yellow-500",
          bg: "bg-yellow-500",
          border: "border-yellow-500",
        },
        {
          name: "FastAPI",
          icon: SiFastapi,
          color: "text-teal-500",
          bg: "bg-teal-500",
          border: "border-teal-500",
        },
      ],
    },
    {
      title: "Frontend",
      animationDir: "right",
      skills: [
        {
          name: "React",
          icon: SiReact,
          color: "text-cyan-500",
          bg: "bg-cyan-500",
          border: "border-cyan-500",
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "text-blue-500",
          bg: "bg-blue-500",
          border: "border-blue-500",
        },
      ],
    },
    {
      title: "Mobile",
      animationDir: "left",
      skills: [
        {
          name: "Flutter",
          icon: SiFlutter,
          color: "text-cyan-500",
          bg: "bg-cyan-500",
          border: "border-cyan-500",
        },
        {
          name: "Android",
          icon: SiAndroid,
          color: "text-green-500",
          bg: "bg-green-500",
          border: "border-green-500",
        },
        {
          name: "Kotlin",
          icon: SiKotlin,
          color: "text-purple-500",
          bg: "bg-purple-500",
          border: "border-purple-500",
        },
      ],
    },
    {
      title: "Systems & Tools",
      animationDir: "right",
      skills: [
        {
          name: "Linux",
          icon: SiLinux,
          color: "text-yellow-500",
          bg: "bg-yellow-500",
          border: "border-yellow-500",
        },
        {
          name: "GTK",
          icon: SiGtk,
          color: "text-gray-200",
          bg: "bg-gray-500",
          border: "border-gray-500",
        },
      ],
    },
  ];

  return (
    <div className="py-20 px-6 items-center" id="skills">
      <div className="flex  justify-center mb-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="inline-block px-5 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400"
        >
          Skills
        </motion.span>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:ml-10">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                x: category.animationDir === "left" ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-500 font-mono">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`
                                    inline-flex items-center gap-2 rounded-lg px-4 py-1 
                                    ${skill.color} ${skill.bg}/10 border ${
                                      skill.border
                                    }/30 
                                    font-mono transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-${skill.color.replace(
                                      "text-",
                                      "",
                                    )}/30
                                `}
                  >
                    <skill.icon className="text-lg" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
