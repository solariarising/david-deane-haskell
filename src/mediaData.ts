export type MediaAppearance = {
  id: string;
  title: string;
  outlet: string;
  description: string;
  url: string;
  book: "Wounded Angels" | "The Solarian Deep";
  format: "PodcastEpisode" | "Article";
  published?: string;
  embedUrl?: string;
  highlights?: Array<{
    label: string;
    url: string;
  }>;
};

export type ReuseClip = {
  id: string;
  title: string;
  outlet: string;
  description: string;
  src: string;
  officialUrl: string;
  book: "Wounded Angels" | "The Solarian Deep";
};

// Source basis and voice mode: compact factual website copy, checked 2026-08-21.
// - GLOBAL_READER_AGENT_READINESS/BOOK_CATALOG.md
// - GLOBAL_READER_AGENT_READINESS/ASSET_INVENTORY.md
// - FEATURES_INTERVIEWS_AND_REVIEWS/90_Final_Deliverables/PODCAST_INTERVIEW_PROOF_CAPTURE_LEDGER.csv
// - FEATURES_INTERVIEWS_AND_REVIEWS/90_Final_Deliverables/PODCAST_TRANSCRIPT_ASSET_RUNS/
// - AA DDH BUSINESS 2026/MARKETING/8 26 BEST SELLER MILESTONE PROOF/
// - AA DDH BUSINESS 2026/MEDIA/ (host-supplied media packets)
// - Gmail source threads for Will Gordon and Connor McGeverly
// Reuse authority: David's 2026-08-21 statement that podcasters granted permission
// and supplied the files. Missing files are skipped; official host links remain attached.
// Voice mode: compact factual website copy.

