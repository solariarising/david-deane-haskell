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
import {
  MEDIA_APPEARANCES,
  REUSE_CLIPS,
  SEARCH_ONLY_MEDIA_APPEARANCES,
} from "./mediaData";

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
    title: `About ${SITE_NAME} | Author, drummer, and storyteller`,
    description:
      "David Deane Haskell writes speculative fiction and memoir-driven nonfiction and teaches drumming, drawing on a creative life spanning writing, music, technology, and performance.",
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
  "/media": {
    title: `Media & Press | Podcast appearances and interviews with ${SITE_NAME}`,
    description:
      "Verified podcast appearances, interviews, review coverage, and official episode links for author David Deane Haskell, Wounded Angels, and The Solarian Deep.",
    type: "profile",
    image: SOCIAL_IMAGES.books,
    imageAlt: "Books by David Deane Haskell",
    pageType: "CollectionPage",
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
  "/media": "Media & Press",
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
    sameAs: [EXTERNAL_LINKS.fictionSubstack, EXTERNAL_LINKS.healingSubstack, EXTERNAL_LINKS.instagram],
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
    url: EXTERNAL_LINKS.emergence,
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

  const discoveryAppearances = [
    ...MEDIA_APPEARANCES,
    ...SEARCH_ONLY_MEDIA_APPEARANCES,
  ];

  const mediaItems = discoveryAppearances.map((appearance) => ({
    "@type": appearance.format,
    "@id": `${SITE_URL}/media#${appearance.id}`,
    name: appearance.title,
    url: appearance.url,
    ...(appearance.published ? { datePublished: appearance.published } : {}),
    contributor: {
      "@id": personId,
    },
    about: {
      "@id":
        appearance.book === "Wounded Angels"
          ? woundedAngels["@id"]
          : solarianDeep["@id"],
    },
  }));

  const mediaClips = REUSE_CLIPS.map((clip) => ({
    "@type": "VideoObject",
    "@id": `${SITE_URL}/media#${clip.id}`,
    name: clip.title,
    description: clip.description,
    contentUrl: `${SITE_URL}${clip.src}`,
    isBasedOn: clip.officialUrl,
    about: [
      { "@id": personId },
      {
        "@id":
          clip.book === "Wounded Angels"
            ? woundedAngels["@id"]
            : solarianDeep["@id"],
      },
    ],
  }));

  const mediaList = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/media#appearance-list`,
    name: "Media appearances and press for David Deane Haskell",
    numberOfItems: mediaItems.length,
    itemListElement: mediaItems.map((appearance, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": appearance["@id"],
      },
    })),
  };

  const mainEntityId =
    normalizedPath === "/about" || normalizedPath === AI_SUMMARY_PATH
      ? personId
      : normalizedPath === "/books"
        ? booksList["@id"]
        : normalizedPath === "/media"
          ? mediaList["@id"]
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

  if (normalizedPath === "/media") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        person,
        website,
        webpage,
        ...(breadcrumbList ? [breadcrumbList] : []),
        mediaList,
        ...mediaItems,
        ...mediaClips,
        solarianDeep,
        woundedAngels,
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
