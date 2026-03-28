import PageLayout from "@/components/PageLayout";
import vaultBooks from "@/assets/vault-books-composite.jpg";

const Vault = () => (
  <PageLayout>
    <div className="zone-scifi">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle animated background grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, hsl(195 80% 50%) 0px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(90deg, hsl(195 80% 50%) 0px, transparent 1px, transparent 60px)`,
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]" style={{
          background: "radial-gradient(circle, hsl(195 100% 50%), transparent 70%)",
        }} />

        <div className="page-container section-spacing relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <p className="text-xs uppercase tracking-[0.4em]" style={{ color: "hsl(195 85% 45%)" }}>
              Free Fiction Vault
            </p>
            <h1 className="heading-display">
              Bonus Stories.<br />
              <span style={{ color: "hsl(195 85% 45%)" }}>Start Here.</span>
            </h1>
            <p className="body-large">
              A standalone story and a full-length novel, free when you join.
            </p>
            <a
              href="https://dl.bookfunnel.com/k7osg3nq37"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Your Free Fiction
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Books Section */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex justify-center">
              <img
                src={vaultBooks}
                alt="Tommytune and Emergence — Free bonus stories by David Deane Haskell"
                className="w-full max-w-md rounded-sm shadow-lg"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-5">
                <h2 className="heading-section">What's Inside the Vault</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-medium" style={{ color: "hsl(195 85% 45%)" }}>
                      Tommytune
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">A Resona Series Short Story</p>
                    <p className="body-text">
                      A standalone story set on the edge of a larger world—where resonance, confidence, and identity collide in vibrant, unexpected ways. Your first glimpse into the Resona universe.
                    </p>
                  </div>

                  <div className="h-px w-12" style={{ background: "hsl(var(--scifi-border))" }} />

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-medium" style={{ color: "hsl(195 85% 45%)" }}>
                      Emergence
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">A Full-Length Sci-Fi Novel</p>
                    <p className="body-text">
                      In the gleaming city of Tera-Prime, the future has just been cancelled. Alixs uncovers a kill switch designed to wipe his people from existence. Marked for death, he must run into the shadows of the underground to expose the chilling truth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Who it's for */}
      <section className="section-spacing">
        <div className="page-container text-center max-w-2xl mx-auto space-y-6">
          <p className="body-large italic font-heading">
            For readers drawn to science fiction with relentless tension, sweeping vision, and existential stakes. About people trying to stay human inside systems that don't care whether they survive.
          </p>
          <a
            href="https://dl.bookfunnel.com/k7osg3nq37"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get My Bonus Stories
          </a>
          <p className="text-xs text-muted-foreground tracking-wide">
            No spam. Forever free. Unsubscribe any time.
          </p>
        </div>
      </section>
    </div>
  </PageLayout>
);

export default Vault;
