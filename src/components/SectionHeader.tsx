
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = "left" 
}) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-primary rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
