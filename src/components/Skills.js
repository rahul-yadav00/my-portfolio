"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPostman,
  SiJquery,
  SiApachenetbeanside,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Git & GitHub", icon: <SiGit /> },
  { name: "REST APIs", icon: <SiApachenetbeanside /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "AJAX", icon: <SiApachenetbeanside /> },
  { name: "jQuery", icon: <SiJquery /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md flex flex-col items-center justify-center text-center hover:shadow-cyan-500/30 transition"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <p className="text-sm font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
