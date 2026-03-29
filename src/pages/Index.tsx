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
        <section className="relative overflow-hidden">
          <div className="page-container section-spacing">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="animate-fade-in">
                <a href="https://www.amazon.com/dp/B0GPN8DBJS" target="_blank" rel="noopener noreferrer">
                  <img
                    src={solarianHero}
                    alt="The Solarian Deep by David Deane Haskell"
                    className="w-full rounded-sm shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    loading="eager"
                    decoding="async"
                  />
                </a>
              </div>
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h1 className="heading-display">
                  Stories that heal.<br />
                  <span style={{ color: "hsl(195 85% 45%)" }}>Worlds that awaken.</span>
                </h1>
                <p className="body-large max-w-lg">
                  David Deane Haskell writes fiction, essays, and healing-centered memoir about how we heal the past, understand the present, and imagine a future worth living in. Start with <em>The Solarian Deep</em> — or explore the free fiction vault.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.amazon.com/dp/B0GPN8DBJS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Start with The Solarian Deep
                  </a>
                  <Link to="/vault" className="btn-outline">
                    Get Free Bonus Fiction
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Where to Start */}
        <section className="section-spacing">
          <div className="page-container max-w-3xl mx-auto">
            <div className="text-center space-y-2 mb-12">
              <h2 className="heading-section">Where to Start</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-medium text-foreground">The Solarian Deep</h3>
                <p className="body-text text-sm">Gripping speculative fiction. A world beneath the waves where humanity must adapt or perish.</p>
                <a
                  href="https://www.amazon.com/dp/B0GPN8DBJS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent text-sm"
                >
                  Buy Novel →
                </a>
              </div>
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-medium text-foreground">Wounded Angels</h3>
                <p className="body-text text-sm">A raw memoir of inner-child healing — the truth behind the fiction.</p>
                <a
                  href="https://mybook.to/woundedangels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent text-sm"
                >
                  Buy Memoir →
                </a>
              </div>
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-medium text-foreground">Free Fiction Vault</h3>
                <p className="body-text text-sm">A short story and a full novel — free. No spam, just resonant sci-fi.</p>
                <Link to="/vault" className="link-accent text-sm">
                  Explore Free →
                </Link>
              </div>
            </div>
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
