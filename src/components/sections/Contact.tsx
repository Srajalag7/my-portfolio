
import React from "react";
import SectionHeader from "../SectionHeader";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Interested in working together? Feel free to reach out to me using the form below."
        />
        
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-1">
            <ContactInfo />
          </div>
          
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
