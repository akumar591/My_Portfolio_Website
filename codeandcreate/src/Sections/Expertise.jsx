import React from "react";
import { motion } from "framer-motion";
import Skills from "../Components/Skills";
import Services from "../Components/Services";
import Title from "../Components/Title"

// Reusable fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Expertise = () => {
  return (
    <motion.div
      className="w-full min-h-screen bg-black text-white py-10 px-4 sm:px-8 md:px-12 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-2">
        
        {/* Left: Services */}
        <motion.div
          className="lg:ml-10 sm:ml-0 lg:mt-0 sm:mt-10 w-full lg:w-1/2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Services />
        </motion.div>

        {/* Right: Skills */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="text-center text-3xl">
            <Title text1={"My"} text2={"Expertise"} />
          </div>
          <Skills />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Expertise;
