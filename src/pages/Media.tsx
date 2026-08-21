import { ExternalLink, Headphones, Trophy } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { trackCtaClick, trackMediaPlay } from "@/lib/analytics";
import { MEDIA_APPEARANCES, MediaAppearance, REUSE_CLIPS, ReuseClip } from "@/mediaData";
import { EXTERNAL_LINKS } from "@/siteConfig";

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

const ReuseClipCard = ({ clip }: { clip: ReuseClip }) => (
  <article className="card-elevated rounded-lg p-5 space-y-4">
    <video
      className="w-full max-h-[34rem] rounded-md bg-black object-contain"
      controls
      playsInline
      preload="metadata"
      aria-label={`${clip.title} — ${clip.outlet}`}
      onPlay={() =>
        trackMediaPlay({
          mediaId: clip.id,
          mediaTitle: clip.title,
          mediaLocation: "media_reuse_clip",
          sourceUrl: clip.src,
        })
      }
    >
      <source src={clip.src} type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{clip.outlet}</p>
      <h3 className="heading-subsection text-2xl">{clip.title}</h3>
      <p className="body-text">{clip.description}</p>
      <div className="flex flex-wrap gap-4 items-center pt-1">
        <a
          href={clip.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent inline-flex items-center gap-2"
          onClick={() =>
            trackCtaClick({
              ctaId: `media_${clip.id}_source`,
              ctaLabel: `OPEN ${clip.outlet}`,
              ctaLocation: "media_reuse_clip",
              destinationUrl: clip.officialUrl,
              destinationKind: "external",
            })
          }
        >
          Open the full official episode <ExternalLink size={16} aria-hidden="true" />
        </a>
        <span className="text-xs text-muted-foreground">Featured book: {clip.book}</span>
      </div>
    </div>
  </article>
);

const Media = () => {
  const woundedAngelsAppearances = MEDIA_APPEARANCES.filter(
    (appearance) => appearance.book === "Wounded Angels",
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

      <section className="pb-16 md:pb-24" aria-labelledby="reuse-clips">
        <div className="page-container space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 id="reuse-clips" className="heading-section">Watch a short moment</h2>
            <p className="body-text">
              These clips came from the hosts' media packets. The full conversations remain linked
              to the original shows.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {REUSE_CLIPS.map((clip) => (
              <ReuseClipCard key={clip.id} clip={clip} />
            ))}
          </div>
        </div>
      </section>

      <section className="zone-healing section-spacing" aria-labelledby="wounded-angels-media">
        <div className="page-container space-y-10">
          <div className="max-w-3xl space-y-5">
            <h2 id="wounded-angels-media" className="heading-section">Wounded Angels conversations</h2>
            <p className="body-large">
              The current Second Edition Kindle and paperback include a sneak preview of
              <em> Inner Child Unleashed</em>.
            </p>
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

      <section className="section-spacing" aria-labelledby="ranking-proof">
        <div className="page-container max-w-4xl">
          <div className="card-elevated rounded-lg p-8 md:p-10 space-y-5">
            <div className="flex items-center gap-3">
              <Trophy aria-hidden="true" />
              <h2 id="ranking-proof" className="heading-section">Ranking proof</h2>
            </div>
            <p className="body-large">
              During an August 2026 free promotion, <em>The Solarian Deep</em> reached #4 on
              Amazon.com's free Cyberpunk Science Fiction list and #9 on Amazon Japan's free
              foreign-language Science Fiction list.
            </p>
            <p className="text-sm text-muted-foreground">
              Amazon category rankings change over time. These positions were captured while the
              promotion was live.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Media;
