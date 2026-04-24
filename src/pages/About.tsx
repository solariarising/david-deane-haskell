import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import profile from "@/assets/profile.webp";
import { trackCtaClick } from "@/lib/analytics";

const About = () => (
  <PageLayout>
    <section className="section-spacing">
      <div className="page-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <img
              src={profile}
              alt="Portrait of author David Deane Haskell"
              className="w-full max-w-md rounded-sm shadow-lg"
              loading="eager"
              decoding="async"
              width={800}
              height={800}
            />
          </div>
          <div className="space-y-6">
            <h1 className="heading-display">About David</h1>
            <div className="space-y-5 body-text">
              <p>
                David Deane Haskell writes about what it means to make sense of a world that doesn't come with instructions—and that none of us make it through unscathed.
              </p>
              <p>
                His work explores that reckoning—through failure, obsession, and the slow reconstruction of the fractured self. Across speculative fiction, memoir-driven essays, and recovery-centered writing, he returns to outsiders, seekers, and wounded people trying to become whole without abandoning the parts of themselves that helped them survive.
              </p>
              <p>
                He is drawn to stories of evolution under pressure: societies reshaped by artificial intelligence, people unraveling within systems they don't understand, and the lonely, wrenching but ultimately beautiful work of learning to listen to the heart.
              </p>
              <p>
                Blending emotional honesty with speculative reach, his writing moves through technology, spirituality, trauma, and imagination to explore shame, connection, creativity, and the lifelong process of becoming you.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/books"
                className="btn-primary"
                onClick={() =>
                  trackCtaClick({
                    ctaId: "about_books_by_david",
                    ctaLabel: "BOOKS BY DAVID",
                    ctaLocation: "about_primary_cta",
                    destinationUrl: "/books",
                    destinationKind: "internal",
                  })
                }
              >
                BOOKS BY DAVID
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
