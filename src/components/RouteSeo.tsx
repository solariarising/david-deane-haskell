import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoForPath, getStructuredData } from "@/seo";
import { SITE_LANGUAGE, SITE_NAME } from "@/siteConfig";

const ensureElement = <
  T extends HTMLMetaElement | HTMLLinkElement | HTMLScriptElement
>(
  selector: string,
  factory: () => T,
) => {
  const existing = document.head.querySelector<T>(selector);
  if (existing) {
    return existing;
  }

  const element = factory();
  document.head.appendChild(element);
  return element;
};

const upsertMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  const element = ensureElement(selector, () => {
    const meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    return meta;
  });

  element.setAttribute("content", content);
};

const RouteSeo = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(location.pathname);
    document.title = seo.title;
    document.documentElement.lang = SITE_LANGUAGE;

    upsertMeta('meta[name="description"]', "name", "description", seo.description);
    upsertMeta('meta[name="author"]', "name", "author", SITE_NAME);
    upsertMeta('meta[name="robots"]', "name", "robots", seo.robots);
    upsertMeta('meta[property="og:type"]', "property", "og:type", seo.type);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    upsertMeta('meta[property="og:url"]', "property", "og:url", seo.canonicalUrl);
    upsertMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    upsertMeta('meta[property="og:image"]', "property", "og:image", seo.imageUrl);
    upsertMeta('meta[property="og:image:alt"]', "property", "og:image:alt", seo.imageAlt);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", seo.imageUrl);
    upsertMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", seo.imageAlt);

    const canonical = ensureElement('link[rel="canonical"]', () => {
      const link = document.createElement("link");
      link.rel = "canonical";
      return link;
    });
    canonical.setAttribute("href", seo.canonicalUrl);

    const structuredData = ensureElement('script[data-route-seo="jsonld"]', () => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.routeSeo = "jsonld";
      return script;
    });

    structuredData.textContent = JSON.stringify(getStructuredData(location.pathname));
  }, [location.pathname]);

  return null;
};

export default RouteSeo;
