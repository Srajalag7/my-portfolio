
import { useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { supabase } from "@/integrations/supabase/client";

type PageViewData = {
  path: string;
  timestamp: number;
  referrer: string;
  userAgent: string;
};

export const usePageTracker = () => {
  useEffect(() => {
    // Function to track page view
    const trackPageView = async () => {
      try {
        // Get data to track
        const path = window.location.pathname;
        const referrer = document.referrer || 'direct';
        const userAgent = navigator.userAgent;
        
        // Save to Supabase in production
        // For local development environment, fallback to localStorage
        try {
          // Try to save to Supabase
          const { error } = await supabase
            .from(siteConfig.supabase.visitsTable)
            .insert({
              path,
              referrer,
              user_agent: userAgent
            });
          
          if (error) {
            throw error;
          }
        } catch (supabaseError) {
          // Fallback to localStorage if Supabase fails
          console.error("Error saving to Supabase:", supabaseError);
          
          // Get current data from localStorage or initialize an empty array
          const existingData = localStorage.getItem(siteConfig.analytics.pageViewsStorageKey);
          const viewsData: PageViewData[] = existingData ? JSON.parse(existingData) : [];
          
          // Create new page view entry
          const newView: PageViewData = {
            path,
            timestamp: Date.now(),
            referrer,
            userAgent
          };
          
          // Add the new entry and save to localStorage
          viewsData.push(newView);
          localStorage.setItem(siteConfig.analytics.pageViewsStorageKey, JSON.stringify(viewsData));
        }
        
        // Add to window object for easy access
        (window as any).getPageViews = () => {
          return supabase.from(siteConfig.supabase.visitsTable).select('*');
        };
        
        (window as any).getPageViewStats = async () => {
          try {
            const { data, error } = await supabase.from(siteConfig.supabase.visitsTable).select('*');
            
            if (error) throw error;
            
            if (!data || data.length === 0) return { totalViews: 0, pathBreakdown: {} };
            
            const pathBreakdown: Record<string, number> = {};
            data.forEach((view: any) => {
              pathBreakdown[view.path] = (pathBreakdown[view.path] || 0) + 1;
            });
            
            return {
              totalViews: data.length,
              uniqueVisitors: new Set(data.map((v: any) => v.user_agent)).size,
              pathBreakdown,
              referrerBreakdown: data.reduce((acc: Record<string, number>, view: any) => {
                acc[view.referrer] = (acc[view.referrer] || 0) + 1;
                return acc;
              }, {})
            };
          } catch (error) {
            console.error("Error getting stats from Supabase:", error);
            
            // Fallback to localStorage
            const data = localStorage.getItem(siteConfig.analytics.pageViewsStorageKey);
            const views = data ? JSON.parse(data) as PageViewData[] : [];
            
            if (views.length === 0) return { totalViews: 0, pathBreakdown: {} };
            
            const pathBreakdown: Record<string, number> = {};
            views.forEach(view => {
              pathBreakdown[view.path] = (pathBreakdown[view.path] || 0) + 1;
            });
            
            return {
              totalViews: views.length,
              uniqueVisitors: new Set(views.map(v => v.userAgent)).size,
              pathBreakdown,
              referrerBreakdown: views.reduce((acc, view) => {
                acc[view.referrer] = (acc[view.referrer] || 0) + 1;
                return acc;
              }, {} as Record<string, number>)
            };
          }
        };
      } catch (error) {
        // Silent error handling for production
        console.error("Error tracking page view:", error);
      }
    };

    // Track the page view
    trackPageView();
  }, []);
};
