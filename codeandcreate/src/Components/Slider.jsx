import React, { useRef } from "react";
import "./Slider.css";

const Slider = () => {

  const sideNav = useRef(null);

  return (
    <div className="slider sides_Left">
      <nav className="nav__wrapper">
        <ul ref={sideNav} id="side_nav" className="flex flex-col gap-1">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              01
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              02
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              03
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              04
            </a>
          </li>

          <li>
            <a href="#expertise" className="hover:text-cyan-400 transition">
              05
            </a>
          </li>

          {/* Static Line */}
          <div className="line" />
        </ul>
      </nav>

      {/* GitHub Icon */}
      <a
        className="fixed block bottom-0 mb-8"
        href="https://github.com/akumar591"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="30"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 512"
        >
          <path
            fill="aliceblue"
            d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1
            10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1z"
          />
        </svg>
      </a>
    </div>
  );
};

export default Slider;