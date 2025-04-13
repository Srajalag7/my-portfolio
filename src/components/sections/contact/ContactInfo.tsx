
import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/config/personalInfo";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
        <p className="text-muted-foreground">
          Feel free to reach out to me for collaboration, job opportunities, or just to say hello!
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 text-primary rounded-lg">
            <Mail size={20} />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary">
              {personalInfo.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 text-primary rounded-lg">
            <Phone size={20} />
          </div>
          <div>
            <h4 className="font-medium">Phone</h4>
            <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-primary">
              {personalInfo.phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 text-primary rounded-lg">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="font-medium">Location</h4>
            <p className="text-muted-foreground">
              {personalInfo.location}
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
        <div className="flex items-center gap-4">
          <a 
            href={personalInfo.socialLinks.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white rounded-full transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white rounded-full transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
