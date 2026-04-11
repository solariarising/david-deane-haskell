import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const SiteFooter = () => (
  <footer className="border-t border-border py-12 mt-16">
    <div className="page-container text-center space-y-4">
      <img src={logo} alt="David Deane Haskell" className="w-12 h-12 mx-auto rounded-full" />
      <p className="font-heading text-lg text-foreground">David Deane Haskell</p>
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
