import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import solarianHero from "@/assets/solarian-deep-hero.jpg";
import fictionBooks from "@/assets/fiction-books.jpg";
import woundedAngels from "@/assets/wounded-angels.jpg";

const Home = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="page-container section-spacing">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="heading-display">
              Stories that heal.<br />
              <span className="text-muted-foreground">Worlds that awaken.</span>
            </h1>
            <p className="body-large max-w-lg">
              Science fiction at the edge of consciousness. Memoir from the depths of transformation. The work of David Deane Haskell.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/books" className="btn-primary">Explore the Books</Link>
              <a
                href="https://dl.bookfunnel.com/k7osg3nq37"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Free Fiction
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

    {/* Divider */}
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

    <div className="divider" />

    {/* Memoir Section */}
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
            <Link to="/books" className="btn-outline">Read More</Link>
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
        <h2 className="heading-section">Begin with two free stories.</h2>
        <p className="body-text">
          Get instant access to two of David's short stories—no spam, just fiction that stays with you.
        </p>
        <a
          href="https://dl.bookfunnel.com/k7osg3nq37"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Join for Free Fiction
        </a>
      </div>
    </section>
  </PageLayout>
);

export default Home;
