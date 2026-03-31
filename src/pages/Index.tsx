import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import solarianHero from "@/assets/solarian-deep-hero.jpg";
import woundedAngels from "@/assets/wounded-angels.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("freeStoriesPopupShown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem("freeStoriesPopupShown", "true");
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      {/* Hero — Sci-Fi Zone */}
      <div className="zone-scifi">
        <section className="relative -mt-16 md:-mt-20">
          {/* Full-viewport hero image */}
          {/* Full-viewport hero image */}
          <div className="relative min-h-screen overflow-hidden">
            <img
              src={solarianHero}
              alt="The Solarian Deep by David Deane Haskell"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Content below hero */}
          <div className="text-center py-12 md:py-16 px-6 space-y-6 animate-fade-in max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight" style={{ color: "hsl(var(--scifi-fg))" }}>
              Stories that heal.<br />
              <span style={{ color: "hsl(195 85% 55%)" }}>Worlds that awaken.</span>
            </h1>
            <a
              href="https://www.amazon.com/dp/B0GPN8DBJS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Start with The Solarian Deep
            </a>
          </div>
        </section>

        <div className="divider" />

        {/* Books By */}
        <section className="section-spacing">
          <div className="page-container max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl font-body" style={{ color: "hsl(var(--scifi-muted))" }}>
              Speculative fiction novels, healing memoirs, and short stories by David Deane Haskell.
            </p>
          </div>
        </section>

        {/* Free Bonus Stories */}
        <section className="section-spacing">
          <div className="page-container text-center max-w-2xl mx-auto space-y-6">
            <h2 className="heading-section">Begin with free bonus stories.</h2>
            <p className="body-text">
              Start exploring David's science fiction right now for free—no spam, just fiction that resonates.
            </p>
            <Link to="/vault" className="btn-primary">
              Free Bonus Stories
            </Link>
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
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Memoir & Recovery</p>
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

      {/* Timed free stories popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-md text-center space-y-6 bg-background border-border">
          <div className="space-y-4 pt-4">
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "hsl(195 85% 45%)" }}>
              Free Fiction
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              Start with free fiction.
            </h2>
            <p className="body-text text-sm">
              Get <em>Tommytune</em> plus <em>Emergence</em> — a short story and a full novel — and step into David Deane Haskell's fiction world for free.
            </p>
          </div>
          <a
            href="https://dl.bookfunnel.com/k7osg3nq37"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
            onClick={() => setShowPopup(false)}
          >
            Get Free Bonus Fiction
          </a>
          <p className="text-xs text-muted-foreground">
            No spam. Just resonant sci-fi and occasional updates.
          </p>
          <button
            onClick={() => setShowPopup(false)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            No thanks, maybe later
          </button>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Home;
