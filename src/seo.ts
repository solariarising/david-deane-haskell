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
      "They control us all. Only truth will stop them. We all pay the price. Start with Tommytune and Emergence — two free stories to step into these worlds.",
    type: "website",
    image: SOCIAL_IMAGES.default,
    imageAlt: "The Solarian Deep by David Deane Haskell",
    pageType: "WebPage",
  },
  [AI_SUMMARY_PATH]: {
    title: `AI Summary | ${SITE_NAME}`,
    description:
      "Machine-readable overview of David Deane Haskell, his books, core themes, and the best starting points across fiction, nonfiction, and free stories.",
    type: "website",
    image: SOCIAL_IMAGES.about,
    imageAlt: "Portrait of David Deane Haskell",
    pageType: "WebPage",
  },
  "/about": {
    title: `About ${SITE_NAME} | Fiction, nonfiction, and the work behind them`,
    description:
      "David Deane Haskell writes speculative fiction, psychological thrillers, memoir, and recovery-centered nonfiction about control, truth, shame, healing, and survival under pressure.",
    type: "profile",
    image: SOCIAL_IMAGES.about,
    imageAlt: "Portrait of David Deane Haskell",
    pageType: "AboutPage",
  },
  "/books": {
    title: `Books by ${SITE_NAME} | Fiction, nonfiction, and free entry points`,
    description:
      "Explore David Deane Haskell's books across speculative fiction, psychological suspense, and recovery-centered nonfiction. Start with The Solarian Deep, Wounded Angels, or the free route through Tommytune and Emergence.",
    type: "website",
    image: SOCIAL_IMAGES.books,
    imageAlt: "Books by David Deane Haskell",
    pageType: "CollectionPage",
  },
  "/contact": {
    title: `Contact ${SITE_NAME} | Interviews, speaking, and reader follow-up`,
    description:
      "Contact David Deane Haskell for interviews, podcasts, speaking, workshops, collaborations, and reader follow-up across fiction, nonfiction, and healing-centered work.",
    type: "profile",
    image: SOCIAL_IMAGES.contact,
    imageAlt: "Portrait of David Deane Haskell",
    pageType: "ContactPage",
  },
  "/vault": {
    title: `Free Stories | Tommytune and Emergence by ${SITE_NAME}`,
    description:
      "Start with Tommytune and Emergence — two free stories that open the door into David Deane Haskell's fiction worlds of control, revelation, and consequence.",
    type: "website",
    image: SOCIAL_IMAGES.vault,
    imageAlt: "Tommytune and Emergence by David Deane Haskell",
    pageType: "CollectionPage",
  },
  "/404": {
    title: `Page Not Found | ${SITE_NAME}`,
    description: "The requested page could not be found on the David Deane Haskell website.",
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
  if (!pathname || pathname === "/") {
    return "/";
  }

  const withoutQuery = pathname.split("?")[0].split("#")[0];
  return withoutQuery.endsWith("/") ? withoutQuery.slice(0, -1) : withoutQuery;
};

export const toAbsoluteUrl = (pathname: string) => {
  if (pathname.startsWith("http://") || pathname.startsWith("https://")) {
    return pathname;
  }

  return `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
};

export const getSeoForPath = (pathname: string) => {
  const normalizedPath = normalizePath(pathname);
  const baseSeo = ROUTE_SEO[normalizedPath] ?? ROUTE_SEO["/404"];
  const canonicalPath = normalizedPath in ROUTE_SEO ? normalizedPath : "/404";

  return {
    ...baseSeo,
    canonicalPath,
    canonicalUrl: canonicalPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${canonicalPath}`,
    imageUrl: toAbsoluteUrl(baseSeo.image),
    robots: baseSeo.robots ?? DEFAULT_ROBOTS,
  };
};

const escapeHtml = (value: string) =>
  value
    .split("&").join("&amp;")
    .split("<").join("&lt;")
    .split(">").join("&gt;")
    .split('"').join("&quot;")
    .split("'").join("&#39;");

