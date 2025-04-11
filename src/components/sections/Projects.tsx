
import React from "react";
import SectionHeader from "../SectionHeader";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  period: string;
  organization: string;
  description: string;
  points: string[];
  skills: string[];
  category: "ai" | "webdev" | "ml";
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  period,
  organization,
  description,
  points,
  skills,
  category,
  github,
  demo,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">
              {period} • {organization}
            </p>
          </div>
          <span className={`tech-tag ${
            category === "ai" ? "tech-tag-ai" : 
            category === "webdev" ? "tech-tag-webdev" : "tech-tag-ml"
          }`}>
            {category === "ai" ? "AI" : 
             category === "webdev" ? "Web Dev" : "ML"}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        {points.length > 0 && (
          <ul className="list-disc list-inside mb-4 space-y-1">
            {points.map((point, idx) => (
              <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm">
                {point}
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          {skills.slice(0, 6).map((skill, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium rounded-full">
              {skill}
            </span>
          ))}
          {skills.length > 6 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium rounded-full">
              +{skills.length - 6} more
            </span>
          )}
        </div>
        
        {(github || demo) && (
          <div className="flex gap-3 mt-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                <Github size={16} className="mr-1" />
                Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink size={16} className="mr-1" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Sentimental Analysis Web App",
      period: "Jan 2022 - Mar 2022",
      organization: "Indian Institute of Technology, Kanpur",
      description: "Developed sentiment analysis web application using Django & JavaScript that processes tweets with NLP to analyze public opinion on user-defined queries.",
      points: [
        "Implemented location-based filtering via Google Geocode API, integrated MySQL, and deployed on AWS EC2 with Nginx for optimized performance"
      ],
      skills: [
        "Natural Language Processing (NLP)", 
        "JavaScript", 
        "Web Projects", 
        "Django", 
        "HTML", 
        "Amazon Web Services (AWS)", 
        "Python", 
        "Machine Learning", 
        "Deep Learning", 
        "Sentiment Analysis", 
        "SQL"
      ],
      category: "ai",
      github: "#",
      demo: "#"
    },
    {
      title: "Corporate Credit Risk Assessment",
      period: "May 2021 - Jul 2021",
      organization: "Indian Institute of Technology, Kanpur",
      description: "Engineered data preprocessing and exploratory analysis on corporate credit rating data, generating actionable insights through visualization techniques.",
      points: [
        "Developed and evaluated 7 machine learning classifiers with cross-validation, achieving 68% accuracy using Random Forest and Decision Tree models"
      ],
      skills: [
        "Knowledge Discovery", 
        "Credit Risk Management", 
        "Python", 
        "Machine Learning", 
        "Deep Learning", 
        "Data Mining"
      ],
      category: "ml",
      github: "#"
    },
    {
      title: "Sound Event Detection",
      period: "Dec 2020 - Jan 2021",
      organization: "Indian Institute of Technology, Kanpur",
      description: "Transformed raw audio data using short-time Fourier transform and Mel filters, achieving 74% accuracy with a hypertuned CNN model for audio classification.",
      points: [
        "Developed hybrid CRNN architecture combining convolutional and recurrent neural networks for advanced audio event detection with 61% accuracy"
      ],
      skills: [
        "NumPy", 
        "Speech Processing", 
        "Pandas", 
        "Convolutional Neural Networks (CNN)", 
        "Python", 
        "Machine Learning", 
        "Deep Learning"
      ],
      category: "ml",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="bg-secondary/30">
      <div className="section-container">
        <SectionHeader 
          title="Projects" 
          subtitle="A selection of my technical projects showcasing my skills in AI, machine learning, and web development."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
