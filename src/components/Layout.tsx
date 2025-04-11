
import React, { useEffect } from "react";
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
  
  useEffect(() => {
    // Add developer helper functions to window object
    (window as any).viewSiteStats = () => {
      const pageViews = (window as any).getPageViewStats();
      console.group('Site Statistics:');
      console.log('Total Page Views:', pageViews.totalViews);
      console.log('Unique Visitors (estimate):', pageViews.uniqueVisitors);
      console.log('Page Breakdown:', pageViews.pathBreakdown);
      console.log('Referrer Breakdown:', pageViews.referrerBreakdown);
      console.groupEnd();
      
      return `📊 Portfolio has ${pageViews.totalViews} total views from approximately ${pageViews.uniqueVisitors} unique visitors`;
    };
    
    // Create a function to get contact form submissions (from Supabase)
    (window as any).viewContactSubmissions = () => {
      console.log('To view contact form submissions:');
      console.log('1. Log into your Supabase dashboard');
      console.log('2. Go to the "Table Editor" and check the "contact_submissions" table');
      console.log('3. You can see all submissions with details like name, email, message, etc.');
      
      return 'To view contact form submissions, check your Supabase dashboard "contact_submissions" table';
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
