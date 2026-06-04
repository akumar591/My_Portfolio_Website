import React from "react";
import { FiDownload } from "react-icons/fi";
import Social from "../Components/Social";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { num: 1, label: "Year Experience" },
  { num: 5, label: "Projects Delivered" },
  { num: 15, label: "Technologies" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const card = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const About = () => {
  const handleDownload = () => {
    const fileUrl = "/Abhishek Kumar_Java_full_Stack.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Abhishek Kumar_Java_full_Stack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-start md:items-center text-[aliceblue] px-6 pt-32 md:pt-0"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Header */}
        <motion.div
          variants={item}
          className="group flex items-center justify-center gap-3 
          text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide"
        >
          <span>The Mind Behind the</span>
          <span className="text-sky-500 font-semibold">Code</span>
          <span className="transition-transform duration-300 group-hover:rotate-90">
            ➜
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 border border-sky-400 text-sky-400 px-6 py-2 rounded-full hover:bg-sky-400 hover:text-black transition"
          >
            Download CV <FiDownload />
          </button>

          <Social />
        </motion.div>

        {/* Intro Line */}
        <motion.p
          variants={item}
          className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        >
          Hi, I'm{" "}
          <span className="text-white font-semibold">Abhishek Shrivastav</span>.
          I enjoy transforming{" "}
          <span className="text-sky-400">
            complex ideas into scalable software solutions and seamless digital
            experiences
          </span>{" "}
          through clean code and modern technologies.
        </motion.p>

        {/* Accent Content */}
        <motion.div
          variants={container}
          className="mt-12 flex flex-col items-center gap-8 max-w-4xl mx-auto"
        >
          {/* Block 1 */}
          <motion.div
            variants={card}
            whileHover={{ y: -4 }}
            className="group relative w-full px-8 py-4"
          >
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-sky-400/70 to-blue-500/60 rounded-full transition-all duration-300 group-hover:w-[3px]"></span>

            <span className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-400/70 to-purple-500/60 rounded-full transition-all duration-300 group-hover:w-[3px]"></span>

            <p className="text-gray-300 text-sm sm:text-base">
              I build modern full-stack applications with{" "}
              <span className="text-sky-400 font-medium">
                Java, Spring Boot, and React
              </span>
              . Focusing on scalable systems, clean code, and seamless user
              experiences.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            variants={card}
            whileHover={{ y: -4 }}
            className="group relative w-full px-8 py-4"
          >
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-sky-400/70 to-blue-500/60 rounded-full transition-all duration-300 group-hover:w-[3px]"></span>

            <span className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-400/70 to-purple-500/60 rounded-full transition-all duration-300 group-hover:w-[3px]"></span>

            <p className="text-gray-400 text-sm sm:text-base">
              Continuously exploring{" "}
              <span className="text-sky-400">
                Java, Spring Boot, AI-powered tools
              </span>{" "}
              and modern technologies to build smarter software solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -6 }}
              className="border border-white/10 rounded-xl py-6 px-4 backdrop-blur-sm hover:border-sky-400/40 transition"
            >
              <h3 className="text-3xl sm:text-4xl text-sky-400 font-semibold">
                <CountUp end={item.num} duration={2} />+
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
