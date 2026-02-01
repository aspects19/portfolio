import { motion } from "motion/react";
import { FaCode, FaPalette, FaUser } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { RiPoliceBadgeLine } from "react-icons/ri";

export function About() {
  const features = [
    {
      Icon: IoRocketSharp,
      title: "Performance",
      description:
        "Built optimized applications that work efficiently.",
    },
    {
      Icon: RiPoliceBadgeLine,
      title: "Security",
      description:
        "Creating secure and well tested solutions using modern technologies",
    },
    {
      Icon: FaCode,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable and efficient code following best practices",
    },
    {
      Icon: FaUser,
      title: "Collaboration",
      description:
        "Working effectively with designers, developers, and stakeholders",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            className="inline-block py-2 px-4 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Passion Meets{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Skill
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            I&apos;m a seasoned fullstack developer with 5+ years of experience building
            modern fullstack solutions. I love transforming ideas into
            pixel-perfect solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6  max-w-2xl items-center sm:mx-6 ">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.6, duration: 1 }}
              className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-all group"
            >
              <motion.div
                className="inline-flex p-3 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-lg mb-4"
              >
                <feature.Icon className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <h3 className="text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
