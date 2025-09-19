import { Link, NavLink, useLocation } from "react-router-dom";
import { Leaf, CalendarClock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 dark:bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold tracking-tight"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-xl">AyurSutra</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            Knowledge
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            Registration
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="secondary" className="hidden sm:inline-flex">
            <Link to="/chatbot" className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Chatbot
            </Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/register" className="inline-flex items-center gap-2">
              <CalendarClock className="h-4 w-4" />
              Register
            </Link>
          </Button>
        </div>
      </div>
      {location.pathname === "/" && (
        <div className="border-t bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container py-2 text-xs sm:text-sm">
            <span className="font-semibold">for further queries contact us</span>: {" "}
            <a
              href="tel:+919876543210"
              className="underline decoration-dotted underline-offset-4 hover:text-primary"
            >
              +91-98765 43210
            </a> {" "}•{" "}
            <a
              href="mailto:support@ayursutra.io"
              className="underline decoration-dotted underline-offset-4 hover:text-primary"
            >
              support@ayursutra.io
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
