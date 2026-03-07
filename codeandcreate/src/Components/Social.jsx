import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/akumar591' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/abhishek-shrivastav-35b483311' },
  { icon: <FaTwitter />, path: 'https://x.com/rajshrivastav62' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/shrivastav_.raj' },
];

const Social = () => {
  return (
    <div className="flex gap-3">
      {socials.map((social, index) => (
       <a
  key={index}
  href={social.path}
  target="_blank"
  rel="noopener noreferrer"
  className="relative text-lg px-2 py-2 text-[aliceblue] transition-all duration-300 hover:text-sky-400 hover:scale-110"
>

          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
