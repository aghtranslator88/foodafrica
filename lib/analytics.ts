/**
 * Globalize Analytics & Tracking Infrastructure
 * Prepares events for Google Analytics 4 (GA4), Google Tag Manager (GTM), and Meta Pixel.
 *
 * Environment variables:
 * NEXT_PUBLIC_GA_ID - Google Analytics Measurement ID (e.g. G-XXXXXXXXXX)
 * NEXT_PUBLIC_GTM_ID - Google Tag Manager Container ID (e.g. GTM-XXXXXXX)
 * NEXT_PUBLIC_META_PIXEL_ID - Meta Pixel ID (e.g. 1234567890)
 */

type AnalyticsEvent =
  | 'page_view'
  | 'cta_click'
  | 'whatsapp_click'
  | 'form_start'
  | 'form_submit'
  | 'support_plan_request'
  | 'phone_click';

interface EventParams {
  category?: string;
  label?: string;
  value?: number | string;
  source_page?: string;
  package_name?: string;
  service_name?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: AnalyticsEvent, params: EventParams = {}) {
  if (typeof window === 'undefined') return;

  const enrichedParams = {
    ...params,
    timestamp: new Date().toISOString(),
    url: window.location.pathname,
  };

  // Google Analytics 4 (gtag)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, enrichedParams);
  }

  // Google Tag Manager (dataLayer)
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...enrichedParams,
    });
  }

  // Meta Pixel (fbq)
  if (typeof window.fbq === 'function') {
    if (eventName === 'form_submit' || eventName === 'support_plan_request') {
      window.fbq('track', 'Lead', enrichedParams);
    } else if (eventName === 'cta_click' || eventName === 'whatsapp_click') {
      window.fbq('trackCustom', eventName, enrichedParams);
    }
  }

  // Dev logger
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] Event: ${eventName}`, enrichedParams);
  }
}
