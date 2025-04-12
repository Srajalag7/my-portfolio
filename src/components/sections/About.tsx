
import React from "react";
import SectionHeader from "../SectionHeader";
import { Award, Briefcase, GraduationCap, Code, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <SectionHeader 
          title="About Me" 
          subtitle="Software Development Engineer with expertise in Generative AI applications and enterprise-scale systems."
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              As an IIT Kanpur graduate, I combine strong engineering foundations with cutting-edge AI implementation 
              skills to deliver innovative solutions that transform business operations.
            </p>
            
            <p className="text-lg">
              I've pioneered multiple AI-driven engineering projects that demonstrate my technical versatility and 
              business impact. At Vmock, I architected a dual-agent resume generation system that creates dynamic 
              resumes through natural conversation, and engineered an enterprise-grade resume parsing system 
              processing 10,000+ resumes monthly with 99.9% accuracy.
            </p>
            
            <p className="text-lg">
              My backend engineering expertise includes designing scalable architecture layers with Laravel, 
              implementing real-time ElasticSearch synchronization processing 150K+ daily records, and building 
              high-performance analytics engines delivering sub-100ms complex queries across 5M+ student records.
            </p>
            
            <p className="text-lg">
              I'm passionate about building intelligent systems that bridge human-computer interaction and am seeking 
              opportunities to lead GenAI initiatives in enterprise environments.
            </p>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Professional Highlights</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">AI Engineering Specialist</h4>
                    <p className="text-muted-foreground">Expertise in LLMs, NLP, and building generative AI applications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Code size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Full-Stack Developer</h4>
                    <p className="text-muted-foreground">Building scalable, high-performance web applications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">2.5+ Years Experience</h4>
                    <p className="text-muted-foreground">Working with enterprise clients building AI systems</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">IIT Kanpur Graduate</h4>
                    <p className="text-muted-foreground">Bachelor of Technology, Mechanical Engineering</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">JEE Advanced Rank</h4>
                    <p className="text-muted-foreground">Ranked 1470 in one of India's toughest exams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