const buildGraph = (pathname: string) => {
  const normalizedPath = normalizePath(pathname);
  const seo = getSeoForPath(normalizedPath);
  const webpageId = `${seo.canonicalUrl}#webpage`;
  const websiteId = `${SITE_URL}/#website`;
  const personId = `${SITE_URL}/#person`;
  const breadcrumbId = `${seo.canonicalUrl}#breadcrumb`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: SITE_NAME,
    givenName: "David",
    additionalName: "Deane",
    familyName: "Haskell",
    url: `${SITE_URL}/`,
    jobTitle: "Author",
    email: SITE_EMAIL,
    description: SITE_DESCRIPTION,
    disambiguatingDescription: SITE_DISAMBIGUATION,
    knowsLanguage: SITE_LANGUAGE,
    sameAs: [EXTERNAL_LINKS.fictionSubstack, EXTERNAL_LINKS.healingSubstack],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANGUAGE,
    publisher: {
      "@id": personId,
    },
  };

  const breadcrumbList =
    normalizedPath !== "/" && normalizedPath in ROUTE_LABELS
      ? {
          "@type": "BreadcrumbList",
          "@id": breadcrumbId,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: ROUTE_LABELS["/"],
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: ROUTE_LABELS[normalizedPath],
              item: seo.canonicalUrl,
            },
          ],
        }
      : null;

  const solarianDeep = {
    "@type": "Book",
    "@id": `${SITE_URL}/books#the-solarian-deep`,
    name: "The Solarian Deep",
    url: EXTERNAL_LINKS.solarianDeepAmazon,
    author: {
      "@id": personId,
    },
    inLanguage: SITE_LANGUAGE,
    genre: ["Science Fiction", "Technothriller"],
  };

  const woundedAngels = {
    "@type": "Book",
    "@id": `${SITE_URL}/books#wounded-angels`,
    name: "Wounded Angels",
    url: EXTERNAL_LINKS.woundedAngels,
    author: {
      "@id": personId,
    },
    inLanguage: SITE_LANGUAGE,
    genre: ["Memoir", "Nonfiction"],
  };

  const tommytune = {
    "@type": "ShortStory",
    "@id": `${SITE_URL}/vault#tommytune`,
    name: "Tommytune",
    url: EXTERNAL_LINKS.freeFiction,
    author: {
      "@id": personId,
    },
    inLanguage: SITE_LANGUAGE,
    genre: ["Short Story", "Science Fiction"],
    isAccessibleForFree: true,
  };

  const emergence = {
    "@type": "Book",
    "@id": `${SITE_URL}/vault#emergence`,
    name: "Emergence",
    url: EXTERNAL_LINKS.freeFiction,
    author: {
      "@id": personId,
    },
    inLanguage: SITE_LANGUAGE,
    genre: ["Science Fiction"],
    isAccessibleForFree: true,
  };

  const booksList = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/books#book-list`,
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@id": solarianDeep["@id"] } },
      { "@type": "ListItem", position: 2, item: { "@id": woundedAngels["@id"] } },
      { "@type": "ListItem", position: 3, item: { "@id": emergence["@id"] } },
      { "@type": "ListItem", position: 4, item: { "@id": tommytune["@id"] } },
    ],
  };

  const vaultList = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/vault#vault-list`,
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@id": tommytune["@id"] } },
      { "@type": "ListItem", position: 2, item: { "@id": emergence["@id"] } },
    ],
  };

  const mainEntityId =
    normalizedPath === "/about" || normalizedPath === AI_SUMMARY_PATH
      ? personId
      : normalizedPath === "/books"
        ? booksList["@id"]
        : normalizedPath === "/vault"
          ? vaultList["@id"]
          : undefined;

  const webpage = {
    "@type": seo.pageType,
    "@id": webpageId,
    url: seo.canonicalUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": personId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: seo.imageUrl,
    },
    ...(breadcrumbList
      ? {
          breadcrumb: {
            "@id": breadcrumbId,
          },
        }
      : {}),
    ...(mainEntityId
      ? {
          mainEntity: {
            "@id": mainEntityId,
          },
        }
      : {}),
  };

  if (normalizedPath === "/books") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        person,
        website,
        webpage,
        ...(breadcrumbList ? [breadcrumbList] : []),
        booksList,
        solarianDeep,
        woundedAngels,
        emergence,
        tommytune,
      ],
    };
  }

  if (normalizedPath === "/vault") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        person,
        website,
        webpage,
        ...(breadcrumbList ? [breadcrumbList] : []),
        vaultList,
        tommytune,
        emergence,
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      website,
      webpage,
      ...(breadcrumbList ? [breadcrumbList] : []),
      solarianDeep,
      woundedAngels,
    ],
  };
};

export const renderSeoTags = (pathname: string) => {
  const seo = getSeoForPath(pathname);
  const structuredData = JSON.stringify(buildGraph(pathname));

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="author" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta name="robots" content="${escapeHtml(seo.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}" />`,
    `<meta property="og:type" content="${escapeHtml(seo.type)}" />`,
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
    `<script type="application/ld+json" data-route-seo="jsonld">${structuredData.split("</script>").join("<\\/script>")}</script>`,
  ].join("\n    ");
};

export const getStructuredData = (pathname: string) => buildGraph(pathname);
