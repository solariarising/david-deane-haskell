import PageLayout from "@/components/PageLayout";

const Drumming = () => (
  <PageLayout>
    <section className="section-spacing">
      <div className="page-container max-w-3xl mx-auto space-y-12">
        <div className="space-y-6 text-center">
          <h1 className="heading-display">Drumming</h1>
          <p className="body-large">
            Before the words, there was rhythm. David has been a drummer and percussionist for over two decades—performing, recording, and teaching.
          </p>
        </div>

        <div className="divider" />

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="heading-subsection">Performance</h2>
            <p className="body-text">
              From intimate jazz sessions to full-band rock and world music stages, drumming has always been David's first language. It's primal, honest, and immediate—the same qualities he brings to his writing.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="heading-subsection">Teaching</h2>
            <p className="body-text">
              David teaches drums to students of all levels—beginners finding their first groove, and experienced players looking to break old patterns. Lessons focus on feel, timing, and musicality over mechanical perfection.
            </p>
            <p className="body-text">
              Whether you're picking up sticks for the first time or refining your craft, the approach is the same: listen, feel, play.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="heading-subsection">Philosophy</h2>
            <p className="body-text">
              Drumming isn't just about keeping time. It's about presence. It's meditation with your hands. Every session is a chance to get out of your head and into your body—something David writes about often, and lives daily.
            </p>
          </div>
        </div>

        <div className="divider" />

        <div className="text-center space-y-4">
          <p className="body-text">Interested in lessons or collaboration?</p>
          <a href="/contact" className="btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Drumming;
