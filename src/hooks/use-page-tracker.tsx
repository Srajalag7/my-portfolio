
import { useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';

type PageViewData = {
  path: string;
  timestamp: number;
  referrer: string;
  userAgent: string;
};

export const usePageTracker = () => {
  useEffect(() => {
    // Function to track page view
    const trackPageView = () => {
      try {
        // Get current data from localStorage or initialize an empty array
        const existingData = localStorage.getItem(siteConfig.analytics.pageViewsStorageKey);
        const viewsData: PageViewData[] = existingData ? JSON.parse(existingData) : [];
        
        // Create new page view entry
        const newView: PageViewData = {
          path: window.location.pathname,
          timestamp: Date.now(),
          referrer: document.referrer || 'direct',
          userAgent: navigator.userAgent
        };
        
        // Add the new entry and save to localStorage
        viewsData.push(newView);
        localStorage.setItem(siteConfig.analytics.pageViewsStorageKey, JSON.stringify(viewsData));
        
        // Add to window object for easy access
        (window as any).getPageViews = () => {
          const data = localStorage.getItem(siteConfig.analytics.pageViewsStorageKey);
          return data ? JSON.parse(data) : [];
        };
        
        (window as any).getPageViewStats = () => {
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
        };
      } catch (error) {
        // Silent error handling
      }
    };

    // Track the page view
    trackPageView();
  }, []);
};
