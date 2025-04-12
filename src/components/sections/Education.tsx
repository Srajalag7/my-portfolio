
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { Award, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  skills?: string[];
  logo?: string;
  location?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  degree,
  period,
  skills,
  logo,
  location
}) => {
  return (
    <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
        {logo ? (
          <img 
            src={logo} 
            alt={institution} 
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary rounded-lg">
            <GraduationCap size={32} />
          </div>
        )}
      </div>
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold">{institution}</h3>
        <p className="text-muted-foreground">{location}</p>
        <p className="text-lg font-medium my-1">{degree}</p>
        <p className="text-sm text-muted-foreground">{period}</p>
        
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium rounded-full">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface TestScoreItemProps {
  title: string;
  score: string;
  date: string;
}

const TestScoreItem: React.FC<TestScoreItemProps> = ({
  title,
  score,
  date
}) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
        <Award size={20} />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">
          {score} • {date}
        </p>
      </div>
    </div>
  );
};

interface CertificationItemProps {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  logo?: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({
  title,
  issuer,
  date,
  credentialId,
  skills,
  logo
}) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills ? skills : skills.slice(0, 4);
  const hiddenSkillsCount = skills.length - 4;

  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
          {logo ? (
            <img 
              src={logo} 
              alt={issuer} 
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary rounded-lg">
              <Award size={24} />
            </div>
          )}
        </div>
        
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground">{issuer}</p>
          <p className="text-sm text-muted-foreground mt-1">Issued {date}</p>
          <p className="text-xs text-muted-foreground">Credential ID {credentialId}</p>
          
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {visibleSkills.map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium rounded-full">
                  {skill}
                </span>
              ))}
              {skills.length > 4 && (
                <button 
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className="px-2 py-1 bg-primary/10 text-primary dark:bg-primary/20 text-xs font-medium rounded-full flex items-center gap-1 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors cursor-pointer"
                >
                  {showAllSkills ? (
                    <>
                      <ChevronUp size={12} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={12} />
                      +{hiddenSkillsCount} more
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const educationItems = [
    {
      institution: "Indian Institute of Technology, Kanpur",
      degree: "Bachelor of Technology, Mechanical Engineering",
      period: "2018 - 2022",
      location: "Kanpur, Uttar Pradesh, India"
    },
    {
      institution: "Nalanda Public Hr. Sec. School",
      degree: "High School",
      period: "2015 - 2017",
      location: "Satna, Madhya Pradesh, India"
    },
    {
      institution: "St. Claret School",
      degree: "ICSE | Secondary School",
      period: "2006 - 2015",
      location: "Satna, Madhya Pradesh, India"
    }
  ];

  const testScores = [
    {
      title: "JEE Advanced",
      score: "Score: 1470 Rank",
      date: "Jan 2018"
    },
    {
      title: "JEE Mains",
      score: "Score: 5943 Rank",
      date: "Jan 2018"
    }
  ];

  const certifications = [
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "Jun 2021",
      credentialId: "66FSB6L6HNDD",
      skills: [
        "Natural Language Processing (NLP)", 
        "Machine Learning", 
        "Neural Networks", 
        "Python", 
        "Deep Learning", 
        "Convolutional Neural Networks (CNN)"
      ],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png"
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "GD9RSEPZ578N",
      skills: ["Python"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png"
    },
    {
      title: "Python Data Structures",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "AYWEVFLYXDZZ",
      skills: ["Python"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png"
    }
  ];

  return (
    <section id="education" className="bg-secondary/30">
      <div className="section-container">
        <SectionHeader 
          title="Education & Certifications" 
          subtitle="My academic background and professional certifications."
        />
        
        <div className="mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            {educationItems.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
          
          <div className="space-y-6 mt-12">
            <h3 className="text-2xl font-bold mb-4">Test Scores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testScores.map((score, index) => (
                <TestScoreItem key={index} {...score} />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            </div>
            {certifications.map((cert, index) => (
              <div key={index} className="md:col-span-1">
                <CertificationItem {...cert} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
