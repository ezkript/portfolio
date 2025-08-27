'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useGoogleAnalytics } from '../../../hooks/useGoogleAnalytics';

export default function PageTracker() {
  const pathname = usePathname();
  const { trackPageView } = useGoogleAnalytics();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname, trackPageView]);

  return null;
}
