// Deine Google Analytics 4 Tracking-ID aus der .env-Datei
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Pageview bei Navigation
export const pageview = (url) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Optional: Custom Events senden
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
