
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ThemeProvider } from "@/hooks/use-theme";
import { usePageTracker } from "@/hooks/use-page-tracker";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Track page views
  usePageTracker();
  
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
