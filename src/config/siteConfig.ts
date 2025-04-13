
/**
 * Site Configuration
 * 
 * Central configuration for site settings, integrations, and analytics
 */

export const siteConfig = {
  // Site Information
  siteOwner: "Srajal Agrawal",
  contactEmail: "agrawalsrajal2012@gmail.com",
  
  // Supabase Configuration
  supabase: {
    contactTable: "contact_submissions",
    visitsTable: "page_visits",
    columns: {
      name: "name",
      email: "email",
      message: "message",
      createdAt: "created_at"
    }
  },
  
  // Analytics Configuration
  analytics: {
    // LocalStorage key for page view data
    pageViewsStorageKey: "pageViewData",
    
    // Developer console functions
    consoleFunctions: {
      viewStats: "viewSiteStats",
      viewSubmissions: "viewContactSubmissions"
    }
  }
};
