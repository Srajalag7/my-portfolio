
import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Srajal Agrawal</h2>
            <p className="text-gray-400 mb-6">
              GenAI Engineer & Full-Stack Developer building innovative solutions with cutting-edge technology.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin-username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  Experience
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Gurugram, Haryana, India</p>
              <p>
                <a href="mailto:srajal@example.com" className="hover:text-white">
                  srajal@example.com
                </a>
              </p>
              <p>
                <a href="tel:+911234567890" className="hover:text-white">
                  +91 123 456 7890
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Srajal Agrawal. All rights reserved.
          </p>
          
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="p-3 bg-gray-800 text-white rounded-full mt-4 md:mt-0 hover:bg-primary transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
