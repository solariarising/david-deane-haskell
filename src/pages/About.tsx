import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import profile from "@/assets/profile.webp";
import { trackCtaClick } from "@/lib/analytics";
import { EXTERNAL_LINKS, SITE_EMAIL } from "@/siteConfig";

const DRUMMING_EPISODE_URL = "https://www.youtube.com/watch?v=HBKQhGXTzT4";
const DRUMMING_EPISODE_EMBED = "https://www.youtube-nocookie.com/embed/HBKQhGXTzT4";

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
  <PageLayout>
    {/* Intro */}
    <section className="section-spacing pb-10">
      <div className="page-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <img
              src={profile}
              alt="Portrait of author David Deane Haskell"
              className="w-full max-w-md rounded-sm shadow-lg"
              loading="eager"
              decoding="async"
              width={800}
              height={800}
            />
          </div>
          <div className="space-y-6">
            <h1 className="heading-display">About David</h1>
            <div className="space-y-5 body-text">
              <p>
                David Deane Haskell writes about what it means to make sense of a world that doesn't come with instructions—and that none of us make it through unscathed.
              </p>
              <p>
                His work explores that reckoning—through failure, obsession, and the slow reconstruction of the fractured self. Across speculative fiction, memoir-driven essays, and recovery-centered writing, he returns to outsiders, seekers, and wounded people trying to become whole without abandoning the parts of themselves that helped them survive.
              </p>
              <p>
                He is drawn to stories of evolution under pressure: societies reshaped by artificial intelligence, people unraveling within systems they don't understand, and the lonely, wrenching but ultimately beautiful work of learning to listen to the heart.
              </p>
              <p>
                Blending emotional honesty with speculative reach, his writing moves through technology, spirituality, trauma, and imagination to explore shame, connection, creativity, and the lifelong process of becoming you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="divider" />

    {/* Creative life */}
    <section className="section-spacing pt-10">
      <div className="page-container max-w-3xl mx-auto space-y-6">
        <h2 className="heading-section">A Life Built From Different Rooms</h2>
        <div className="space-y-5 body-text">
          <p>
            David's path to the page ran through a drum line first. He came up in competitive marching percussion, played snare for the world-renowned Concord Blue Devils, spent ten years performing at Tokyo Disneyland, and has drummed and coached with corps and ensembles on both sides of the Pacific, including Japan's Yokohama Scouts. He still teaches drumming today—rudiments and fundamentals for adult beginners and returning players—and has led clinics as far afield as Thailand and Indonesia.
          </p>
          <p>
            Writing came later, and not in a straight line. He self-published his first four novels between 2013–2019, in the early days of the Kindle wave, then went quiet for five full years. When he came back, he came back on his own terms: fiction and nonfiction under one name, no pen name, no specialized niche or genre. His cyberpunk sci-fi sticks close to future-plausible, with gritty, real-world technology that feels close-to-home rather than distant galaxies and impossible tales. What actually drives him is how ordinary people and institutions react when the ground shifts under them, whether through overwhelming change or powerful oppression. He gravitates toward defiant underdogs pushing back against systems built to squash them flat.
          </p>
          <p>
            Drumming and writing turn out to share a discipline: persistence, patience with a slow build, and trusting a process before you can see where it's going. Both come from the same restless curiosity about how things—people, machines, rhythms—actually work.
          </p>
        </div>
      </div>
    </section>

    <div className="divider" />

    {/* Video */}
    <section className="pb-16 md:pb-24">
      <div className="page-container max-w-3xl mx-auto space-y-6">
        <h2 className="heading-section">Drummer and Writer</h2>
        <div className="aspect-video overflow-hidden rounded-lg bg-black shadow-card">
          <iframe
            className="h-full w-full"
            src={DRUMMING_EPISODE_EMBED}
            title="David Deane Haskell on Drumming Up Conversation"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div>
          <p className="body-text">
            A conversation on <em>Drumming Up Conversation</em> about the drum-corps years, ten years at Tokyo Disneyland, teaching rudiments to adult students, and how that same discipline shows up in the writing.
          </p>
          <a
            href={DRUMMING_EPISODE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-2 mt-3"
            onClick={() =>
              trackCtaClick({
                ctaId: "about_drumming_episode",
                ctaLabel: "OPEN Drumming Up Conversation",
                ctaLocation: "about_creative_life",
                destinationUrl: DRUMMING_EPISODE_URL,
                destinationKind: "external",
              })
            }
          >
            Open the official episode <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <div className="divider" />

    {/* Restrained links to Books and Media */}
    <section className="pb-16 md:pb-24">
      <div className="page-container max-w-3xl mx-auto flex flex-wrap gap-4 justify-center">
        <Link
          to="/books"
          className="btn-primary"
          onClick={() =>
            trackCtaClick({
              ctaId: "about_books_by_david",
              ctaLabel: "BOOKS BY DAVID",
              ctaLocation: "about_primary_cta",
              destinationUrl: "/books",
              destinationKind: "internal",
            })
          }
        >
          Books by David
        </Link>
        <Link
          to="/media"
          className="btn-outline"
          onClick={() =>
            trackCtaClick({
              ctaId: "about_hear_more_conversations",
              ctaLabel: "HEAR MORE CONVERSATIONS",
              ctaLocation: "about_primary_cta",
              destinationUrl: "/media",
              destinationKind: "internal",
            })
          }
        >
          Hear More Conversations
        </Link>
      </div>
    </section>

    <div className="divider" />

    {/* Get in touch */}
    <section className="section-spacing pt-10" aria-labelledby="contact-heading" id="contact">
      <div className="page-container max-w-2xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Mail aria-hidden="true" />
            <h2 id="contact-heading" className="heading-section">Get in Touch</h2>
          </div>
          <p className="body-large">
            For interviews, podcasts, speaking invitations, clinics, workshops, one-on-one sessions, or select collaborations, get in touch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <div className="space-y-1">
            <p className="font-heading text-lg font-medium text-foreground">Podcast, interview &amp; media</p>
            <p className="body-text">
              Verified appearances and official episode links live on the{" "}
              <Link
                to="/media"
                className="link-accent"
                onClick={() =>
                  trackCtaClick({
                    ctaId: "about_contact_media_link",
                    ctaLabel: "Media page",
                    ctaLocation: "about_contact_grid",
                    destinationUrl: "/media",
                    destinationKind: "internal",
                  })
                }
              >
                Media page
              </Link>
              . New requests are welcome by email.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-heading text-lg font-medium text-foreground">Speaking, workshops &amp; clinics</p>
            <p className="body-text">
              Talks and conversations on writing and recovery, and drumming clinics or lessons—by email.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-heading text-lg font-medium text-foreground">Creative &amp; professional collaboration</p>
            <p className="body-text">
              Select collaborations across fiction, nonfiction, and creative projects.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-heading text-lg font-medium text-foreground">Readers &amp; general contact</p>
            <p className="body-text">
              David Deane Haskell is the author of <em>The Solarian Deep</em>, <em>Emergence</em>, and <em>Wounded Angels</em>. Say hello any time.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="body-text">The best way to reach David is by email:</p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="btn-primary inline-block max-w-full whitespace-normal break-words px-4 sm:px-8"
            onClick={() =>
              trackCtaClick({
                ctaId: "about_email_david",
                ctaLabel: "EMAIL DAVID",
                ctaLocation: "about_contact_primary_cta",
                destinationUrl: `mailto:${SITE_EMAIL}`,
                destinationKind: "external",
              })
            }
          >
            {SITE_EMAIL}
          </a>
        </div>

        <div className="divider" />

        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            For readers and community, join David on Substack, or follow along:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={EXTERNAL_LINKS.fictionSubstack}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-sm"
              onClick={() =>
                trackCtaClick({
                  ctaId: "about_fiction_substack",
                  ctaLabel: "Fiction Substack",
                  ctaLocation: "about_contact_substack_links",
                  destinationUrl: EXTERNAL_LINKS.fictionSubstack,
                  destinationKind: "external",
                })
              }
            >
              Fiction Substack
            </a>
            <a
              href={EXTERNAL_LINKS.healingSubstack}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-sm"
              onClick={() =>
                trackCtaClick({
                  ctaId: "about_healing_substack",
                  ctaLabel: "Inner Child Journal",
                  ctaLocation: "about_contact_substack_links",
                  destinationUrl: EXTERNAL_LINKS.healingSubstack,
                  destinationKind: "external",
                })
              }
            >
              Inner Child Journal
            </a>
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-sm"
              onClick={() =>
                trackCtaClick({
                  ctaId: "about_instagram",
                  ctaLabel: "Instagram",
                  ctaLocation: "about_contact_substack_links",
                  destinationUrl: EXTERNAL_LINKS.instagram,
                  destinationKind: "external",
                })
              }
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
  );
};

export default About;
