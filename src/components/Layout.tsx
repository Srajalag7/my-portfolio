
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
    
    // Create a function to get contact form submissions (if you were using Supabase)
    (window as any).viewContactSubmissions = () => {
      console.log('To view contact form submissions, you need to:');
      console.log('1. Set up Supabase integration (click the Supabase button)');
      console.log('2. Log into your Supabase dashboard');
      console.log('3. Go to the "Table Editor" and look for the "contact_submissions" table');
      
      return 'To view contact form submissions, connect and check your Supabase dashboard';
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
