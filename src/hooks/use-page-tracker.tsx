
import { useEffect } from 'react';

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
        const existingData = localStorage.getItem('pageViewData');
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
        localStorage.setItem('pageViewData', JSON.stringify(viewsData));
        
        // Log for debugging
        console.log('Page view tracked:', newView);
        console.log('Total views:', viewsData.length);
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    // Track the page view
    trackPageView();
    
    // Optional: You could set up an interval to periodically send this data to a backend
    // const interval = setInterval(() => sendDataToBackend(), 60000);
    // return () => clearInterval(interval);
  }, []);
};
