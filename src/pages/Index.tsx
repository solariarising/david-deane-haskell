import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import solarianHero from "@/assets/solarian-deep-hero.jpg";
import fictionBooks from "@/assets/fiction-books.jpg";
import woundedAngels from "@/assets/wounded-angels.jpg";

const Home = () => {
  return (

  return (
  <PageLayout>
    {/* Hero — Sci-Fi Zone */}
    <div className="zone-scifi">
      <section className="relative overflow-hidden">
        <div className="page-container section-spacing">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="heading-display">
                Stories that heal.<br />
                <span style={{ color: "hsl(195 85% 45%)" }}>Worlds that awaken.</span>
              </h1>
              <p className="body-large max-w-lg">
                Science fiction at the edge of consciousness. Memoir from the depths of transformation. The work of David Deane Haskell.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.amazon.com/dp/B0GPN8DBJS" target="_blank" rel="noopener noreferrer" className="btn-primary">Buy on Amazon</a>
                <Link to="/vault" className="btn-outline">Free Fiction</Link>
                </a>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <a href="https://www.amazon.com/dp/B0GPN8DBJS" target="_blank" rel="noopener noreferrer">
                <img
                  src={solarianHero}
                  alt="The Solarian Deep by David Deane Haskell"
                  className="w-full rounded-sm shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SciFi Section */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src={fictionBooks}
              alt="David Deane Haskell's fiction collection"
              className="w-full max-w-md mx-auto rounded-sm shadow-lg"
            />
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">SciFi & Suspense</p>
              <h2 className="heading-section">
                Speculative fiction at the edge of AI, consciousness, and survival.
              </h2>
              <p className="body-text">
                From the Solarian Deep to the domed streets of Tera Prime—stories where tech-heavy futures meet long-lost truths, and the loving heart always finds a way to short-circuit the machine.
              </p>
              <Link to="/books" className="btn-outline">View All Books</Link>
            </div>
          </div>
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
              <a href="https://www.amazon.com/dp/B0DQST4RQ4" target="_blank" rel="noopener noreferrer" className="btn-outline">Buy on Amazon</a>
            </div>
            <div className="md:order-0">
              <img
                src={woundedAngels}
                alt="Wounded Angels by David Deane Haskell"
                className="w-full max-w-sm mx-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="section-spacing">
        <div className="page-container text-center max-w-2xl mx-auto space-y-6">
          <h2 className="heading-section">Begin with free bonus stories.</h2>
          <p className="body-text">
            Start exploring David's science fiction right now for free—no spam, just fiction that resonates.
          </p>
          <button onClick={() => setShowFreeStories(true)} className="btn-primary">
            Free Bonus Stories
          </button>
        </div>
      </section>

      {/* Free Stories Popup */}
      <Dialog open={showFreeStories} onOpenChange={setShowFreeStories}>
        <DialogContent className="zone-scifi border-primary/20 text-center max-w-md space-y-5 p-8">
          <DialogTitle className="heading-section text-xl">Free Bonus Stories</DialogTitle>
          <p className="body-text text-sm">
            Get instant access to David's bonus science fiction stories. Delivered straight to your inbox via BookFunnel—no spam, ever.
          </p>
          <a
            href="https://dl.bookfunnel.com/k7osg3nq37"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Get Your Free Stories
          </a>
        </DialogContent>
      </Dialog>
    </div>
  </PageLayout>
  );
};

export default Home;
