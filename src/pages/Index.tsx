import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import FreeFictionPopup from "@/components/FreeFictionPopup";
import heroBrand from "@/assets/hero-author-brand.webp";
import woundedAngels from "@/assets/wounded-angels.webp";
import { trackCtaClick } from "@/lib/analytics";

const HERO_LINES = [
  { text: "Systems Reward Appearance Over Truth", delay: 350, weight: 700 },
  { text: "Truth Is What They Fear", delay: 2000, weight: 700 },
  { text: "What You Call Truth, They Call Dangerous", delay: 4100, weight: 800 },
] as const;

function HeroLine({ text, delay, weight, isFirst, scaleDown }: { text: string; delay: number; weight: number; isFirst?: boolean; scaleDown?: boolean }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (visible && ref.current) {
      const el = ref.current;
      el.style.setProperty("--sweep", "0");
      requestAnimationFrame(() => {
        el.style.transition = "none";
        el.style.setProperty("--sweep", "0");
        requestAnimationFrame(() => {
          el.style.transition = "--sweep 1s ease-out";
          el.style.setProperty("--sweep", "1");
        });
      });
    }
  }, [visible]);

  return (
    <span
      ref={ref}
      className="block transition-all ease-out"
      style={{
        opacity: visible ? 1 : (isFirst ? 0.12 : 0),
        transform: visible ? "translateY(0) scale(1)" : "translateY(14px) scale(0.97)",
        filter: visible ? "blur(0px)" : (isFirst ? "blur(2px)" : "blur(5px)"),
        fontWeight: weight,
        backgroundImage: visible
          ? "linear-gradient(90deg, transparent 0%, hsl(195 80% 70% / 0.2) 40%, transparent 80%)"
          : "none",
        backgroundSize: "200% 100%",
        backgroundPosition: visible ? "100% 0" : "0% 0",
        WebkitBackgroundClip: "text",
        transitionProperty: "opacity, transform, filter, background-position",
        transitionDuration: "0.9s, 0.9s, 0.8s, 1.2s",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <span style={scaleDown ? { display: "inline-block", fontSize: "0.96em" } : undefined}>
        {text}
      </span>
    </span>
  );
}

const Home = () => {
  const [showSupport, setShowSupport] = useState(false);
  const [showCta, setShowCta] = useState(false);

  // Sequential reveal: support line after last headline, then CTA
  useEffect(() => {
    const lastLineEnd = 5000;
    const t1 = setTimeout(() => setShowSupport(true), lastLineEnd + 500);
    const t2 = setTimeout(() => setShowCta(true), lastLineEnd + 1100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <div className="zone-scifi">
        <section className="relative -mt-16 md:-mt-20">
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <img
              src={heroBrand}
              alt="Atmospheric deep-ocean science fiction scene evoking consciousness, technology, and survival"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
              {...{ fetchpriority: "high" }}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto space-y-5 pt-4 md:pt-12">
              <h1 className="sr-only">David Deane Haskell</h1>
              <div
                className="text-xl md:text-[1.75rem] lg:text-[2rem] font-heading max-w-2xl mx-auto"
                style={{ color: "hsl(200 20% 85%)", lineHeight: "1.65" }}
                aria-label="Systems Reward Appearance Over Truth. Truth Is What They Fear. What You Call Truth, They Call Dangerous."
              >
                {HERO_LINES.map((line, i) => (
                  <HeroLine key={line.text} {...line} isFirst={i === 0} scaleDown={i === 0} />
                ))}
              </div>

              <p
                className="text-sm md:text-base font-body text-center transition-all duration-700 ease-out"
                style={{
                  color: "hsl(200 15% 64%)",
                  opacity: showSupport ? 1 : 0,
                  transform: showSupport ? "translateY(0)" : "translateY(6px)",
                }}
              >
                These books were written for the ones who already know.
                <br />
                Start with Tommytune and Emergence&nbsp;— two free stories that pull you inside.
              </p>

              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 transition-all duration-700 ease-out"
                style={{
                  opacity: showCta ? 1 : 0,
                  transform: showCta ? "translateY(0)" : "translateY(6px)",
                }}
              >
                <a
                  href="https://dl.bookfunnel.com/k7osg3nq37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base px-10 py-4"
                  onClick={() =>
                    trackCtaClick({
                      ctaId: "home_read_free_stories",
                      ctaLabel: "READ THE FREE STORIES",
                      ctaLocation: "home_hero",
                      destinationUrl: "https://dl.bookfunnel.com/k7osg3nq37",
                      destinationKind: "external",
                    })
                  }
                >
                  READ THE FREE STORIES
                </a>
                <Link
                  to="/books"
                  className="btn-outline"
                  onClick={() =>
                    trackCtaClick({
                      ctaId: "home_explore_books",
                      ctaLabel: "Explore the Books",
                      ctaLocation: "home_hero",
                      destinationUrl: "/books",
                      destinationKind: "internal",
                    })
                  }
                >
                  Explore the Books
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Books By */}
        <section className="section-spacing">
          <div className="page-container max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl font-body" style={{ color: "hsl(var(--scifi-muted))" }}>
              Scifi novels, healing memoirs, and short stories.
            </p>
          </div>
        </section>
      </div>

      {/* Transition Bridge */}
      <div className="zone-bridge">
        <section className="py-20 md:py-28">
          <div className="page-container text-center max-w-2xl mx-auto space-y-4">
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "hsl(195 60% 50%)" }}>
              From vision to healing
            </p>
            <h2 className="heading-section text-2xl md:text-3xl italic font-light">
              Hopeful futures can only spring from a past that has received its healing.
            </h2>
          </div>
        </section>
      </div>

      {/* Memoir Section — Healing Zone */}
      <div className="zone-healing">
        <section className="section-spacing">
          <div className="page-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:order-1">
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Healing & Memoir</p>
                <h2 className="heading-section">
                  A journey from trauma to peace.
                </h2>
                <p className="body-text">
                  Honest explorations of the Inner Child, mindfulness, and the path to healing. Raw, unfolding, and deeply human.
                </p>
                <Link
                  to="/books#wounded-angels"
                  className="btn-outline"
                  onClick={() =>
                    trackCtaClick({
                      ctaId: "home_wounded_angels_learn_more",
                      ctaLabel: "Learn More",
                      ctaLocation: "home_healing_section",
                      destinationUrl: "/books#wounded-angels",
                      destinationKind: "internal",
                    })
                  }
                >
                  Learn More
                </Link>
              </div>
              <div className="md:order-0">
                <img
                  src={woundedAngels}
                  alt="Wounded Angels by David Deane Haskell"
                  className="w-full max-w-sm mx-auto rounded-sm shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <FreeFictionPopup />
    </PageLayout>
  );
};

export default Home;
