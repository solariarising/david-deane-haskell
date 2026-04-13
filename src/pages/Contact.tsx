import PageLayout from "@/components/PageLayout";
import logo from "@/assets/logo.webp";
import { EXTERNAL_LINKS, SITE_EMAIL } from "@/siteConfig";

const Contact = () => {
  return (
    <PageLayout>
      <section className="section-spacing">
        <div className="page-container max-w-2xl mx-auto space-y-12">
          <div className="space-y-6 text-center">
            <img
              src={logo}
              alt="David Deane Haskell monogram logo"
              className="w-24 h-24 mx-auto rounded-full"
              loading="eager"
              decoding="async"
              width={96}
              height={96}
            />
            <h1 className="heading-display">Get in Touch</h1>
            <p className="body-large">
              For interviews, podcasts, speaking invitations, clinics, workshops, one-on-one sessions, or select collaborations, get in touch.
            </p>
          </div>

          <div className="divider" />

          <div className="space-y-6 text-center">
            <p className="body-text">
              David Deane Haskell is the author of <em>The Solarian Deep</em>, <em>Emergence</em>, and <em>Wounded Angels</em>. His work spans speculative fiction, personal nonfiction, and conversations about creativity, transformation, and what keeps us human.
            </p>
          </div>

          <div className="divider" />

          <div className="text-center space-y-4">
            <p className="body-text">
              The best way to reach David is by email:
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="btn-primary inline-block"
            >
              EMAIL DAVID
            </a>
          </div>

          <div className="divider" />

          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              For readers and community, join David on Substack:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={EXTERNAL_LINKS.fictionSubstack}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent text-sm"
              >
                Fiction Substack
              </a>
              <a
                href={EXTERNAL_LINKS.healingSubstack}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent text-sm"
              >
                Inner Child Journal
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
