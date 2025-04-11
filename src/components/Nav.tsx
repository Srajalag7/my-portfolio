
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

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
        scrolled ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="font-heading text-xl font-bold text-primary">
            <ScrollLink to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Srajal Agrawal
            </ScrollLink>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm font-medium hover:text-primary cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))}
          </nav>

          {/* Social links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleNav}
            aria-label="Toggle menu"
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-6 mb-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg font-medium hover:text-primary cursor-pointer"
                onClick={toggleNav}
              >
                {link.name}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex items-center space-x-6 mt-auto mb-8">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
