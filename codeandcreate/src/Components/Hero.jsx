import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { assets } from "../assets/assets";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const textVariants1 = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center w-full text-[aliceblue] overflow-hidden transition-all duration-500">
      {/* Main Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="container text-center mx-auto py-6 px-4 sm:px-6 md:px-20 lg:px-32"
      >
        {/* Small Circle */}
        <motion.div
          custom={2}
          variants={textVariants}
          className="flex mt-10 justify-start md:justify-start"
        >
          <img
            src={assets.sm_circle}
            alt="sm circle"
            className="ml-4 sm:ml-12 md:ml-[100px] w-12 sm:w-16 md:w-20"
            loading="lazy"
          />
        </motion.div>

        {/* Animate Heading Line by Line */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 sm:mt-12 md:mt-20"
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Meet{" "}
          <motion.span
            className="text-sky-400 inline-block"
            variants={textVariants1}
            custom={1}
          >
            Code & Create
          </motion.span>{" "}
          —
        </motion.h1>

        <motion.div custom={1} variants={textVariants}>
          <h2 className="mt-2 text-sm sm:text-base md:text-lg">
            Crafting Modern Web Experiences
          </h2>
        </motion.div>

        <motion.hr
          custom={2}
          variants={textVariants}
          className="mt-3 border-gray-400 border w-2/3 sm:w-1/2 md:w-1/3 mx-auto"
        />

        {/* Typing Animation */}
        <motion.div custom={3} variants={textVariants}>
          <p className="mt-5 px-3 sm:px-10 md:px-0 text-sm sm:text-base leading-relaxed">
            <TypeAnimation
              sequence={[
                "Delivering sleek, user-first full-stack web apps...",
                1500,
                "Fast. Accessible. Modern design.",
                1500,
                "I build scalable MERN applications tailored to your vision.",
                1500,
              ]}
              wrapper="span"
              speed={40}
              className="block"
              repeat={Infinity}
            />
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          custom={4}
          variants={textVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 mt-6"
        >
          <a href="#projects"  className="px-8 py-1 bg-transparent border border-sky-400 text-sky-400 rounded-full relative overflow-hidden group transition duration-300 ease-in-out">
            <span className="absolute inset-0 bg-sky-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Projects
            </span>
          </a>

          <a href="#expertise"  className="group relative inline-flex items-center gap-2 mt-2 ml-2 cursor-pointer hover:text-sky-600 transition">
            <span className="text-sky-500">Expertise</span>
            <span className="text-[ailceblue] transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-90">
              ➜
            </span>
          </a>
          
        </motion.div>

        {/* Medium Circle */}
        <motion.div
          custom={2}
          variants={textVariants}
          className="mt-8 flex justify-end md:justify-end"
        >
          <img
            src={assets.md_circle}
            alt="md circle"
            className="w-24 sm:w-28 md:w-36 lg:w-44"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#about">  <svg
          className="w-6 h-6 text-sky-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg></a>
      </div>
    </div>
  );
};

export default Hero;
