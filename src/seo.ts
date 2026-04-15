import {
  AI_SUMMARY_PATH,
  EXTERNAL_LINKS,
  SITE_DESCRIPTION,
  SITE_DISAMBIGUATION,
  SITE_EMAIL,
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGES,
} from "./siteConfig";

type SeoConfig = {
  title: string;
  description: string;
  type: "website" | "profile";
  image: string;
  imageAlt: string;
  pageType: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
  robots?: string;
};

const ROUTE_SEO: Record<string, SeoConfig> = {
  "/": {
    title: `${SITE_NAME} | Stories of control, truth, and consequence`,
    description:
      "Speculative fiction and nonfiction about control, hidden truth, and the cost of seeing clearly.",
    type: "website",
    image: SOCIAL_IMAGES.default,
    imageAlt: "The Solarian Deep by David Deane Haskell",
    pageType: "WebPage",
  },

  [AI_SUMMARY_PATH]: {
    title: `AI Summary | ${SITE_NAME}`,
    description:
      "A structured overview of David Deane Haskell’s work, themes, and entry points across fiction, nonfiction, and free stories.",
    type: "website",
    image: SOCIAL_IMAGES.about,
    imageAlt: "Portrait of David Deane Haskell",
    pageType: "WebPage",
  },

  "/about": {
    title: `About ${SITE_NAME} | Writing about control, truth, and transformation`,
    description:
      "David Deane Haskell writes speculative fiction, psychological thrillers, memoir, and recovery-centered nonfiction exploring control, truth, trauma, and the process of becoming whole.",
    type: "profile",
    image: SOCIAL_IMAGES.about,
    imageAlt: "Portrait of David Deane Haskell",
    pageType: "AboutPage",
  },

  "/books": {
    title: `Books by ${SITE_NAME} | Fiction, nonfiction, and entry points`,
    description:
      "Explore books by David Deane Haskell across speculative fiction, psychological suspense, and recovery-centered nonfiction—stories shaped by control, revelation, and consequence.",
    type: "website",
    image: SOCIAL_IMAGES.books,
    imageAlt: "Books by David Deane Haskell",
    pageType: "CollectionPage",
  },

  "/contact": {
    title: `Contact ${SITE_NAME} | Interviews, speaking, and collaboration`,
    description:
      "Contact David Deane Haskell for interviews, podcasts, speaking, workshops, and collaborations across fiction, nonfiction, and recovery-centered work.",
    type: "profile",
    image: SOCIAL_IMAGES.contact,
    imageAlt: "Portrait of David Deane Haskell",
    pageType: "ContactPage",
  },

  "/vault": {
    title: `Free Stories | Tommytune and Emergence by ${SITE_NAME}`,
    description:
      "Two free entry points into David Deane Haskell’s fiction—stories of control, hidden truth, and what it costs to see clearly.",
    type: "website",
    image: SOCIAL_IMAGES.vault,
    imageAlt: "Tommytune and Emergence by David Deane Haskell",
    pageType: "CollectionPage",
  },

  "/404": {
    title: `Page Not Found | ${SITE_NAME}`,
    description: "The requested page could not be found.",
    type: "website",
    image: SOCIAL_IMAGES.default,
    imageAlt: "The Solarian Deep by David Deane Haskell",
    pageType: "WebPage",
    robots: "noindex,follow",
  },
};

const DEFAULT_ROBOTS = "index,follow,max-image-preview:large";

const ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  [AI_SUMMARY_PATH]: "AI Summary",
  "/about": "About",
  "/books": "Books",
  "/contact": "Contact",
  "/vault": "Free Fiction Vault",
};

const normalizePath = (pathname: string) => {
  if (!pathname || pathname === "/") return "/";
  const clean = pathname.split("?")[0].split("#")[0];
  return clean.endsWith("/") ? clean.slice(0, -1) : clean;
};

export const toAbsoluteUrl = (path: string) => {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const getSeoForPath = (pathname: string) => {
  const path = normalizePath(pathname);
  const base = ROUTE_SEO[path] ?? ROUTE_SEO["/404"];
  const canonicalPath = path in ROUTE_SEO ? path : "/404";

  return {
    ...base,
    canonicalPath,
    canonicalUrl:
      canonicalPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${canonicalPath}`,
    imageUrl: toAbsoluteUrl(base.image),
    robots: base.robots ?? DEFAULT_ROBOTS,
  };
};

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const renderSeoTags = (pathname: string) => {
  const seo = getSeoForPath(pathname);

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="author" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta name="robots" content="${escapeHtml(seo.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}" />`,

    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:image" content="${escapeHtml(seo.imageUrl)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(seo.imageAlt)}" />`,

    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(seo.imageUrl)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(seo.imageAlt)}" />`,
  ].join("\n");
};