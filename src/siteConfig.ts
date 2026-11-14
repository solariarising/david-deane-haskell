export const SITE_NAME = "David Deane Haskell";
export const SITE_URL = "https://daviddeanehaskell.com";
export const SITE_EMAIL = "david@daviddeanehaskell.com";
export const SITE_LANGUAGE = "en";
export const SITE_LAST_MODIFIED = "2026-11-14";
export const AI_SUMMARY_PATH = "/ai-summary";
export const SITE_DESCRIPTION =
  "Official website for David Deane Haskell, featuring science fiction, healing-centered nonfiction, free fiction, and reader contact routes.";
export const SITE_DISAMBIGUATION =
  "Author David Deane Haskell is distinct from naturalist David George Haskell and from the Haskell programming language.";

export const ROUTE_PATHS = ["/", "/about", "/books", "/media", "/vault", AI_SUMMARY_PATH] as const;

export const SOCIAL_IMAGES = {
  default: "/social/solarian-deep-hero.jpg",
  about: "/social/profile.jpg",
  books: "/social/solarian-deep-hero.jpg",
  vault: "/social/vault-books-composite.jpg",
  healing: "/social/wounded-angels.jpg",
};

export const EXTERNAL_LINKS = {
  solarianDeepAmazon: "https://www.amazon.com/dp/B0GPN8DBJS",
  solarianDeep: "https://mybook.to/solariandeep",
  woundedAngels: "https://books2read.com/woundedangels",
  woundedAngelsAudible: "https://www.audible.com/pd/Wounded-Angels-Audiobook/B0HHSVGS52",
  woundedAngelsAppleAudio:
    "https://books.apple.com/us/audiobook/wounded-angels-a-memoir-that-lights-the-path-to/id6809852816",
  emergence: "https://reads.daviddeanehaskell.com/emergence",
  freeFiction: "https://dl.bookfunnel.com/k7osg3nq37",
  goldClub: "https://mybook.to/goldclub",
  darkAlignment: "https://mybook.to/darkalignment",
  tooMuchInformation: "https://mybook.to/toomuchinformation",
  fictionSubstack: "https://daviddeanehaskellstories.substack.com",
  healingSubstack: "https://innerchildjournal.substack.com",
  instagram: "https://www.instagram.com/daviddeanehaskell/",
};

export const SAME_AS_LINKS = [
  "https://daviddeanehaskellstories.substack.com",
  "https://innerchildjournal.substack.com",
  "https://www.instagram.com/daviddeanehaskell/",
  "https://www.goodreads.com/author/show/7171228.David_Deane_Haskell",
  "https://www.amazon.com/author/davidhaskell",
  "https://www.youtube.com/@DavidDeaneHaskell",
  "https://bsky.app/profile/daviddeanehaskell.com",
  "https://www.tiktok.com/@daviddeanehaskell",
  "https://www.threads.com/@daviddeanehaskell",
  "https://medium.com/@daviddeanecreates",
  "https://vocal.media/authors/david-deane-haskell",
] as const;
