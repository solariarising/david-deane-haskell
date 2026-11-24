import { ExternalLink, FileText, Headphones } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { trackCtaClick } from "@/lib/analytics";
import { MEDIA_APPEARANCES, MediaAppearance } from "@/mediaData";
import { EXTERNAL_LINKS, SITE_EMAIL, SOCIAL_IMAGES } from "@/siteConfig";

const HOST_CONVERSATION_AREAS = [
  {
    id: "fiction-technology",
    label: "Fiction & technology",
    description: "The Solarian Deep, near-future systems, and speculative fiction craft.",
    url: "https://shows.acast.com/review-it-yourself/episodes/sci-fi-films-and-the-solarian-deep-with-author-david-deane-h",
    linkLabel: "Review It Yourself: The Solarian Deep",
    external: true,
  },
  {
    id: "memoir-recovery",
    label: "Memoir, recovery & inner-child work",
    description: "Wounded Angels, trauma recovery, and writing inside healing as it happened.",
    url: "https://www.podcastreallife.com/david-deane-haskell-from-childhood-trauma-to-the-freedom-of-recovery/",
    linkLabel: "Stories from Real Life — Ep. 229",
    external: true,
  },
  {
    id: "book-clubs",
    label: "Book clubs & reading groups",
    description: "Downloadable 10-question discussion guides plus complimentary virtual author Q&As.",
    url: "#book-clubs-and-kits",
    linkLabel: "Download Book Club Guides",
    external: false,
  },
] as const;

const PRESS_AND_CLUB_DOWNLOADS = [
  {
    id: "podcast-one-sheet",
    title: "Podcast & Media Guest One-Sheet (2026)",
    description: "Single-page host sheet with writer bio, two focused conversation lanes, 6 talking points, and verified links.",
    href: "/downloads/david-deane-haskell-media-one-sheet-2026.pdf",
    label: "Download One-Sheet (PDF)",
  },
  {
    id: "wounded-angels-guide",
    title: "Wounded Angels Book Club Guide",
    description: "2-page printable guide with 10 discussion questions for memoir, grief, and healing reading circles.",
    href: "/downloads/wounded-angels-book-club-guide.pdf",
    label: "Download Guide (PDF)",
  },
  {
    id: "solarian-deep-guide",
    title: "The Solarian Deep Book Club Guide",
    description: "2-page printable guide with 10 speculative fiction & cyberpunk discussion prompts.",
    href: "/downloads/the-solarian-deep-book-club-guide.pdf",
    label: "Download Guide (PDF)",
  },
] as const;

