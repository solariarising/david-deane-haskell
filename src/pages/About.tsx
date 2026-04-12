import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import profile from "@/assets/profile.webp";

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
              width={800}
              height={800}
            />
          </div>
          <div className="space-y-6">
            <h1 className="heading-display">About David</h1>
            <div className="space-y-5 body-text">
              <p>
                David Deane Haskell writes about healing the past, understanding the present, and creating futures worth living in.
              </p>
              <p>
                His work spans speculative fiction, essays, and healing-centered memoir, with one mission: helping people make sense of an overwhelming world without abandoning hope.
              </p>
              <p>
                He is the author of <em>The Solarian Deep</em>, <em>Wounded Angels</em>, <em>Emergence</em>, <em>Dark Alignment</em>, and <em>Too Much Information</em>. His next novel, <em>THE VIBRANTS</em>, will be in your hands soon. <em>Tommytune</em> offers an early glimpse into that world.
              </p>
              <p>
                Read <em>The Solarian Deep</em> for fiction, <em>Wounded Angels</em> for healing, or get <em>Tommytune</em> for an early glimpse of <em>THE VIBRANTS</em>.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/books" className="btn-primary">
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
