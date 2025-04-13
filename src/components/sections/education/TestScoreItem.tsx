
import React from "react";
import { Award } from "lucide-react";

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

export default TestScoreItem;
