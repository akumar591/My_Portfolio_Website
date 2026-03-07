import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/Title";
import Earth from "../Components/Earth";
import Form from "../Components/Form";
import ContactInfo from "../Components/ContactInfo";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="w-full min-h-[100dvh] bg-black text-[aliceblue] py-10 px-4 flex md:flex-col items-center justify-center will-change-transform"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fade}
    >
      {/* Main Content */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-10 gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start gap-4">
          <Earth />
          <ContactInfo />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[50%]">
          <div className="text-center mb-4 lg:ml-4">
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              <Title text1={"Let’s "} text2={"Collaborate"} />
            </h2>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[aliceblue] max-w-md mx-auto px-2">
              Drop a message — I’ll reply soon!
            </p>
          </div>

          <div className="sm:px-4 md:px-8 lg:ml-10">
            <Form />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