export const MEDIA_APPEARANCES: MediaAppearance[] = [
  {
    id: "willpower",
    title: "What Happens After Rock Bottom: Inner Child Work & Honest Recovery",
    outlet: "TheWillpowerPodcast",
    description:
      "David talks about life after rock bottom, codependency, survival mode, inner-child work, and writing again.",
    url: "https://thewillpowerpodcast.podbean.com/e/what-happens-after-rock-bottom-inner-child-work-honest-recovery-david-deane-haskell/",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-05-22",
    embedUrl: "https://www.youtube-nocookie.com/embed/nZTT4KSx2Rw?start=87",
  },
  {
    id: "adult-child",
    title: "The Codependency Bottom: When Sobriety Cracks Open the Trauma Underneath",
    outlet: "Adult Child with Andrea Ashley",
    description:
      "A conversation about sobriety, childhood trauma, attachment wounds, inner-child work, and Wounded Angels.",
    url: "https://podcasts.apple.com/us/podcast/229-the-codependency-bottom-when-sobriety-cracks-open/id1552579027?i=1000766422495",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-05-06",
  },
  {
    id: "sober-fix",
    title: "David Deane Haskell on The Sober Fix",
    outlet: "The Sober Fix",
    description:
      "Recovery after relapse, childhood trauma, codependency, and the work that became Wounded Angels.",
    url: "https://www.youtube.com/watch?v=KllzXH_VMsk",
    book: "Wounded Angels",
    format: "PodcastEpisode",
  },
  {
    id: "sobertown",
    title: "Episode 406: Interview with Author David Deane Haskell",
    outlet: "Sobertown / Early Days",
    description: "David talks about shame, codependency, and recovery after the crisis.",
    url: "https://www.sobertownpodcast.com/sober-podcast-episodes/url-/sobe/sober-podcast-episodes/r-podcast-episodes/episode-406-interview-with-author-david-dean-haskell",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-05-28",
  },
  {
    id: "evidence-based-recovery",
    title: "David Deane Haskell on Evidence Based Recovery",
    outlet: "Evidence Based Recovery",
    description: "A conversation about trauma, addiction, shame, and Wounded Angels.",
    url: "https://rss.com/podcasts/evidence-based-recovery/2864940/",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-05-28",
  },
  {
    id: "trauma-unbound",
    title: "David Deane Haskell on Trauma Unbound",
    outlet: "Trauma Unbound",
    description: "Trauma recovery, CPTSD, parts work, addiction, and codependency.",
    url: "https://www.youtube.com/watch?v=IPcet_e2CjE",
    book: "Wounded Angels",
    format: "PodcastEpisode",
  },
  {
    id: "behind-the-shades",
    title: "David Deane Haskell on The Behind The Shades Show",
    outlet: "The Behind The Shades Show",
    description: "A conversation about mental health, trauma recovery, and Wounded Angels.",
    url: "https://www.youtube.com/watch?v=7zXwLINQCMA",
    book: "Wounded Angels",
    format: "PodcastEpisode",
  },
  {
    id: "imagine-fitting-in",
    title: "Wounded Angels: The Courage to Begin Again",
    outlet: "IMAGiNE FiTTiNG IN — Episode 093",
    description:
      "Recovery and fatherhood meet the work behind Wounded Angels and The Solarian Deep.",
    url: "https://www.buzzsprout.com/2379981/episodes/19368632-093-david-deane-haskell-wounded-angels-the-courage-to-begin-again",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-06-21",
  },
  {
    id: "art-of-expression",
    title: "We Write to Remember. We're Not Broken, We're Healing",
    outlet: "The Art of Expression",
    description: "David talks with Suzy Rowlands about writing from places that are still healing.",
    url: "https://suzyrowlands.substack.com/p/david-deane-haskell-we-write-to-remember",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2025-08-06",
  },
  {
    id: "fantasy-talks",
    title: "David Deane Haskell on Amazing Worlds of Fantasy",
    outlet: "Fantasy Talks Live / Amazing Worlds of Fantasy",
    description:
      "The Solarian Deep, writing science fiction after a long creative block, and the way David's nonfiction changed his fiction.",
    url: "https://www.podbean.com/ep/pb-wiajd-1aeb265",
    book: "The Solarian Deep",
    format: "PodcastEpisode",
    published: "2026-06-14",
    embedUrl: "https://www.youtube-nocookie.com/embed/umP1M6EBXTc?start=859",
    highlights: [
      {
        label: "14:20 — Returning to science fiction",
        url: "https://www.youtube.com/watch?v=umP1M6EBXTc&t=859s",
      },
      {
        label: "18:50 — The books as past, present, and future",
        url: "https://www.youtube.com/watch?v=umP1M6EBXTc&t=1130s",
      },
      {
        label: "55:13 — What David hopes readers remember",
        url: "https://www.youtube.com/watch?v=umP1M6EBXTc&t=3313s",
      },
    ],
  },
  {
    id: "connor-author-interview",
    title: "David Deane Haskell — Author Interview",
    outlet: "Connor Reads Books — Episode 38",
    description:
      "A fiction-first conversation about The Solarian Deep, returning to writing, and finding a voice outside trend-driven publishing.",
    url: "https://www.buzzsprout.com/2539313/episodes/19534879",
    book: "The Solarian Deep",
    format: "PodcastEpisode",
    published: "2026-07-27",
    embedUrl: "https://www.youtube-nocookie.com/embed/H8Ts262wRfg",
  },
  {
    id: "connor-legacies-unearthed",
    title: "Legacies Unearthed: The Solarian Deep",
    outlet: "Connor Reads Books — Episode 39",
    description:
      "Connor McGeverly and cast perform Chapter 5 of The Solarian Deep.",
    url: "https://www.buzzsprout.com/2539313/episodes/19618582",
    book: "The Solarian Deep",
    format: "PodcastEpisode",
    published: "2026-08-10",
    embedUrl: "https://www.youtube-nocookie.com/embed/S9LjvsuzmVc",
  },
  {
    id: "epic-fantasy-adventures",
    title: "David Deane Haskell on Fantasy, Lore, & More",
    outlet: "Epic Fantasy Adventures",
    description: "A fiction-first conversation about The Solarian Deep and its underwater world.",
    url: "https://www.youtube.com/watch?v=w7ZMu3hZPM8",
    book: "The Solarian Deep",
    format: "PodcastEpisode",
    published: "2026-06-20",
  },
  {
    id: "reading-cafe",
    title: "The Solarian Deep — Review & Interview",
    outlet: "The Reading Cafe",
    description: "A reader-facing review and written interview about The Solarian Deep.",
    url: "https://www.thereadingcafe.com/the-solarian-deep-by-david-deane-haskell-review-interview/",
    book: "The Solarian Deep",
    format: "Article",
    published: "2026-06-28",
  },
];

