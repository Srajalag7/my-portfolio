
import React from "react";
import SectionHeader from "../SectionHeader";
import EducationItem from "./education/EducationItem";
import CertificationItem from "./education/CertificationItem";
import TestScoreItem from "./education/TestScoreItem";

const educationData = [
  {
    institution: "University of Waterloo",
    degree: "Bachelor of Computer Science",
    period: "2021 - Present",
    description:
      "Currently pursuing a Bachelor of Computer Science with a focus on software engineering and artificial intelligence. GPA: 3.9/4.0",
  },
  {
    institution: "Harvard University",
    degree: "CS50 - Introduction to Computer Science",
    period: "2020",
    description:
      "Completed Harvard University's CS50, an introductory computer science course, covering topics such as algorithms, data structures, and web development.",
  },
];

const certificationData = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-123456",
    skills: ["AWS", "Cloud Computing", "DevOps"],
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google via Coursera",
    date: "2022",
    credentialId: "GDAPC-789012",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
  },
];

const testScoreData = [
  {
    title: "SAT",
    score: "1580/1600",
    date: "May 2021",
  },
  {
    title: "ACT",
    score: "35/36",
    date: "April 2021",
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="section-container">
        <SectionHeader 
          title="Education & Certifications"
          subtitle="My academic background and professional certifications"
        />
        
        <div className="grid md:grid-cols-5 gap-8 mt-12">
          {/* Education column - 60% width */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl font-bold mb-4">Academic Education</h3>
            {educationData.map((item, index) => (
              <EducationItem
                key={index}
                institution={item.institution}
                degree={item.degree}
                period={item.period}
              />
            ))}
            
            <h3 className="text-xl font-bold mb-4 mt-8">Test Scores</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {testScoreData.map((item, index) => (
                <TestScoreItem
                  key={index}
                  title={item.title}
                  score={item.score} 
                  date={item.date}
                />
              ))}
            </div>
          </div>
          
          {/* Certifications column - 40% width */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            {certificationData.map((cert, index) => (
              <CertificationItem
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                credentialId={cert.credentialId}
                skills={cert.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
