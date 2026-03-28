import PageLayout from "@/components/PageLayout";
import profile from "@/assets/profile.jpg";

const About = () => (
  <PageLayout>
    <section className="section-spacing">
      <div className="page-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <img
              src={profile}
              alt="David Deane Haskell"
              className="w-full max-w-md rounded-sm shadow-lg"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="space-y-6">
            <h1 className="heading-display">About David</h1>
            <div className="space-y-5 body-text">
              <p>
                David Deane Haskell is a novelist, visionary, and storyteller working at the frontier of speculative fiction and human transformation.
              </p>
              <p>
                His science fiction blends bold, tech-heavy futures with long-lost truths—worlds where artificial intelligence meets ancient consciousness, where domed cities hum with secrets, and the loving heart always finds a way to short-circuit the machine. These are stories of what we might become when we stop forgetting who we are.
              </p>
              <p>
                His memoir, <em>Wounded Angels</em>, takes a different path—inward. It's a raw, intimate journey through despair, hopelessness, and the long road to peace. A homecoming to the parts of ourselves we left behind. Because sometimes, the bravest act of all is simply coming back to yourself—so you can step forward again.
              </p>
              <p>
                David is currently wandering around Asia, writing from the edge of where the old world ends and the new one begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
