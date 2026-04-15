import { Link } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import heroBrand from "@/assets/hero-author-brand.webp";
import woundedAngels from "@/assets/wounded-angels.webp";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const POPUP_STORAGE_KEY = "freeStoriesPopupDismissed";
const POPUP_SIGNUP_KEY = "freeStoriesSignedUp";
const SUPPRESS_DAYS = 7;

function shouldSuppressPopup() {
  if (sessionStorage.getItem("freeStoriesPopupShownThisSession")) return true;
  if (localStorage.getItem(POPUP_SIGNUP_KEY)) return true;
  const dismissed = localStorage.getItem(POPUP_STORAGE_KEY);
  if (dismissed) {
    const diff = Date.now() - Number(dismissed);
    if (diff < SUPPRESS_DAYS * 24 * 60 * 60 * 1000) return true;
  }
  return false;
}

const HERO_LINES = [
  { text: "They Control Us All.", delay: 0, weight: 700 },
  { text: "Only Truth Will Stop Them.", delay: 1400, weight: 700 },
  { text: "We All Pay the Price.", delay: 3200, weight: 800 },
];

function HeroLine({ text, delay, weight }: { text: string; delay: number; weight: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (visible && ref.current) {
      // light sweep
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
      className="block transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        filter: visible ? "blur(0px)" : "blur(3px)",
        fontWeight: weight,
        backgroundImage: visible
          ? "linear-gradient(90deg, transparent 0%, hsl(195 80% 70% / 0.15) 40%, transparent 80%)"
          : "none",
        backgroundSize: "200% 100%",
        backgroundPosition: visible ? "100% 0" : "0% 0",
        WebkitBackgroundClip: "text",
        transitionProperty: "opacity, transform, filter, background-position",
        transitionDuration: "0.7s, 0.7s, 0.7s, 1s",
      }}
    >
      {text}
    </span>
  );
}

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showCta, setShowCta] = useState(false);

  const triggerPopup = useCallback(() => {
    if (shouldSuppressPopup()) return;
    setShowPopup(true);
    sessionStorage.setItem("freeStoriesPopupShownThisSession", "true");
  }, []);

  const dismissPopup = useCallback(() => {
    setShowPopup(false);
    localStorage.setItem(POPUP_STORAGE_KEY, String(Date.now()));
  }, []);

  const handleSignupClick = useCallback(() => {
    setShowPopup(false);
    localStorage.setItem(POPUP_SIGNUP_KEY, "true");
  }, []);

  // Sequential reveal: support line after last headline, then CTA
  useEffect(() => {
    const lastLineEnd = 3200 + 700; // last delay + animation duration
    const t1 = setTimeout(() => setShowSupport(true), lastLineEnd + 500);
    const t2 = setTimeout(() => setShowCta(true), lastLineEnd + 1100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (shouldSuppressPopup()) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) triggerPopup();
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.5) triggerPopup();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(triggerPopup, 45000);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [triggerPopup]);

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
                className="text-2xl md:text-4xl font-heading leading-tight max-w-xl mx-auto"
                style={{ color: "hsl(200 20% 85%)" }}
                aria-label="They Control Us All. Only Truth Will Stop Them. We All Pay the Price."
              >
                {HERO_LINES.map((line) => (
                  <HeroLine key={line.text} {...line} />
                ))}
              </div>

              <p
                className="text-sm md:text-base font-body whitespace-nowrap transition-all duration-700 ease-out"
                style={{
                  color: "hsl(200 15% 58%)",
                  opacity: showSupport ? 1 : 0,
                  transform: showSupport ? "translateY(0)" : "translateY(6px)",
                }}
              >
                Start with Tommytune and Emergence — two free stories.
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
                  onClick={handleSignupClick}
                >
                  READ THE FREE STORIES
                </a>
                <Link to="/books" className="btn-outline">
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
                <Link to="/books#wounded-angels" className="btn-outline">Learn More</Link>
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

      {/* Free fiction popup */}
      <Dialog open={showPopup} onOpenChange={(open) => { if (!open) dismissPopup(); }}>
        <DialogContent className="sm:max-w-md text-center space-y-6" style={{ background: "hsl(220 25% 10%)", borderColor: "hsl(195 60% 25%)" }}>
          <DialogTitle className="sr-only">Free Fiction Vault signup prompt</DialogTitle>
          <div className="space-y-4 pt-4">
            <p className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "hsl(195 85% 50%)" }}>
              Free Fiction Vault
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: "hsl(200 30% 90%)" }}>
              Two free reads are waiting.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(210 15% 58%)" }}>
              A standalone short story and a full-length novel, free when you join.
            </p>
          </div>
          <a
            href="https://dl.bookfunnel.com/k7osg3nq37"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
            onClick={handleSignupClick}
          >
            GET FREE FICTION
          </a>
          <button
            onClick={dismissPopup}
            className="text-xs transition-colors" style={{ color: "hsl(210 15% 45%)" }}
          >
            No thanks, maybe later
          </button>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Home;
