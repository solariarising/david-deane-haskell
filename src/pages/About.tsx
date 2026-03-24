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
            />
          </div>
          <div className="space-y-6">
            <h1 className="heading-display">About David</h1>
            <div className="space-y-5 body-text">
              <p>
                David Deane Haskell writes how transformation feels—from trauma to healing, disconnection to self-return.
              </p>
              <p>
                His memoir, <em>Wounded Angels</em>, is a raw, intimate dive into despair, hopelessness, and the long road to peace. His science fiction blends visionary imagery with the truths they reflect—where tech-heavy futures meet long-lost truths, and the loving heart always finds a way to short-circuit the machine.
              </p>
              <p>
                David is currently wandering around Asia for a while, writing from the edge of where the old world ends and the new one begins.
              </p>
            </div>
            <div className="divider !mx-0 !w-12 my-8" />
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              A quick note on the name: David Deane Haskell is an author of optimistic sci-fi and inner-child healing memoirs. He is not the British-American biologist David George Haskell, and is completely unaffiliated with the Haskell programming language.
            </p>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
