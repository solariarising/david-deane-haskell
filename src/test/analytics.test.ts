import { beforeEach, describe, expect, it, vi } from "vitest";
import { trackCtaClick, trackPageView, trackPopupEvent } from "@/lib/analytics";

const setGtag = () => {
  const gtag = vi.fn();
  window.gtag = gtag;
  return gtag;
};

describe("analytics tracking", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    delete window.gtag;
    document.title = "David Deane Haskell";
    window.history.pushState({}, "", "/");
  });

  it("does not throw when Google Analytics is unavailable", () => {
    expect(() => {
      trackPageView({ pagePath: "/books" });
      trackCtaClick({
        ctaId: "books_solarian_read",
        ctaLabel: "READ THE SOLARIAN DEEP",
        ctaLocation: "books_page",
        destinationUrl: "https://www.amazon.com/dp/B0GPN8DBJS",
        destinationKind: "external",
      });
      trackPopupEvent({
        popupId: "free_fiction_vault_popup",
        popupLocation: "global_popup",
        action: "shown",
        destinationUrl: "https://dl.bookfunnel.com/k7osg3nq37",
      });
    }).not.toThrow();
  });

  it("sends manual page views with route and location context", () => {
    const gtag = setGtag();
    document.title = "Books | David Deane Haskell";
    window.history.pushState({}, "", "/books?utm_source=test");

    trackPageView({ pagePath: "/books" });

    expect(gtag).toHaveBeenCalledWith("event", "page_view", {
      page_path: "/books",
      page_title: "Books | David Deane Haskell",
      page_location: window.location.href,
      transport_type: "beacon",
    });
  });

  it("allows explicit page titles to override the document title", () => {
    const gtag = setGtag();

    trackPageView({
      pagePath: "/vault",
      pageTitle: "Free Fiction Vault",
    });

    expect(gtag).toHaveBeenCalledWith(
      "event",
      "page_view",
      expect.objectContaining({
        page_path: "/vault",
        page_title: "Free Fiction Vault",
      }),
    );
  });

  it("sends CTA clicks with destination and handoff fields", () => {
    const gtag = setGtag();

    trackCtaClick({
      ctaId: "popup_get_free_stories",
      ctaLabel: "GET FREE STORIES",
      ctaLocation: "global_popup",
      destinationUrl: "https://dl.bookfunnel.com/k7osg3nq37",
      destinationKind: "external",
    });

    expect(gtag).toHaveBeenCalledWith("event", "ddh_cta_click", {
      transport_type: "beacon",
      cta_id: "popup_get_free_stories",
      cta_label: "GET FREE STORIES",
      cta_location: "global_popup",
      destination_url: "https://dl.bookfunnel.com/k7osg3nq37",
      destination_kind: "external",
    });
  });

  it("sends popup events with the popup action field", () => {
    const gtag = setGtag();

    trackPopupEvent({
      popupId: "free_fiction_vault_popup",
      popupLocation: "global_popup",
      action: "signup_click",
      destinationUrl: "https://dl.bookfunnel.com/k7osg3nq37",
    });

    expect(gtag).toHaveBeenCalledWith("event", "ddh_popup_event", {
      transport_type: "beacon",
      popup_id: "free_fiction_vault_popup",
      popup_location: "global_popup",
      popup_action: "signup_click",
      destination_url: "https://dl.bookfunnel.com/k7osg3nq37",
    });
  });
});
