
import React from "react";
import SectionHeader from "../SectionHeader";
import { ArrowUpRight, Briefcase } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  category: "ai" | "webdev" | "ml" | "leadership";
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  skills,
  category,
}) => {
  const categoryColors = {
    ai: "border-tech-ai",
    webdev: "border-tech-webdev",
    ml: "border-tech-ml",
    leadership: "border-tech-cloud",
  };

  return (
    <div className={`relative pl-8 pb-12 border-l-2 ${categoryColors[category]}`}>
      <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 ${categoryColors[category]}`}></div>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-lg font-medium text-primary">{company}</p>
            <p className="text-sm text-muted-foreground">{period}</p>
          </div>
          <div className="hidden md:block">
            <span className={`tech-tag ${
              category === "ai" ? "tech-tag-ai" : 
              category === "webdev" ? "tech-tag-webdev" : 
              category === "ml" ? "tech-tag-ml" : "tech-tag-cloud"
            }`}>
              {category === "ai" ? "AI Engineering" : 
               category === "webdev" ? "Full Stack Development" : 
               category === "ml" ? "Machine Learning" : "Leadership"}
            </span>
          </div>
        </div>
        
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <ArrowUpRight className="min-w-[16px] h-4 mt-1 mr-2 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {skills.slice(0, 8).map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-full">
              {skill}
            </span>
          ))}
          {skills.length > 8 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-full">
              +{skills.length - 8} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Generative AI Engineer",
      company: "VMock",
      period: "Jan 2025 - Present",
      description: [
        "Leading the architecture and implementation of an innovative dual-agent resume generation system that transforms natural conversations into professional resumes.",
        "Engineered an agentic framework where specialized AI agents extract structured resume data from conversational input.",
        "Implemented intelligent resume parsing functionality that transforms existing resumes into structured data.",
        "Developed speech-to-text integration using Whisper, LangChain, and Claude for resume generation."
      ],
      skills: ["Generative AI", "LangChain", "GPT-4", "Flask", "Kubernetes", "Python", "Leadership", "Deep Learning", "Machine Learning", "NLP", "AWS", "Data Science", "Artificial Intelligence", "Entity Extraction", "Speech Processing", "DevOps"],
      category: "ai"
    },
    {
      title: "Generative AI Engineer",
      company: "VMock",
      period: "Jun 2024 - Dec 2024",
      description: [
        "Spearheaded the development of an enterprise-grade AI resume parsing system processing 10,000+ resumes monthly for major clients including Disney.",
        "Engineered high-performance parsing system using GPT-4o & LangChain, expanding entity extraction to 25 categories with 99.9% accuracy.",
        "Orchestrated model fine-tuning that reduced inference costs by 65% while maintaining 97% accuracy.",
        "Developed asynchronous processing pipeline with Pydantic validation, slashing parse time from 25 seconds to 10 seconds."
      ],
      skills: ["Generative AI", "Leadership", "LangChain", "Flask", "Artificial Intelligence", "Python", "AWS", "Deep Learning", "Machine Learning", "Git", "Kubernetes", "NLP", "Redis", "Software Development", "Celery", "Entity Extraction", "DevOps"],
      category: "ai"
    },
    {
      title: "Full Stack Engineer",
      company: "VMock",
      period: "Jun 2023 - May 2024",
      description: [
        "Led full-stack development of high-performance analytics and administrative systems supporting 5M+ student records, delivering sub-100ms query performance.",
        "Built robust backend services with Laravel/PHP and designed RESTful APIs for seamless frontend-backend communication.",
        "Architected real-time ElasticSearch synchronization service processing 150K+ records daily, reducing data retrieval latency by 85%.",
        "Developed responsive React analytics dashboard with dynamic filtering supporting 20+ filters for comprehensive student cohort management.",
        "Engineered abstraction layer using PHP Laravel that facilitated 3x platform growth through seamless product integration."
      ],
      skills: ["Elasticsearch", "Laravel", "React Hooks", "PHP", "Software Development", "Amazon S3", "AWS", "Git", "JavaScript", "HTML", "Kubernetes", "Leadership", "Database Queries", "Redis", "Databases", "Node.js", "Amazon SNS", "Cron", "Web Projects", "Amazon EKS", "Front-End Development", "DevOps", "Microservices", "SQL", "React.js"],
      category: "webdev"
    },
    {
      title: "QA Automation Engineer",
      company: "VMock",
      period: "Dec 2022 - May 2023",
      description: [
        "Transformed quality assurance processes across multiple teams through end-to-end automation, eliminating 200+ hours of manual testing monthly.",
        "Architected API validation infrastructure using Codeception and Gherkin BDD, cutting release cycle time by 30%.",
        "Implemented automated CI/CD workflow with real-time Slack alerts, reducing QA workload by 35%.",
        "Standardized QA processes across development teams, significantly reducing production bugs and inter-team handoff delays."
      ],
      skills: ["Codeception", "CI/CD", "QA Automation", "PHP", "Amazon S3", "AWS", "Git", "Quality Assurance", "Kubernetes", "Leadership", "Test Automation", "Software Development", "Gherkin", "Amazon EKS", "DevOps", "Microservices", "SQL"],
      category: "webdev"
    },
    {
      title: "Secretary, Hospitality and Transport",
      company: "Antaragni, IIT Kanpur",
      period: "Jul 2019 - Apr 2020",
      description: [
        "Convinced various clubs of College to participate in one of Asia's biggest cultural festivals, with a footfall of over 1.25 lakhs.",
        "Guided a team of 100+ volunteers and Managed Hospitality and transportation of 1800+ participants during the fest.",
        "Resolved many conflicts between participants, Supervised logistics and Maintenance of Halls for accommodation."
      ],
      skills: ["Leadership", "Event Management", "Team Coordination", "Conflict Resolution", "Logistics Management"],
      category: "leadership"
    }
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <SectionHeader 
          title="Work Experience" 
          subtitle="My professional journey and key contributions over the years."
        />
        
        <div className="mt-12 space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
