
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-900 dark:text-white"
            >
              Srajal Agrawal
            </ScrollLink>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                activeClass="text-primary dark:text-primary font-semibold"
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-md shadow-lg mt-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                activeClass="text-primary dark:text-primary font-semibold"
                onClick={closeMenu}
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
