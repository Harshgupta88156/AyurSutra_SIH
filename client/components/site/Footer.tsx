import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white/60 dark:bg-background/60">
      <div className="container py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">AyurSutra</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Panchakarma patient management and automated therapy scheduling
            software.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Explore</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                Knowledge Portal
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-primary">
                Registration
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="mt-2 text-sm">
            for further queries contact us:{" "}
            <a
              href="tel:+919876543210"
              className="underline decoration-dotted underline-offset-4"
            >
              +91-98765 43210
            </a>
            <br />
            <a
              href="mailto:support@ayursutra.io"
              className="underline decoration-dotted underline-offset-4"
            >
              support@ayursutra.io
            </a>
          </p>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} AyurSutra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
