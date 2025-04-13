
import React, { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";

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

export default CertificationItem;
