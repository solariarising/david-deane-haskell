import { Link } from "react-router-dom";
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
                David Deane Haskell writes about healing the past, understanding the present, and imagining futures worth living in.
              </p>
              <p>
                His work spans speculative fiction, essays, and healing-centered memoir, with one mission: helping people make sense of an overwhelming world without abandoning hope.
              </p>
              <p>
                He is the author of <em>The Solarian Deep</em>, <em>Wounded Angels</em>, <em>Emergence</em>, <em>Dark Alignment</em>, <em>Too Much Information</em>, and <em>Tommytune</em>.
              </p>
              <p>
                Start with <em>The Solarian Deep</em> for fiction, <em>Wounded Angels</em> for healing, or the free fiction vault to explore.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://www.amazon.com/dp/B0GPN8DBJS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                The Solarian Deep
              </a>
              <a
                href="https://mybook.to/woundedangels"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Wounded Angels
              </a>
              <Link to="/vault" className="btn-outline">
                Free Fiction Vault
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
