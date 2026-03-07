import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showMobileMenu);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMobileMenu]);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Expertise", link: "#expertise" },
    { name: "Contact", link: "#contact" },
  ];

  const handleNavigation = (link) => {
    setShowMobileMenu(false);

    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black lg:bg-transparent px-[4%] pt-8 pb-4 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={assets.logo}
          className="w-[max(20%,200px)] sm:w-[220px] md:w-[250px] cursor-pointer object-contain"
          alt="logo"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          <div className="text-[18px] border text-[aliceblue] p-1 px-5 rounded cursor-pointer text-center relative overflow-hidden group transition-all duration-300">
            <span className="absolute inset-0 bg-[aliceblue] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>

            <a
              href="#contact"
              className="relative z-10 group-hover:text-black transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(true)}
          className="lg:hidden z-[100]"
        >
          <img src={assets.menu_icon} className="w-7" alt="menu" />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setShowMobileMenu(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] transition-all duration-300 ${
          showMobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-[280px] bg-[aliceblue] z-[90] transform transition-transform duration-300 ease-out ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setShowMobileMenu(false)}>
            <img src={assets.cross_icon} className="w-4" alt="close" />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center gap-3 mt-4 px-5 text-lg font-medium">
          {navLinks.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavigation(item.link)}
              className="px-4 py-2 w-full text-center rounded-full hover:bg-gray-200 transition cursor-pointer"
            >
              <span className="hover:text-cyan-500 transition">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;