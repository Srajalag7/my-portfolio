
import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { personalInfo } from "@/config/personalInfo";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/20 dark:from-primary/10 dark:to-accent/30"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 max-w-xl">
              <p className="text-primary font-medium animate-fade-in">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in animate-delay-100">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 animate-fade-in animate-delay-200">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in animate-delay-300">
                {personalInfo.bioShort}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 animate-fade-in animate-delay-400">
                <a 
                  href="#contact"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
                <a 
                  href={personalInfo.resumeLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
                >
                  Download Resume
                </a>
              </div>
              
              <div className="flex items-center gap-5 pt-4 animate-fade-in animate-delay-500">
                <a 
                  href={personalInfo.socialLinks.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.socialLinks.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl animate-fade-in">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ScrollLink to="about" spy={true} smooth={true} duration={500} className="cursor-pointer">
            <ArrowDown className="text-primary" size={32} />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
