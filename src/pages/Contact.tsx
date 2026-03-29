import PageLayout from "@/components/PageLayout";
import logo from "@/assets/logo.png";

const Contact = () => {
  return (
    <PageLayout>
      <section className="section-spacing">
        <div className="page-container max-w-2xl mx-auto space-y-12">
          <div className="space-y-6 text-center">
            <img
              src={logo}
              alt="David Deane Haskell"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h1 className="heading-display">Get in Touch</h1>
            <p className="body-large">
              For books, interviews, podcast appearances, speaking invitations, or thoughtful collaboration, get in touch.
            </p>
          </div>

          <div className="divider" />

          <div className="space-y-6 text-center">
            <p className="body-text">
              David is the author of the sci-fi novel <em>The Solarian Deep</em>, the foundational thriller <em>Emergence</em>, and the inner-child healing memoir <em>Wounded Angels</em>. His work spans the distance between envisioning hopeful futures and integrating the past—and he brings that same range to everything he does in person.
            </p>
            <p className="body-text">
              He is available for interviews, podcast guest appearances, speaking, clinics and workshops, one-on-one educational sessions, and select collaborations.
            </p>
          </div>

          <div className="divider" />

          <div className="text-center space-y-4">
            <p className="body-text">
              The best way to reach David is by email:
            </p>
            <a
              href="mailto:david@daviddeanehaskell.com"
              className="btn-primary inline-block"
            >
              david@daviddeanehaskell.com
            </a>
          </div>

          <div className="divider" />

          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              For readers and community, join David on Substack:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://daviddeanehaskellstories.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent text-sm"
              >
                Fiction Substack
              </a>
              <a
                href="https://innerchildjournal.substack.com"
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
