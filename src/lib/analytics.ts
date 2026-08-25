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

type MediaPlayPayload = {
  mediaId: string;
  mediaTitle: string;
  mediaLocation: string;
  sourceUrl: string;
};

type AttributionContext = {
  attribution_source: string;
  attribution_medium: string;
  attribution_campaign: string;
  attribution_content: string;
  attribution_referrer: string;
  attribution_landing_path: string;
};

const ATTRIBUTION_STORAGE_KEY = "ddh_attribution_v1";

const canTrack = () =>
  typeof window !== "undefined" && typeof window.gtag === "function";

const readStoredAttribution = (): AttributionContext | null => {
  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as AttributionContext) : null;
  } catch {
    return null;
  }
};

const getAttributionContext = (): AttributionContext => {
  const query = new URLSearchParams(window.location.search);
  const stored = readStoredAttribution();
  const hasFreshSource = query.has("utm_source") || query.has("ref");

  if (!hasFreshSource && stored) {
    return stored;
  }

  const attribution: AttributionContext = {
    attribution_source:
      query.get("utm_source") ?? query.get("ref") ?? stored?.attribution_source ?? "direct",
    attribution_medium:
      query.get("utm_medium") ?? stored?.attribution_medium ?? "none",
    attribution_campaign:
      query.get("utm_campaign") ?? stored?.attribution_campaign ?? "none",
    attribution_content:
      query.get("utm_content") ?? stored?.attribution_content ?? "none",
    attribution_referrer:
      document.referrer || stored?.attribution_referrer || "direct",
    attribution_landing_path:
      stored?.attribution_landing_path || `${window.location.pathname}${window.location.search}`,
  };

  try {
    window.sessionStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(attribution),
    );
  } catch {
    // Analytics must never interfere with reader navigation.
  }

  return attribution;
};

const trackEvent = (eventName: string, params: Record<string, unknown>) => {
  if (!canTrack()) {
    return;
  }

  window.gtag?.("event", eventName, {
    transport_type: "beacon",
    ...getAttributionContext(),
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
    ...getAttributionContext(),
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

export const trackMediaPlay = ({
  mediaId,
  mediaTitle,
  mediaLocation,
  sourceUrl,
}: MediaPlayPayload) => {
  trackEvent("ddh_media_play", {
    media_id: mediaId,
    media_title: mediaTitle,
    media_location: mediaLocation,
    source_url: sourceUrl,
  });
};
