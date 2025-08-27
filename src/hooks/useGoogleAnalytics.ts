'use client';

import { 
  shouldTrackAnalytics, 
  isGtagAvailable,
  debugAnalytics 
} from '@/utils/analytics';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const useGoogleAnalytics = () => {
  const trackPageView = (url: string) => {
    if (!shouldTrackAnalytics() || !isGtagAvailable()) {
      debugAnalytics('page_view', { page_path: url });
      return;
    }

    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    });
  };

  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    const parameters = {
      event_category: category,
      event_label: label,
      value: value,
    };

    if (!shouldTrackAnalytics() || !isGtagAvailable()) {
      debugAnalytics(action, parameters);
      return;
    }

    window.gtag('event', action, parameters);
  };

  const trackCustomEvent = (eventName: string, parameters: Record<string, unknown>) => {
    if (!shouldTrackAnalytics() || !isGtagAvailable()) {
      debugAnalytics(eventName, parameters);
      return;
    }

    window.gtag('event', eventName, parameters);
  };

  return {
    trackPageView,
    trackEvent,
    trackCustomEvent,
  };
};
