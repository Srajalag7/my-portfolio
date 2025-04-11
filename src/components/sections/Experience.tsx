
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { Briefcase, ChevronDown, ChevronUp, Circle } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  skills: string[];
  category: "ai" | "webdev" | "ml" | "leadership" | "backend" | "fullstack";
  subSections?: {
    title: string;
    items: string[];
  }[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  skills,
  category,
  subSections,
}) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const categoryColors = {
    ai: "border-tech-ai",
    webdev: "border-tech-webdev",
    ml: "border-tech-ml",
    leadership: "border-tech-cloud",
    backend: "border-tech-webdev",
    fullstack: "border-tech-webdev"
  };

  const categoryNames = {
    ai: "AI Engineering",
    webdev: "Web Development",
    ml: "Machine Learning",
    leadership: "Leadership",
    backend: "Backend Engineering",
    fullstack: "Full Stack Engineering"
  };

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 8);
  const hiddenSkillsCount = skills.length - 8;

  return (
    <div className={`relative pl-8 pb-12 border-l-2 ${categoryColors[category]}`}>
      <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 ${categoryColors[category]}`}></div>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{period}</p>
            </div>
            <p className="text-lg font-medium text-primary">{company}{location ? ` | ${location}` : ""}</p>
          </div>
          <div className="hidden md:block">
            <span className={`tech-tag ${
              category === "ai" ? "tech-tag-ai" : 
              category === "webdev" ? "tech-tag-webdev" : 
              category === "ml" ? "tech-tag-ml" : 
              category === "backend" ? "tech-tag-webdev" :
              category === "fullstack" ? "tech-tag-webdev" :
              "tech-tag-cloud"
            }`}>
              {categoryNames[category]}
            </span>
          </div>
        </div>
        
        {subSections ? (
          <div className="space-y-6">
            {subSections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                {section.title && <h4 className="font-semibold">{section.title}</h4>}
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Circle className="min-w-[8px] h-2 mt-2 mr-3 text-primary fill-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {description.map((item, index) => (
              <li key={index} className="flex items-start">
                <Circle className="min-w-[8px] h-2 mt-2 mr-3 text-primary fill-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex flex-wrap gap-2 pt-2">
          {visibleSkills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-full">
              {skill}
            </span>
          ))}
          {skills.length > 8 && (
            <button 
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 text-xs font-medium rounded-full flex items-center gap-1 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors cursor-pointer"
            >
              {showAllSkills ? (
                <>
                  <ChevronUp size={14} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={14} />
                  +{hiddenSkillsCount} more
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Resume ChatBot | SDE-II",
      company: "VMock India Pvt Ltd",
      location: "Gurugram, India",
      period: "Jan 2025 - Mar 2025",
      description: [],
      skills: ["Generative AI", "LangChain", "GPT-4", "Flask", "Kubernetes", "Python", "Leadership", "Deep Learning", "Machine Learning", "NLP", "AWS", "Data Science", "Artificial Intelligence", "Entity Extraction", "Speech Processing", "DevOps"],
      category: "ai",
      subSections: [
        {
          title: "",
          items: [
            "Architected and implemented a dual-agent resume generation system, creating interactive chatbot that dynamically builds resumes from natural conversation",
            "Developed a multi-modal resume generation pipeline integrating Whisper for speech-to-text conversion, for seamless audio input using LangChain & Claude",
            "Engineered an agentic framework where two specialized AI agents interact with each other to generate contextual questions & extract structured entities",
            "Implemented intelligent resume parsing functionality to extract existing resume content into structured data, for AI-guided profile enhancement conversations"
          ]
        }
      ]
    },
    {
      title: "GenAI Resume Parser | SDE-II",
      company: "VMock India Pvt Ltd",
      location: "Gurugram, India",
      period: "Jun 2024 - Dec 2024",
      description: [],
      skills: ["Generative AI", "Leadership", "LangChain", "Flask", "Artificial Intelligence", "Python", "AWS", "Deep Learning", "Machine Learning", "Git", "Kubernetes", "NLP", "Redis", "Software Development", "Celery", "Entity Extraction", "DevOps"],
      category: "ai",
      subSections: [
        {
          title: "",
          items: [
            "Engineered enterprise-grade resume parsing system using GPT-4o & LangChain, expanding entity extraction to 25 categories, processing 10k+ resumes monthly",
            "Developed sophisticated line-by-line entity mapping system integrating proprietary parsing capabilities, achieving 99.9% source traceability across resumes",
            "Deployed asynchronous processing pipeline on Flask for parallel entity extraction with Pydantic validation, reducing parse time from 25s to 10s for Disney",
            "Orchestrated fine-tuning of GPT-4o mini model reducing inference costs by 65% while maintaining 97% accuracy, resulting in 2.5x faster processing speed"
          ]
        }
      ]
    },
    {
      title: "Admin Dashboard | SDE-I",
      company: "VMock India Pvt Ltd",
      location: "Gurugram, India",
      period: "Jun 2023 - May 2024",
      description: [],
      skills: ["Elasticsearch", "Laravel", "React Hooks", "PHP", "Software Development", "Amazon S3", "AWS", "Git", "JavaScript", "HTML", "Kubernetes", "Leadership", "Database Queries", "Redis", "Databases", "Node.js", "Amazon SNS", "Cron", "Web Projects", "Amazon EKS", "Front-End Development", "DevOps", "Microservices", "SQL", "React.js"],
      category: "fullstack",
      subSections: [
        {
          title: "Backend",
          items: [
            "Architected and implemented real-time ElasticSearch synchronization service processing 150K+ student data daily, reducing data retrieval latency by 85%",
            "Designed scalable architecture abstraction layer using PHP Laravel framework, facilitating seamless new product integration and enabling 3x platform growth",
            "Engineered SNS listeners and cron jobs to synchronize student interactions across multiple products, achieving 99.9% data accuracy and reliability",
            "Implemented high-performance analytics engine using ElasticSearch aggregations, delivering sub-100ms complex queries across 5M+ student records"
          ]
        },
        {
          title: "Frontend",
          items: [
            "Developed React analytics dashboard with Highcharts for real-time metrics visualization across products, providing comprehensive performance monitoring",
            "Architected dynamic filtering system using React hooks supporting 20+ filters for student cohort management, cutting administrative workflow time by 65%",
            "Engineered responsive student profile interface with performance tracking, delivering instant engagement insights and data reducing analysis time by 80%"
          ]
        }
      ]
    },
    {
      title: "QA Automation Platform | SDE-I",
      company: "VMock India Pvt Ltd",
      location: "Gurugram, India",
      period: "Dec 2022 - May 2023",
      description: [],
      skills: ["Codeception", "CI/CD", "QA Automation", "PHP", "Amazon S3", "AWS", "Git", "Quality Assurance", "Kubernetes", "Leadership", "Test Automation", "Software Development", "Gherkin", "Amazon EKS", "DevOps", "Microservices", "SQL"],
      category: "fullstack",
      subSections: [
        {
          title: "",
          items: [
            "Standardized QA processes across teams, resulting in fewer production bugs, reducing inter-team handoff delays & reducing QA headcount costs by 20%",
            "Architected and implemented end-to-end API validation infrastructure using Codeception framework and Gherkin BDD, cutting release cycle time by 30%",
            "Implemented automated CI/CD workflow with real-time Slack alerts, eliminating 200+ hours of manual testing monthly and reducing QA workload by 35%"
          ]
        }
      ]
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
