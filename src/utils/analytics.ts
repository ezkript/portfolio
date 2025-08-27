
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const isGAConfigured = (): boolean => {
  return typeof GA_TRACKING_ID === 'string' && GA_TRACKING_ID.startsWith('G-');
};

export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const shouldTrackAnalytics = (): boolean => {
  return isGAConfigured() && !isDevelopment();
};

export const ANALYTICS_EVENTS = {
  NAVIGATION_CLICK: 'navigation_click',
  LANGUAGE_CHANGE: 'language_change',
  FORM_SUBMIT: 'form_submit',
  FORM_SUCCESS: 'form_success',
  FORM_ERROR: 'form_error',
  PROJECT_CLICK: 'project_click',
  FILTER_CHANGE: 'filter_change',
  GALLERY_OPEN: 'gallery_open',
  GALLERY_CLOSE: 'gallery_close',
  DOWNLOAD: 'download',
  DOWNLOAD_ERROR: 'download_error',
  SOCIAL_CLICK: 'social_click',
  CTA_CLICK: 'cta_click',
} as const;

export const ANALYTICS_CATEGORIES = {
  NAVBAR: 'navbar',
  HERO: 'hero',
  CONTACT: 'contact',
  PROJECTS: 'projects',
  CONTENT: 'content',
} as const;

export const formatEventName = (event: string, category: string, label?: string): string => {
  return `${category}_${event}${label ? `_${label}` : ''}`;
};

export const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

export const debugAnalytics = (eventName: string, parameters: Record<string, unknown>): void => {
  if (isDevelopment()) {
    console.log('🔍 Analytics Debug:', {
      event: eventName,
      parameters,
      gaConfigured: isGAConfigured(),
      gtagAvailable: isGtagAvailable(),
    });
  }
};
