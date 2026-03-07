import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { DiMongodb, DiVisualstudio } from "react-icons/di";
import { SiExpress, SiRedux, SiPostman, SiTailwindcss } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-cyan-300" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "Redux", icon: SiRedux, color: "text-purple-500" },
  { name: "MongoDB", icon: DiMongodb, color: "text-green-400" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
  { name: "VS Code", icon: DiVisualstudio, color: "text-blue-400" },
  { name: "Vercel", icon: AiOutlineCloudServer, color: "text-white" },
  { name: "Netlify", icon: AiOutlineCloudServer, color: "text-green-400" },
];

const Skills = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map(({ name, icon: Icon, color }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-4 rounded-lg 
            bg-white/5 backdrop-blur-md border border-white/10
            hover:border-sky-500 hover:shadow-md hover:shadow-sky-500/20
            hover:scale-105 transition duration-300"
          >
            <Icon className={`text-3xl mb-1 ${color}`} />
            <span className="text-xs text-center">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
