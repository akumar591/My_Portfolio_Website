import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import Title from "../Components/Title";

const projects = [
  {
    title: "Trendify",
    subTitle: "Shop",
    description:
      "An e-commerce site with payment gateway integration and product filtering.",
    image: assets.project_1,
    github: "https://github.com/akumar591/Trendify",
    live: "https://trendifyfrontend.vercel.app/",
  },
  {
    title: "ShopZen",
    subTitle: "AI",
    description:
      "AI-powered e-commerce platform with a modern, responsive UI for seamless online shopping.",
    image: assets.project_2,
    github: "https://github.com/akumar591/ShopZenAI_MERN_Project",
    live: "https://shop-zen-ai-mern-project.vercel.app/",
  },
  {
    title: "Gold -",
    subTitle: "Future of India",
    description:
      "Platform designed to support and showcase talented athletes.",
    image: assets.project_3,
    github: "https://github.com/akumar591/Gold_The_future_Of_India",
    live: "https://gold-the-future-of-india.vercel.app/",
  },
  {
    title: "Haven",
    subTitle: "X",
    description:
      "Modern real estate website with property showcase and enquiry form.",
    image: assets.project_4,
    github: "https://github.com/akumar591/Haven-x_Project-js",
    live: "https://haven-x.netlify.app/",
  },
  {
    title: "Credgeniee",
    subTitle: "Finances",
    description:
      "Fintech platform designed to simplify loans and financial management.",
    image: assets.project_5,
    github:
      "https://github.com/akumar591/Credgeniee-Your-Trusted-Partner/tree/main/frontend",
    live: "https://credgeniee-your-trusted-partner.vercel.app/",
  },
];

const ProjectCard = memo(({ project, direction }) => {
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      key={project.title}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.28 }}
      className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-6 md:p-10"
    >
      {/* Text */}
      <div className="md:w-1/2 space-y-4 text-left text-white">
        <div className="text-2xl sm:text-3xl">
          <Title text1={project.title} text2={project.subTitle} />
        </div>

        <p className="text-base md:text-lg text-white/80">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-sky-400 transition text-sm md:text-base"
          >
            <FaGithub size={20} />
            View Repository
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sky-400 hover:text-sky-600 transition text-sm md:text-base"
          >
            <FaExternalLinkAlt size={20} />
            Explore
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="lg:w-full md:w-1/2 mt-6 md:mt-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          className="rounded-lg w-full max-h-[400px] h-auto shadow-lg object-cover will-change-transform"
        />
      </div>
    </motion.div>
  );
});

const ProjectSlider = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const total = projects.length;

  const paginate = (dir) => {
    setCurrent([(current + dir + total) % total, dir]);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      
      {/* Slider */}
      <div className="relative w-full flex justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <ProjectCard
            key={projects[current].title}
            project={projects[current]}
            direction={direction}
          />
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between w-full max-w-6xl mt-10 px-4">

        <button
          onClick={() => paginate(-1)}
          className="text-white px-3 py-2 rounded hover:text-sky-400 transition flex items-center"
        >
          <FaArrowLeft className="text-lg md:mr-2" />
          <span className="hidden md:inline">Prev</span>
        </button>

        <div className="text-[aliceblue] text-sm md:text-base">
          <span className="text-sky-500">Project</span> {current + 1}
          <span className="text-sky-500"> / </span>
          {total}
        </div>

        <button
          onClick={() => paginate(1)}
          className="text-white px-3 py-2 rounded hover:text-sky-400 transition flex items-center"
        >
          <span className="hidden md:inline">Next</span>
          <FaArrowRight className="text-lg md:ml-2" />
        </button>

      </div>
    </div>
  );
};

export default ProjectSlider;