// Verified public appearances that are not yet presented on the visible Media page.
// They remain search-only so this layer can improve machine discovery without changing
// public copy, layout, or page length. Source authority checked 2026-08-25:
// - AA DDH BUSINESS 2026/MEDIA/PODCAST APPEARANCES/PODCAST_APPEARANCE_MASTER_LINKS.md
// - AA DDH BUSINESS 2026/MEDIA/PODCAST APPEARANCES/PODCAST_APPEARANCE_INVENTORY_2026-07-13.md
export const SEARCH_ONLY_MEDIA_APPEARANCES: MediaAppearance[] = [
  {
    id: "mystical-wellness",
    title: "Facing the Mystical",
    outlet: "Mystical Wellness with Julia Anchorhaven",
    description:
      "David Deane Haskell discusses Wounded Angels, inner-child recovery, and spiritual experience.",
    url: "https://www.youtube.com/watch?v=n9cM-ZRUiSA",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2025-08-26",
  },
  {
    id: "we-are-all-psychic",
    title: "Spiritual Inner Child Healing for Addiction",
    outlet: "We Are All Psychic",
    description:
      "A published conversation with David Deane Haskell about addiction, inner-child recovery, and Wounded Angels.",
    url: "https://www.listennotes.com/podcasts/were-all-psychic/spiritual-inner-child-oWv8Zy5CkQP/",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-06-16",
  },
  {
    id: "normalizing-mens-mental-health",
    title: "David Deane Haskell on Normalizing Men's Mental Health",
    outlet: "Normalizing Men's Mental Health",
    description:
      "A published conversation about men's mental health, recovery, and Wounded Angels.",
    url: "https://www.youtube.com/watch?v=4WfJwGmc7sY",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-06-19",
  },
  {
    id: "writer-craft",
    title: "Writing, Traveling, and Trauma Healing: A Last Ditch Effort to Be Heard",
    outlet: "Writer Craft Podcast — Episode 216",
    description:
      "David Deane Haskell discusses writing, trauma recovery, and the work behind Wounded Angels.",
    url: "https://theindieauthorlife.libsyn.com/writing-traveling-and-trauma-healing-a-last-ditch-effort-to-be-heard-with-david-deane-haskell-ep216",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-07-02",
  },
  {
    id: "the-way-out",
    title: "Recovery Means Healing the Inner Child with David Deane Haskell",
    outlet: "The Way Out — Episode 509",
    description:
      "A published longform recovery conversation tied directly to Wounded Angels.",
    url: "https://www.alcoholfree.com/listen/podcasts/episode/recovery-means-healing-the-inner-child-with-david-deane-haskell-episode-509",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-07-05",
  },
  {
    id: "real-talk-recovery",
    title: "Learning to Live After the Crisis",
    outlet: "Real Talk Recovery with Miss Mo",
    description:
      "David Deane Haskell discusses recovery after crisis and the lived experience behind Wounded Angels.",
    url: "https://realtalkrecovery.podbean.com/",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-07-10",
  },
  {
    id: "create-art",
    title: "The Architecture of Recovery: Writing Through the Unknown",
    outlet: "Create Art Podcast",
    description:
      "A conversation with David Deane Haskell about recovery, writing, and Wounded Angels.",
    url: "https://createartpodcast.com/the-architecture-of-recovery-writing-through-the-unknown-with-david-deane-haskell/",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-07-12",
  },
  {
    id: "artists-corner",
    title: "Artists Corner: David Deane Haskell",
    outlet: "I'm only human!",
    description:
      "A published author conversation naming Wounded Angels and The Solarian Deep.",
    url: "https://open.spotify.com/episode/6O7T6diKtci1C7ANg09yFp",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-07-16",
  },
  {
    id: "whereabouts-tales",
    title: "Toxic Shame, Codependency & Inner Child Recovery",
    outlet: "Whereabouts Tales",
    description:
      "David Deane Haskell discusses toxic shame, codependency, recovery, and Wounded Angels.",
    url: "https://open.spotify.com/episode/5GbJK0WomorEtG5QKOGmIw",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-07-22",
  },
  {
    id: "adult-child-of-dysfunction",
    title: "Why Your Childhood Still Controls Your Reactions",
    outlet: "Adult Child of Dysfunction — Episode 351",
    description:
      "A published conversation with David Deane Haskell about childhood patterns and Wounded Angels.",
    url: "https://open.spotify.com/episode/1aPeKeSPevPTmTe2aCKhMN",
    book: "Wounded Angels",
    format: "PodcastEpisode",
    published: "2026-07-29",
  },
  {
    id: "blasters-and-blades",
    title: "The Solarian Deep by David Deane Haskell",
    outlet: "The Blasters and Blades Podcast — Episode 779",
    description:
      "A book-specific science-fiction conversation about The Solarian Deep.",
    url: "https://open.spotify.com/episode/1MUHgkhetmb0TqyqDtYQjf",
    book: "The Solarian Deep",
    format: "PodcastEpisode",
    published: "2026-07-31",
  },
];

export const REUSE_CLIPS: ReuseClip[] = [
  {
    id: "willpower-shame",
    title: "When approval becomes an addiction",
    outlet: "TheWillpowerPodcast",
    description:
      "A host-supplied short from David's conversation with Will Gordon about shame and people addiction.",
    src: "/media/willpower-shame-short.mp4",
    officialUrl:
      "https://thewillpowerpodcast.podbean.com/e/what-happens-after-rock-bottom-inner-child-work-honest-recovery-david-deane-haskell/",
    book: "Wounded Angels",
  },
  {
    id: "connor-dive-in",
    title: "Dive into The Solarian Deep",
    outlet: "Connor Reads Books",
    description:
      "A finished host-supplied portrait clip introducing The Solarian Deep.",
    src: "/media/solarian-dive-in.mp4",
    officialUrl: "https://youtu.be/H8Ts262wRfg",
    book: "The Solarian Deep",
  },
];
