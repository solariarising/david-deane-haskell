import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import fictionBooks from "@/assets/fiction-books.jpg";
import solarianHero from "@/assets/solarian-deep-hero.jpg";
import woundedAngels from "@/assets/wounded-angels.jpg";
import tommytune from "@/assets/tommytune-cover.jpg";

interface BookCardProps {
  title: string;
  description: string;
  buyUrl: string;
  buyLabel?: string;
}

const BookCard = ({ title, description, buyUrl, buyLabel = "Buy Novel" }: BookCardProps) => (
  <div className="space-y-4">
    <h3 className="heading-subsection">{title}</h3>
    <p className="body-text">{description}</p>
    <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-6">
      {buyLabel}
    </a>
  </div>
);

const Books = () => {
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
    {/* Sci-Fi Zone */}
    <div className="zone-scifi">
      {/* Hero */}
      <section className="section-spacing pb-8">
        <div className="page-container text-center max-w-3xl mx-auto space-y-6">
          <h1 className="heading-display">Books & Writing</h1>
          <p className="body-large">
            Browse the complete bibliography of David Deane Haskell. Speculative fiction, suspense thrillers, and a groundbreaking healing memoir.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Fiction */}
      <section className="section-spacing">
        <div className="page-container space-y-16">
          <div className="text-center space-y-2">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Fiction</p>
            <h2 className="heading-section">Technothrillers & Visionary Worlds</h2>
          </div>

          {/* Featured: Solarian Deep */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <a href="https://www.amazon.com/dp/B0GPN8DBJS" target="_blank" rel="noopener noreferrer">
              <img src={solarianHero} alt="The Solarian Deep" className="w-full rounded-sm shadow-lg hover:shadow-xl transition-shadow cursor-pointer" />
            </a>
            <div className="space-y-4">
              <h3 className="heading-subsection">The Solarian Deep</h3>
              <p className="body-text">Book 1 of the Technoquatics Series plunges you into a world where humanity must adapt or perish beneath the waves. Click the cover and dive in.</p>
            </div>
          </div>

          {/* Collection image */}
          <div className="flex justify-center">
            <img src={fictionBooks} alt="David's fiction collection" className="w-full max-w-lg rounded-sm shadow-lg" />
          </div>

          {/* Other novels grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <BookCard
              title="Emergence"
              description="In the gleaming city of Tera-Prime, the future has just been cancelled. Alixs uncovers a 'kill switch' designed to wipe his people from existence. Marked for death, he must run into the shadows of the underground to expose the dangerous truth."
              buyUrl="https://dl.bookfunnel.com/k7osg3nq37"
              buyLabel="Read Free"
            />
            <BookCard
              title="The Gold Club"
              description="He found a loophole in the world's biggest corporate wallet. Now they want their change. Buried in the Sahara warehouse, Ted starts a multimillion-dollar shadow operation right under the nose of management."
              buyUrl="https://www.amazon.com/Gold-Club-White-Collar-Thriller-ebook/dp/B014XQH6M6"
            />
            <BookCard
              title="Dark Alignment"
              description="They erased his research. Then they erased him. Dean Eckert found a ghost in the atmospheric data—an anomaly that defies physics. Now he has to solve the most dangerous equation in history before the sky falls."
              buyUrl="https://www.amazon.com/Dark-Alignment-Dystopian-SciFi-Adventure-ebook/dp/B07B6XCDMM"
            />
            <BookCard
              title="Too Much Information"
              description="SecureSystems isn't just scanning for weapons. They're harvesting lives. Rob Folsom thought he was filing a simple lawsuit. Instead, he uncovered a data harvest that makes Big Brother look like an amateur."
              buyUrl="https://www.amazon.com/Too-Much-Information-David-Haskell/dp/1517788323"
            />
          </div>

          {/* TommyTune */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={tommytune} alt="TommyTune - A Resona Series Short Story" className="w-full max-w-sm mx-auto rounded-sm shadow-lg" />
            <BookCard
              title="TommyTune"
              description="A Resona Series short story. A glimpse into the world of The Vibrants—where music, memory, and identity collide in unexpected ways."
              buyUrl="https://dl.bookfunnel.com/k7osg3nq37"
              buyLabel="Read Free"
            />
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
            The boldest futures are built by those brave enough to heal their past.
          </h2>
        </div>
      </section>
    </div>

    {/* Healing Zone — Non-Fiction */}
    <div className="zone-healing" id="wounded-angels">
      <section className="section-spacing">
        <div className="page-container space-y-12">
          <div className="text-center space-y-2">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Non-Fiction</p>
            <h2 className="heading-section">Memoir & Inner Child Healing</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={woundedAngels} alt="Wounded Angels by David Deane Haskell" className="w-full max-w-sm mx-auto rounded-sm shadow-lg" />
            <div className="space-y-6">
              <h3 className="heading-subsection">Wounded Angels</h3>
              <p className="body-text italic font-heading text-lg">
                "I spent forty years buried under trauma and grief. I tried everything to escape—from the highs of creativity to the darkness of addiction—but nothing worked."
              </p>
              <p className="body-text">
                In this raw, unfolding transformation, David introduces the many facets of himself—those inner child figures suppressed for years—and how they healed each other in real-time. This is the truth behind the fiction.
              </p>
              <a
                href="https://mybook.to/woundedangels"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Access Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </PageLayout>
  );
};

export default Books;
