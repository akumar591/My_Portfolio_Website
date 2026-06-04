import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/Title";
import Earth from "../Components/Earth";
import Form from "../Components/Form";
import ContactInfo from "../Components/ContactInfo";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-black text-[aliceblue] py-10 px-4 flex md:flex-col items-center justify-center">
      {/* Main Content */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-10 gap-8">
        {/* Left Side - Earth + Contact Info */}
        <motion.div
          className="w-full lg:w-[45%] flex flex-col items-center lg:items-start gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Earth />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <ContactInfo />
          </motion.div>
        </motion.div>

        {/* Right Side - Form Section */}
        <motion.div
          className="w-full lg:w-[50%]"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading and Subheading */}
          <motion.div
            className="text-center mb-4 lg:ml-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px]">
              <Title text1={"Let’s "} text2={"Collaborate"} />
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[aliceblue] max-w-md mx-auto px-2">
              Drop a message — I’ll reply soon!
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="sm:px-4 md:px-8 lg:ml-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Form />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
