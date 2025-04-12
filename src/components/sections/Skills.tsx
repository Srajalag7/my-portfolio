
import React from "react";
import SectionHeader from "../SectionHeader";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  color: string;
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ 
  title, 
  skills, 
  color, 
  icon 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className={`p-4 ${color} text-white`}>
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm font-medium rounded-full my-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <SectionHeader 
          title="Skills & Technologies" 
          subtitle="My technical toolkit and areas of expertise."
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <SkillCategory
            title="Artificial Intelligence & ML"
            color="bg-tech-ai"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            skills={[
              "Generative AI",
              "LangChain",
              "GPT-4",
              "Machine Learning",
              "Deep Learning",
              "Natural Language Processing (NLP)",
              "Artificial Intelligence",
              "Entity Extraction",
              "Speech Processing",
              "Conversational AI",
              "Data Science",
              "Sentiment Analysis",
              "Chatbot Development",
              "Python",
              "NumPy",
              "Pandas"
            ]}
          />
          
          <SkillCategory
            title="Full-Stack Development"
            color="bg-tech-webdev"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            skills={[
              "JavaScript",
              "React",
              "React Hooks",
              "HTML",
              "CSS",
              "PHP",
              "Laravel",
              "Flask",
              "Django",
              "Node.js",
              "Elasticsearch",
              "SQL",
              "Git",
              "Front-End Development",
              "Web Projects",
              "RESTful APIs",
              "Redis"
            ]}
          />
          
          <SkillCategory
            title="Cloud & DevOps"
            color="bg-tech-cloud"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
            skills={[
              "Amazon Web Services (AWS)",
              "Amazon S3",
              "Amazon EKS",
              "Amazon SNS",
              "Kubernetes",
              "Docker",
              "CI/CD",
              "DevOps",
              "Microservices",
              "Cron",
              "Nginx",
              "API Design",
              "System Architecture",
              "Celery"
            ]}
          />
          
          <SkillCategory
            title="Leadership & Domain Knowledge"
            color="bg-tech-ml"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            skills={[
              "Leadership",
              "Team Management",
              "Software Development",
              "New Product Implementations",
              "Quality Assurance",
              "Test Automation",
              "Gherkin",
              "Codeception",
              "Database Queries",
              "Knowledge Discovery",
              "Credit Risk Management",
              "Data Mining"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
