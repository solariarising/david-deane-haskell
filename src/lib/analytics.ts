declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type CtaClickPayload = {
  ctaId: string;
  ctaLabel: string;
  ctaLocation: string;
  destinationUrl: string;
  destinationKind: "internal" | "external";
};

type PageViewPayload = {
  pagePath: string;
  pageTitle?: string;
};

type PopupEventPayload = {
  popupId: string;
  popupLocation: string;
  action: "shown" | "dismissed" | "signup_click";
  destinationUrl?: string;
};

const canTrack = () =>
  typeof window !== "undefined" && typeof window.gtag === "function";

const trackEvent = (eventName: string, params: Record<string, unknown>) => {
  if (!canTrack()) {
    return;
  }

  window.gtag?.("event", eventName, {
    transport_type: "beacon",
    ...params,
  });
};

export const trackPageView = ({ pagePath, pageTitle }: PageViewPayload) => {
  if (!canTrack()) {
    return;
  }

  window.gtag?.("event", "page_view", {
    page_path: pagePath,
    page_title: pageTitle ?? document.title,
    page_location: window.location.href,
    transport_type: "beacon",
  });
};

export const trackCtaClick = ({
  ctaId,
  ctaLabel,
  ctaLocation,
  destinationUrl,
  destinationKind,
}: CtaClickPayload) => {
  trackEvent("ddh_cta_click", {
    cta_id: ctaId,
    cta_label: ctaLabel,
    cta_location: ctaLocation,
    destination_url: destinationUrl,
    destination_kind: destinationKind,
  });
};

export const trackPopupEvent = ({
  popupId,
  popupLocation,
  action,
  destinationUrl,
}: PopupEventPayload) => {
  trackEvent("ddh_popup_event", {
    popup_id: popupId,
    popup_location: popupLocation,
    popup_action: action,
    destination_url: destinationUrl,
  });
};
