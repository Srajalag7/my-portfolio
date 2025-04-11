
import React from "react";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="p-2"
    >
      {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
    </Toggle>
  );
};

export default ThemeToggle;
