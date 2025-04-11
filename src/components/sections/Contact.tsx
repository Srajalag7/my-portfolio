
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { personalInfo } from "@/config/personalInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would be sent to a Supabase function
      console.log("Contact form data to send:", formData);
      
      // Simulate sending data to Supabase
      setTimeout(() => {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Interested in working together? Feel free to reach out to me using the form below."
          align="center"
        />
        
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-1 space-y-8">
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
          
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Job Opportunity"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
