import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border py-12 mt-16">
    <div className="page-container text-center space-y-4">
      <p className="font-heading text-lg text-foreground">David Deane Haskell</p>
      <p className="body-text text-sm">
        Novelist · Drummer · Teacher
      </p>
      <div className="flex justify-center gap-6 text-sm text-muted-foreground">
        <Link to="/books" className="hover:text-foreground transition-colors">Books</Link>
        <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
        <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
      </div>
      <p className="text-xs text-muted-foreground pt-4">
        © {new Date().getFullYear()} David Deane Haskell. All rights reserved.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
