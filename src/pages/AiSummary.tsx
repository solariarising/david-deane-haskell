import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { AI_SUMMARY_PATH, EXTERNAL_LINKS, SITE_LAST_MODIFIED, SITE_NAME, SITE_URL } from "@/siteConfig";

const AiSummary = () => (
  <PageLayout>
    <section className="section-spacing">
      <div className="page-container max-w-4xl mx-auto space-y-12">
        <header className="space-y-5 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">AI Summary</p>
          <h1 className="heading-display">David Deane Haskell</h1>
          <p className="body-large max-w-3xl mx-auto">
            This page is a factual, crawlable summary of the David Deane Haskell site for search engines,
            AI agents, and readers who want the core site information in plain HTML.
          </p>
          <p className="text-sm text-muted-foreground">
            Canonical source: <a href={`${SITE_URL}${AI_SUMMARY_PATH}`} className="link-accent">{`${SITE_URL}${AI_SUMMARY_PATH}`}</a>
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="heading-section">Identity</h2>
          <div className="space-y-4 body-text">
            <p>
              {SITE_NAME} is an author writing both fiction and nonfiction under one author identity.
            </p>
            <p>
              The recurring frame of the work is healing the past, understanding the present, and
              imagining futures worth living in.
            </p>
            <p>
              This site is about author David Deane Haskell, not naturalist David George Haskell and
              not the Haskell programming language.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="heading-section">Key Pages</h2>
          <ul className="space-y-3 body-text">
            <li><Link to="/" className="link-accent">Home</Link>: author overview and primary entry points.</li>
            <li><Link to="/about" className="link-accent">About</Link>: author background and cross-genre context.</li>
            <li><Link to="/books" className="link-accent">Books</Link>: flagship fiction, memoir, and catalog overview.</li>
            <li><Link to="/vault" className="link-accent">Free Fiction Vault</Link>: free entry route for Tommytune and Emergence.</li>
            <li><Link to="/contact" className="link-accent">Contact</Link>: email route for interviews, speaking, and collaborations.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="heading-section">Core Titles</h2>
          <ul className="space-y-3 body-text">
            <li><strong>The Solarian Deep</strong>: flagship science fiction novel and primary fiction entry point.</li>
            <li><strong>Wounded Angels</strong>: healing-centered memoir and nonfiction anchor.</li>
            <li><strong>Tommytune</strong>: short-fiction entry route connected to The Vibrants world.</li>
            <li><strong>Emergence</strong>: free full-length novel available through the vault route.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="heading-section">External Destinations</h2>
          <ul className="space-y-3 body-text">
            <li><a href={EXTERNAL_LINKS.solarianDeepAmazon} target="_blank" rel="noopener noreferrer" className="link-accent">The Solarian Deep on Amazon</a></li>
            <li><a href={EXTERNAL_LINKS.woundedAngels} target="_blank" rel="noopener noreferrer" className="link-accent">Wounded Angels</a></li>
            <li><a href={EXTERNAL_LINKS.freeFiction} target="_blank" rel="noopener noreferrer" className="link-accent">Free Fiction download route</a></li>
            <li><a href={EXTERNAL_LINKS.fictionSubstack} target="_blank" rel="noopener noreferrer" className="link-accent">David Deane Haskell Stories on Substack</a></li>
            <li><a href={EXTERNAL_LINKS.healingSubstack} target="_blank" rel="noopener noreferrer" className="link-accent">Inner Child Journal on Substack</a></li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="heading-section">Site Facts</h2>
          <div className="space-y-3 body-text">
            <p>Primary language: English.</p>
            <p>Production domain: <a href={SITE_URL} className="link-accent">{SITE_URL}</a></p>
            <p>Last content update for the current SEO layer: {SITE_LAST_MODIFIED}.</p>
          </div>
        </section>
      </div>
    </section>
  </PageLayout>
);

export default AiSummary;