const MediaCard = ({ appearance }: { appearance: MediaAppearance }) => (
  <article className="card-elevated rounded-lg p-6 flex flex-col gap-4">
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {appearance.outlet}
      </p>
      <h3 className="heading-subsection text-2xl">{appearance.title}</h3>
      <p className="body-text">{appearance.description}</p>
    </div>
    <div className="mt-auto pt-2 flex flex-wrap gap-4 items-center">
      <a
        href={appearance.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-accent inline-flex items-center gap-2"
        onClick={() =>
          trackCtaClick({
            ctaId: `media_${appearance.id}_episode`,
            ctaLabel: `OPEN ${appearance.outlet}`,
            ctaLocation: "media_appearance_card",
            destinationUrl: appearance.url,
            destinationKind: "external",
          })
        }
      >
        Open the official page <ExternalLink size={16} aria-hidden="true" />
      </a>
      <span className="text-xs text-muted-foreground">Featured book: {appearance.book}</span>
    </div>
    {appearance.highlights && (
      <div className="border-t border-border/60 pt-4 space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Start here</p>
        {appearance.highlights.map((highlight) => (
          <a
            key={highlight.url}
            href={highlight.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent block text-sm"
            onClick={() =>
              trackCtaClick({
                ctaId: `media_${appearance.id}_highlight`,
                ctaLabel: highlight.label,
                ctaLocation: "media_appearance_highlight",
                destinationUrl: highlight.url,
                destinationKind: "external",
              })
            }
          >
            {highlight.label}
          </a>
        ))}
      </div>
    )}
  </article>
);

const Media = () => {
  const woundedAngelsAppearances = MEDIA_APPEARANCES.filter(
    (appearance) => appearance.book === "Wounded Angels" && !appearance.embedUrl,
  );
  const solarianAppearances = MEDIA_APPEARANCES.filter(
    (appearance) => appearance.book === "The Solarian Deep",
  );
  const featured = MEDIA_APPEARANCES.filter((appearance) => appearance.embedUrl);

  return (
    <PageLayout>
      <section className="section-spacing">
        <div className="page-container max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Media & Press</p>
          <h1 className="heading-display">Conversations about the books and the life behind them</h1>
          <p className="body-large max-w-3xl mx-auto">
            David talks with hosts about recovery, writing, inner-child work, and science fiction.
            Every appearance below points to the host's official episode or publication.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24" aria-labelledby="for-hosts">
        <div className="page-container max-w-4xl mx-auto space-y-6">
          <h2 id="for-hosts" className="heading-section">For hosts and producers</h2>
          <p className="body-text max-w-3xl">
            David Deane Haskell is an author working across speculative fiction and memoir-driven
            healing nonfiction. Hosts, journalists, and book clubs can explore his work across three areas:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {HOST_CONVERSATION_AREAS.map((area) => (
              <div key={area.id} className="space-y-2">
                <h3 className="font-heading text-lg font-medium text-foreground">{area.label}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
                <a
                  href={area.url}
                  target={area.external ? "_blank" : undefined}
                  rel={area.external ? "noopener noreferrer" : undefined}
                  className="link-accent text-sm inline-flex items-center gap-1"
                  onClick={() =>
                    trackCtaClick({
                      ctaId: `media_host_area_${area.id}`,
                      ctaLabel: area.linkLabel,
                      ctaLocation: "media_for_hosts",
                      destinationUrl: area.url,
                      destinationKind: area.external ? "external" : "internal",
                    })
                  }
                >
                  {area.linkLabel} {area.external && <ExternalLink size={14} aria-hidden="true" />}
                </a>
              </div>
            ))}
          </div>
          <div
            id="book-clubs-and-kits"
            className="mt-8 pt-8 border-t border-border/60 space-y-5 scroll-mt-28"
          >
            <h3 className="font-heading text-xl font-medium text-foreground">
              Press Kit &amp; Book Club Discussion Guides
            </h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {PRESS_AND_CLUB_DOWNLOADS.map((doc) => (
                <article key={doc.id} className="card-elevated rounded-lg p-5 flex flex-col gap-3">
                  <div className="space-y-1.5">
                    <h4 className="font-heading text-base font-medium text-foreground">{doc.title}</h4>
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                  </div>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent text-sm inline-flex items-center gap-1.5 mt-auto pt-1"
                    onClick={() =>
                      trackCtaClick({
                        ctaId: `media_download_${doc.id}`,
                        ctaLabel: doc.label,
                        ctaLocation: "media_downloads",
                        destinationUrl: doc.href,
                        destinationKind: "external",
                      })
                    }
                  >
                    <FileText size={14} aria-hidden="true" /> {doc.label}
                  </a>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="btn-primary inline-block"
              onClick={() =>
                trackCtaClick({
                  ctaId: "media_for_hosts_email",
                  ctaLabel: "BOOK AN INTERVIEW",
                  ctaLocation: "media_for_hosts",
                  destinationUrl: `mailto:${SITE_EMAIL}`,
                  destinationKind: "external",
                })
              }
            >
              Book an Interview
            </a>
            <a
              href={SOCIAL_IMAGES.about}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-sm"
              onClick={() =>
                trackCtaClick({
                  ctaId: "media_for_hosts_press_photo",
                  ctaLabel: "Press photo",
                  ctaLocation: "media_for_hosts",
                  destinationUrl: SOCIAL_IMAGES.about,
                  destinationKind: "external",
                })
              }
            >
              Press photo
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24" aria-labelledby="featured-media">
        <div className="page-container space-y-8">
          <div className="flex items-center gap-3">
            <Headphones aria-hidden="true" />
            <h2 id="featured-media" className="heading-section">Featured conversations</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featured.map((appearance) => (
              <article key={appearance.id} className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg bg-black shadow-card">
                  <iframe
                    className="h-full w-full"
                    src={appearance.embedUrl}
                    title={`${appearance.title} — ${appearance.outlet}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h3 className="heading-subsection text-2xl">{appearance.title}</h3>
                  <p className="body-text mt-2">{appearance.description}</p>
                  <a
                    href={appearance.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex items-center gap-2 mt-3"
                    onClick={() =>
                      trackCtaClick({
                        ctaId: `media_${appearance.id}_featured`,
                        ctaLabel: `OPEN ${appearance.outlet}`,
                        ctaLocation: "media_featured_embed",
                        destinationUrl: appearance.url,
                        destinationKind: "external",
                      })
                    }
                  >
                    Open the official page <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="zone-healing section-spacing" aria-labelledby="wounded-angels-media">
        <div className="page-container space-y-10">
          <div className="max-w-3xl space-y-5">
            <h2 id="wounded-angels-media" className="heading-section">Wounded Angels conversations</h2>
            <p className="body-large">
              The second edition includes a preview of the follow-up book.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={EXTERNAL_LINKS.woundedAngels}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() =>
                  trackCtaClick({
                    ctaId: "media_wounded_angels_book",
                    ctaLabel: "READ WOUNDED ANGELS",
                    ctaLocation: "media_wounded_angels_intro",
                    destinationUrl: EXTERNAL_LINKS.woundedAngels,
                    destinationKind: "external",
                  })
                }
              >
                Read Wounded Angels
              </a>
              <a
                href={EXTERNAL_LINKS.healingSubstack}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
                onClick={() =>
                  trackCtaClick({
                    ctaId: "media_inner_child_journal",
                    ctaLabel: "FOLLOW INNER CHILD JOURNAL",
                    ctaLocation: "media_wounded_angels_intro",
                    destinationUrl: EXTERNAL_LINKS.healingSubstack,
                    destinationKind: "external",
                  })
                }
              >
                Follow Inner Child Journal
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {woundedAngelsAppearances.map((appearance) => (
              <MediaCard key={appearance.id} appearance={appearance} />
            ))}
          </div>
        </div>
      </section>

      <section className="zone-scifi section-spacing" aria-labelledby="solarian-media">
        <div className="page-container space-y-10">
          <div className="max-w-3xl space-y-5">
            <h2 id="solarian-media" className="heading-section">The Solarian Deep in conversation</h2>
            <p className="body-large">
              These appearances go into the underwater world, the people inside it, and the long road
              back to writing science fiction.
            </p>
            <a
              href={EXTERNAL_LINKS.solarianDeep}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() =>
                trackCtaClick({
                  ctaId: "media_solarian_deep_book",
                  ctaLabel: "READ THE SOLARIAN DEEP",
                  ctaLocation: "media_solarian_intro",
                  destinationUrl: EXTERNAL_LINKS.solarianDeep,
                  destinationKind: "external",
                })
              }
            >
              Read The Solarian Deep
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solarianAppearances.map((appearance) => (
              <MediaCard key={appearance.id} appearance={appearance} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Media;
