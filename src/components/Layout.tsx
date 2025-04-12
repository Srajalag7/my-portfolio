
import React, { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ThemeProvider } from "@/hooks/use-theme";
import { usePageTracker } from "@/hooks/use-page-tracker";
import { siteConfig } from "@/config/siteConfig";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Track page views
  usePageTracker();
  
  useEffect(() => {
    // Add developer helper functions to window object
    (window as any)[siteConfig.analytics.consoleFunctions.viewStats] = () => {
      const pageViews = (window as any).getPageViewStats();
      return `📊 Portfolio has ${pageViews.totalViews} total views from approximately ${pageViews.uniqueVisitors} unique visitors`;
    };
    
    // Create a function to get contact form submissions (from Supabase)
    (window as any)[siteConfig.analytics.consoleFunctions.viewSubmissions] = () => {
      return `To view contact form submissions, check your Supabase dashboard "${siteConfig.supabase.contactTable}" table`;
    };
  }, []);
  
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
