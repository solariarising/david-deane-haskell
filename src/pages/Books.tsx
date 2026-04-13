import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import fictionBooks from "@/assets/fiction-books.webp";
import solarianHero from "@/assets/solarian-deep-hero.webp";
import woundedAngels from "@/assets/wounded-angels.webp";
import tommytune from "@/assets/tommytune-cover.webp";
import { EXTERNAL_LINKS } from "@/siteConfig";

interface BookCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  buyUrl: string;
  buyLabel?: string;
}

const BookCard = ({ id, title, subtitle, description, buyUrl, buyLabel = "Buy Novel" }: BookCardProps) => (
  <article id={id} className="space-y-4 scroll-mt-28">
    <div>
      <h3 className="heading-subsection">{title}</h3>
      {subtitle && <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{subtitle}</p>}
    </div>
    <p className="body-text">{description}</p>
    <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-6">
      {buyLabel}
    </a>
  </article>
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
    {/* Scifi Zone */}
    <div className="zone-scifi">
      {/* Hero */}
      <section className="section-spacing pb-8">
        <div className="page-container text-center max-w-3xl mx-auto space-y-6">
          <h1 className="heading-display">Books</h1>
          <p className="body-large">
            Begin with <em>The Solarian Deep</em> for scifi, <em>Wounded Angels</em> for healing, or visit the <Link to="/vault" className="link-accent">Free Fiction Vault</Link> to see what resonates.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Scifi */}
      <section className="section-spacing">
        <div className="page-container space-y-16">
          {/* Featured: Solarian Deep */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <a href={EXTERNAL_LINKS.solarianDeepAmazon} target="_blank" rel="noopener noreferrer">
              <img src={solarianHero} alt="The Solarian Deep — Book 1 of the Technoquatics Series by David Deane Haskell" className="w-full rounded-sm shadow-lg hover:shadow-xl transition-shadow cursor-pointer" loading="eager" decoding="async" width={1536} height={1024} />
            </a>
            <article id="the-solarian-deep" className="space-y-4 scroll-mt-28">
              <h3 className="heading-subsection">The Solarian Deep</h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Novel — Book 1 of the Technoquatics Series</p>
              <p className="body-text">David Deane Haskell's latest novel, <em>The Solarian Deep</em>—start reading now.</p>
              <a href={EXTERNAL_LINKS.solarianDeepAmazon} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                READ THE SOLARIAN DEEP
              </a>
            </article>
          </div>

          {/* Collection image */}
          <div className="flex justify-center">
            <img src={fictionBooks} alt="Fiction book collection by David Deane Haskell including Emergence, Dark Alignment, The Gold Club, and Too Much Information" className="w-full max-w-lg rounded-sm shadow-lg" loading="lazy" decoding="async" width={781} height={1182} />
          </div>

          {/* Other novels grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <BookCard
              id="emergence"
              title="Emergence"
              subtitle="Standalone Novel"
              description="In the gleaming city of Tera-Prime, the future has just been cancelled. Alixs uncovers a 'kill switch' designed to wipe his people from existence. Marked for death, he must run into the shadows of the underground to expose the dangerous truth."
              buyUrl={EXTERNAL_LINKS.freeFiction}
              buyLabel="Read for Free"
            />
            <BookCard
              id="the-gold-club"
              title="The Gold Club"
              subtitle="Standalone Novel"
              description="He found a loophole in the world's biggest corporate wallet. Now they want their change. Buried in the Sahara warehouse, Ted starts a multimillion-dollar shadow operation right under the nose of management."
              buyUrl="https://www.amazon.com/Gold-Club-White-Collar-Thriller-ebook/dp/B014XQH6M6"
              buyLabel="Buy Novel"
            />
            <BookCard
              id="dark-alignment"
              title="Dark Alignment"
              subtitle="Standalone Novel"
              description="They erased his research. Then they erased him. Dean Eckert found a ghost in the atmospheric data—an anomaly that defies physics. Now he has to solve the most dangerous equation in history before the sky falls."
              buyUrl="https://www.amazon.com/Dark-Alignment-Dystopian-SciFi-Adventure-ebook/dp/B07B6XCDMM"
              buyLabel="Buy Novel"
            />
            <BookCard
              id="too-much-information"
              title="Too Much Information"
              subtitle="Standalone Novel"
              description="SecureSystems isn't just scanning for weapons. They're harvesting lives. Rob Folsom thought he was filing a simple lawsuit. Instead, he uncovered a data harvest that makes Big Brother look like an amateur."
              buyUrl="https://www.amazon.com/Too-Much-Information-David-Haskell/dp/1517788323"
              buyLabel="Buy Novel"
            />
          </div>

          {/* TommyTune */}
          <div id="tommytune" className="grid md:grid-cols-2 gap-12 items-center scroll-mt-28">
            <img src={tommytune} alt="Tommytune — a short story set in The Vibrants world by David Deane Haskell" className="w-full max-w-sm mx-auto rounded-sm shadow-lg" loading="lazy" decoding="async" width={600} height={900} />
            <BookCard
              title="Tommytune"
              subtitle="Short Story"
              description="A Resona Series short story. A glimpse into the world of The Vibrants—where music, memory, and identity collide in unexpected ways."
              buyUrl={EXTERNAL_LINKS.freeFiction}
              buyLabel="Read for Free"
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
    <div className="zone-healing scroll-mt-28" id="wounded-angels">
      <section className="section-spacing">
        <div className="page-container space-y-12">
          <div className="text-center space-y-2">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Non-Fiction</p>
            <h2 className="heading-section">Memoir & Inner Child Healing</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={woundedAngels} alt="Wounded Angels — healing memoir by David Deane Haskell about inner child work and recovery" className="w-full max-w-sm mx-auto rounded-sm shadow-lg" loading="lazy" decoding="async" width={739} height={1182} />
            <div className="space-y-6">
              <h3 className="heading-subsection">Wounded Angels</h3>
              <p className="body-text italic font-heading text-lg">
                "I spent forty years buried under trauma and grief. I tried everything to escape—from the highs of creativity to the darkness of addiction—but nothing worked."
              </p>
              <p className="body-text">
                In this raw, unfolding transformation, David introduces the many facets of himself—those inner child figures suppressed for years—and how they healed each other in real-time. This is the truth behind the fiction.
              </p>
              <a href={EXTERNAL_LINKS.woundedAngels} target="_blank" rel="noopener noreferrer" className="btn-primary">
                LEARN MORE
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
