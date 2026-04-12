import { EXTERNAL_LINKS, SITE_EMAIL, SITE_NAME, SITE_URL, SOCIAL_IMAGES } from "./siteConfig";

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
    title: `${SITE_NAME} | Fiction and Nonfiction Author`,
    description:
      "David Deane Haskell writes fiction and nonfiction as one author ecosystem: healing the past, understanding the present, and imagining futures worth living in. Start with The Solarian Deep, Wounded Angels, or the Free Fiction Vault.",
    type: "website",
    image: SOCIAL_IMAGES.default,
    imageAlt: "The Solarian Deep by David Deane Haskell",
    pageType: "WebPage",
  },
  "/about": {
    title: `About ${SITE_NAME} | Fiction, Nonfiction, and Author Identity`,
    description:
      "Learn how David Deane Haskell connects healing memoir, mindfulness, personal truth, and visionary fiction under one author identity.",
    type: "profile",
    image: SOCIAL_IMAGES.about,
    imageAlt: "Portrait of David Deane Haskell",
    pageType: "AboutPage",
  },
  "/books": {
    title: `Books by ${SITE_NAME} | The Solarian Deep, Wounded Angels, Tommytune`,
    description:
      "Start with The Solarian Deep for flagship fiction, Wounded Angels for nonfiction, or Tommytune and Emergence for the free entry route into David Deane Haskell's work.",
    type: "website",
    image: SOCIAL_IMAGES.books,
    imageAlt: "The Solarian Deep by David Deane Haskell",
    pageType: "CollectionPage",
  },
  "/contact": {
    title: `Contact ${SITE_NAME} | Interviews, Speaking, and Reader Links`,
    description:
      "Contact David Deane Haskell for interviews, speaking, workshops, collaborations, and reader follow-up across fiction, healing, and the wider author ecosystem.",
    type: "profile",
    image: SOCIAL_IMAGES.contact,
    imageAlt: "Portrait of David Deane Haskell",
    pageType: "ContactPage",
  },
  "/vault": {
    title: `Free Fiction Vault | Tommytune and Emergence by ${SITE_NAME}`,
    description:
      "Read Tommytune and Emergence free, then continue into David Deane Haskell's fiction, books, and Substack reader path.",
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
  const seo = getSeoForPath(pathname);
  const webpageId = `${seo.canonicalUrl}#webpage`;
  const websiteId = `${SITE_URL}/#website`;
  const personId = `${SITE_URL}/#person`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    jobTitle: "Author",
    email: SITE_EMAIL,
    description:
      "David Deane Haskell writes fiction and nonfiction as one body of work centered on healing the past, understanding the present, and imagining futures worth living in.",
    disambiguatingDescription:
      "Author David Deane Haskell is distinct from naturalist David George Haskell and from the Haskell programming language.",
    sameAs: [EXTERNAL_LINKS.fictionSubstack, EXTERNAL_LINKS.healingSubstack],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: {
      "@id": personId,
    },
  };

  const webpage = {
    "@type": seo.pageType,
    "@id": webpageId,
    url: seo.canonicalUrl,
    name: seo.title,
    description: seo.description,
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
  };

  const solarianDeep = {
    "@type": "Book",
    "@id": `${SITE_URL}/books#the-solarian-deep`,
    name: "The Solarian Deep",
    url: EXTERNAL_LINKS.solarianDeepAmazon,
    author: {
      "@id": personId,
    },
    inLanguage: "en",
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
    inLanguage: "en",
    genre: ["Memoir", "Nonfiction"],
  };

  const tommytune = {
    "@type": "Book",
    "@id": `${SITE_URL}/vault#tommytune`,
    name: "Tommytune",
    url: EXTERNAL_LINKS.freeFiction,
    author: {
      "@id": personId,
    },
    inLanguage: "en",
    genre: ["Short Story", "Science Fiction"],
  };

  if (pathname === "/books") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        person,
        website,
        webpage,
        {
          "@type": "ItemList",
          "@id": `${SITE_URL}/books#book-list`,
          itemListElement: [
            { "@type": "ListItem", position: 1, item: { "@id": solarianDeep["@id"] } },
            { "@type": "ListItem", position: 2, item: { "@id": woundedAngels["@id"] } },
            { "@type": "ListItem", position: 3, item: { "@id": tommytune["@id"] } },
          ],
        },
        solarianDeep,
        woundedAngels,
        tommytune,
      ],
    };
  }

  if (pathname === "/vault") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        person,
        website,
        webpage,
        tommytune,
        {
          "@type": "CreativeWork",
          "@id": `${SITE_URL}/vault#emergence`,
          name: "Emergence",
          url: EXTERNAL_LINKS.freeFiction,
          author: {
            "@id": personId,
          },
          inLanguage: "en",
        },
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, webpage, solarianDeep, woundedAngels],
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
    `<script type="application/ld+json">${structuredData.split("</script>").join("<\\/script>")}</script>`,
  ].join("\n    ");
};

export const getStructuredData = (pathname: string) => buildGraph(pathname);
