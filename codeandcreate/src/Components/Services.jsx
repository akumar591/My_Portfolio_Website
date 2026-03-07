import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const expertiseTimeline = [
  {
    title: "Frontend Development",
    color: "from-cyan-400 to-blue-500",
    description:
      "Crafting responsive, accessible UIs with React, TailwindCSS, and JavaScript.",
    icons: [SiReact, SiTailwindcss, SiJavascript],
  },
  {
    title: "Backend Development",
    color: "from-purple-400 to-pink-500",
    description:
      "Building secure, scalable APIs with Node.js, Express, and MongoDB.",
    icons: [SiNodedotjs, SiExpress, SiMongodb],
  },
  {
    title: "Deployment & Hosting",
    color: "from-yellow-300 to-orange-400",
    description:
      "CI/CD, hosting, and domain setup using Vercel, GitHub, and other platforms.",
    icons: [SiVercel, SiGithub],
  },
];

const Services = () => {
  return (
    <div className="w-full bg-black text-white py-14 px-4 sm:px-8">
      <div className="relative border-l border-white/10 pl-5 max-w-3xl mx-auto space-y-14">
        {expertiseTimeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[13px] w-3 h-3 bg-gradient-to-br from-cyan-300 to-blue-600 rounded-full shadow-md animate-pulse"></span>

            {/* Card */}
            <div className="bg-white/5 px-4 py-[20px] rounded-lg backdrop-blur-md border border-white/10 transition-transform group-hover:scale-[1.02]">
              <h3
                className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
              >
                {item.title}
              </h3>

              <p className="text-xs text-gray-300 mt-2">{item.description}</p>

              <div className="flex gap-3 text-xl mt-3">
                {item.icons.map((Icon, i) => (
                  <Icon
                    key={i}
                    className="text-cyan-300 hover:scale-125 transition-transform"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
