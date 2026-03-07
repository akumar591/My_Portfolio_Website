import React, { useState } from "react";
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
      "AI-powered e-commerce platform with a modern, responsive UI for seamless online shopping. Built to demonstrate strong frontend development and performance optimization.",
    image: assets.project_2,
    github: "https://github.com/akumar591/ShopZenAI_MERN_Project",
    live: "https://shop-zen-ai-mern-project.vercel.app/",
  },
  {
    title: "Gold -",
    subTitle: "Future of India",
    description:
      "Gold – The Future of India is a platform designed to support and showcase talented athletes. It highlights achievements and promotes sports culture through a modern, responsive interface.",
    image: assets.project_3,
    github: "https://github.com/akumar591/Gold_The_future_Of_India",
    live: "https://gold-the-future-of-india.vercel.app/",
  },
  {
    title: "Haven",
    subTitle: "X",
    description:
      "A modern real estate website with a clean UI for showcasing properties. Features a simple enquiry form for quick user inquiries and contact.",
    image: assets.project_4,
    github: "https://github.com/akumar591/Haven-x_Project-js",
    live: "https://haven-x.netlify.app/",
  },
  {
    title: "Credgeniee",
    subTitle: "Finances",
    description: "Credgeniee is a fintech platform designed to simplify loans, investments, and financial management in one place.",
    image: assets.project_5,
    github:"https://github.com/akumar591/Credgeniee-Your-Trusted-Partner/tree/main/frontend",
    live: "https://credgeniee-your-trusted-partner.vercel.app/",
  },
];

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      staggerChildren: 0.3,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({ project, direction }) => {
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      key={project.title}
      className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-6 md:p-10"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="md:w-1/2 space-y-4 text-left text-white"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-2xl sm:text-3xl">
          <Title text1={project.title} text2={project.subTitle} />
        </div>

        <motion.p className="text-base md:text-lg text-white/80">
          {project.description}
        </motion.p>

        <div className="flex flex-wrap items-center gap-6 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 hover:text-sky-400 transition text-sm md:text-base"
          >
            <FaGithub size={22} />
            View Repository
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 text-sky-400 hover:text-sky-600 transition text-sm md:text-base"
          >
            <FaExternalLinkAlt size={22} />
            Explore
          </a>
        </div>
      </motion.div>

      <motion.div
        className="lg:w-full md:w-1/2 mt-6 md:mt-0"
        variants={imageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full max-h-[400px] h-auto shadow-lg object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectSlider = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const total = projects.length;

  const paginate = (dir) => {
    setCurrent([(current + dir + total) % total, dir]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-4 py-20 relative overflow-hidden"
    >
      {/* Slider */}
      <motion.div
        className="relative w-full flex justify-center"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <ProjectCard
            key={projects[current].title}
            project={projects[current]}
            direction={direction}
          />
        </AnimatePresence>
      </motion.div>

      {/* Navigation */}
      <motion.div
        className="flex items-center justify-between w-full max-w-6xl mt-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Prev */}
        <motion.button
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-white px-3 py-2 rounded hover:text-sky-400 transition flex items-center"
        >
          <FaArrowLeft className="text-lg md:mr-2" />
          <span className="hidden md:inline">Prev</span>
        </motion.button>

        {/* Counter */}
        <div className="text-[aliceblue] text-sm md:text-base">
          <span className="text-sky-500">Project</span> {current + 1}
          <span className="text-sky-500"> / </span>
          {total}
        </div>

        {/* Next */}
        <motion.button
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-white px-3 py-2 rounded hover:text-sky-400 transition flex items-center"
        >
          <span className="hidden md:inline">Next</span>
          <FaArrowRight className="text-lg md:ml-2" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectSlider;
