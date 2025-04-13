
import React from "react";
import SectionHeader from "../SectionHeader";
import EducationItem from "./education/EducationItem";
import TestScoreItem from "./education/TestScoreItem";
import CertificationItem from "./education/CertificationItem";

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
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Education</h3>
              {educationItems.map((item, index) => (
                <EducationItem key={index} {...item} />
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Test Scores</h3>
              <div className="grid grid-cols-1 gap-4">
                {testScores.map((score, index) => (
                  <TestScoreItem key={index} {...score} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <CertificationItem key={index} {...cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
