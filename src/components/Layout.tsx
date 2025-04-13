
import React, { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ThemeProvider } from "@/hooks/use-theme";
import { usePageTracker } from "@/hooks/use-page-tracker";
import { siteConfig } from "@/config/siteConfig";
import { supabase } from "@/integrations/supabase/client";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Track page views
  usePageTracker();
  
  useEffect(() => {
    // Add developer helper functions to window object
    (window as any)[siteConfig.analytics.consoleFunctions.viewStats] = async () => {
      try {
        const pageViews = await (window as any).getPageViewStats();
        return `📊 Portfolio has ${pageViews.totalViews} total views from approximately ${pageViews.uniqueVisitors} unique visitors`;
      } catch (error) {
        console.error("Error getting stats:", error);
        return "Error getting stats. Check console for details.";
      }
    };
    
    // Create a function to get contact form submissions (from Supabase)
    (window as any)[siteConfig.analytics.consoleFunctions.viewSubmissions] = async () => {
      try {
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          const submission = data[0];
          return `📨 You have ${data.length} contact submissions. Latest from ${submission.name} (${submission.email}) on ${new Date(submission.created_at).toLocaleString()}`;
        } else {
          return "No contact form submissions yet.";
        }
      } catch (error) {
        console.error("Error getting submissions:", error);
        return `To view contact form submissions, check your Supabase dashboard "${siteConfig.supabase.contactTable}" table`;
      }
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
