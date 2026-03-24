import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const Teaching = () => (
  <PageLayout>
    <section className="section-spacing">
      <div className="page-container max-w-3xl mx-auto space-y-12">
        <div className="space-y-6 text-center">
          <h1 className="heading-display">Teaching & Services</h1>
          <p className="body-large">
            Connection. Transformation. Real human work—not corporate templates.
          </p>
        </div>

        <div className="divider" />

        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="heading-subsection">Drum Lessons</h2>
            <p className="body-text">
              One-on-one drum instruction built around where you are right now. Beginners welcome. Advanced players looking to reconnect with feel and groove—especially welcome. Online and in-person options available.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="heading-subsection">Writing & Creative Mentorship</h2>
            <p className="body-text">
              David works with emerging writers and creatives who are drawn to memoir, speculative fiction, or any form of honest storytelling. This isn't about formula—it's about finding the voice that's already there and giving it room to breathe.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="heading-subsection">Speaking & Workshops</h2>
            <p className="body-text">
              Topics include inner child healing, the intersection of creativity and recovery, storytelling as transformation, and the courage it takes to create from a place of truth. David brings warmth, honesty, and depth to every session.
            </p>
          </div>
        </div>

        <div className="divider" />

        <div className="text-center space-y-4">
          <p className="body-large">
            Every service starts with a conversation.
          </p>
          <Link to="/contact" className="btn-primary">Reach Out</Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Teaching;
