import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="w-full mt-6 max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 backdrop-blur-md text-white p-6 rounded-xl shadow-lg">
      {/* Location */}
      <div className="flex items-center gap-3 border-b-2 border-transparent hover:border-sky-400 transition-all pb-2 w-full sm:w-auto">
        <MdLocationOn className="text-2xl text-sky-400" />
        <div>
          <p className="text-sm text-gray-300">Location</p>
          <p className="text-base text-[aliceblue]">Bengaluru, India</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3 border-b-2 border-transparent hover:border-sky-400 transition-all pb-2 w-full sm:w-auto">
        <MdPhone className="text-2xl text-sky-400" />
        <div>
          <p className="text-sm text-gray-300">Phone</p>
          <p className="text-base text-[aliceblue]">+91 6200790591</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-3 border-b-2 border-transparent hover:border-sky-400 transition-all pb-2 w-full sm:w-auto">
        <MdEmail className="text-2xl text-sky-400" />
        <div>
          <p className="text-sm text-gray-300">Email</p>
          <p className="text-base text-[aliceblue]">
            akumar.12121999@gmail.com
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-2 md:mt-0">
        <a
          href="https://github.com/akumar591"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-full-stack-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://x.com/rajshrivastav62"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          <FaTwitter size={22} />
        </a>
        <a
          href="https://www.instagram.com/shrivastav_.raj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          <FaInstagram size={22} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
