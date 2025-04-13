
import React from "react";
import { GraduationCap } from "lucide-react";

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

export default EducationItem;
