import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Skills from "../Components/Skills";
import Services from "../Components/Services";
import Title from "../Components/Title";

const Expertise = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full min-h-[100dvh] bg-black text-white py-10 px-4 sm:px-8 md:px-12 lg:px-20 will-change-transform"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-2">

        {/* Left: Services */}
        <div className="lg:ml-10 sm:ml-0 lg:mt-0 sm:mt-10 w-full lg:w-1/2">
          <Services />
        </div>

        {/* Right: Skills */}
        <div className="w-full lg:w-1/2">
          <div className="text-center text-3xl">
            <Title text1={"My"} text2={"Expertise"} />
          </div>

          <Skills />
        </div>

      </div>
    </motion.div>
  );
};

export default Expertise;