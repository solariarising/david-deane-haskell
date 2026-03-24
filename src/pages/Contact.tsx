import PageLayout from "@/components/PageLayout";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="section-spacing">
        <div className="page-container max-w-2xl mx-auto space-y-12">
          <div className="space-y-6 text-center">
            <h1 className="heading-display">Get in Touch</h1>
            <p className="body-large">
              Whether it's about books, drumming, collaboration, or just saying hello—David would love to hear from you.
            </p>
          </div>

          <div className="divider" />

          {submitted ? (
            <div className="text-center space-y-4 py-12">
              <h2 className="heading-subsection">Thank you.</h2>
              <p className="body-text">Your message has been received. David will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          )}

          <div className="text-center space-y-2 pt-4">
            <p className="text-sm text-muted-foreground">
              You can also reach David directly at{" "}
              <a href="mailto:david@daviddeanehaskell.com" className="link-accent">
                david@daviddeanehaskell.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
