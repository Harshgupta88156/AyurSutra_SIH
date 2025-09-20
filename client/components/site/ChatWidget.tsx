import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, MessageCircle, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ChatWidget() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (location.pathname === "/chatbot") return;
    const dismissed = localStorage.getItem("ayursutra_chat_hint_dismissed");
    setShowHint(!dismissed);
  }, [location.pathname]);

  if (location.pathname === "/chatbot") return null;

  function openChat() {
    navigate("/chatbot");
  }

  function dismissHint() {
    localStorage.setItem("ayursutra_chat_hint_dismissed", "1");
    setShowHint(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showHint && (
        <div className="relative max-w-[300px] bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 p-[1px] rounded-2xl shadow-2xl">
          <div className="rounded-2xl bg-white/85 dark:bg-background/80 backdrop-blur px-4 py-3">
            <div className="absolute -top-4 left-4 h-8 w-8 rounded-full bg-primary text-primary-foreground shadow flex items-center justify-center ring-2 ring-white/70 dark:ring-background/70">
              <Bot className="h-4 w-4" />
            </div>
            <button
              aria-label="Dismiss"
              onClick={dismissHint}
              className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="text-sm leading-snug">
              <span className="mr-1">👋</span>
              Ask the AyurSutra AI about Panchakarma and the product. Click the orb to start.
            </p>
          </div>
        </div>
      )}

      <button
        onClick={openChat}
        aria-label="Open AyurSutra chatbot"
        className={cn(
          "group relative inline-flex h-16 w-16 items-center justify-center rounded-full transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:scale-105",
        )}
      >
        {/* Aurora glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-md opacity-60 group-hover:opacity-80 transition"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, hsl(var(--accent)/.55) 0%, transparent 60%), conic-gradient(from 0deg at 50% 50%, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-40 blur-lg group-hover:opacity-60 transition animate-[spin_10s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, hsl(var(--primary)) 0%, transparent 20%, hsl(var(--accent)) 50%, transparent 80%, hsl(var(--primary)) 100%)",
          }}
        />
        {/* Core icon */}
        <MessageCircle className="h-7 w-7 drop-shadow-sm" />
        {/* AI badge */}
        <span className="pointer-events-none absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground shadow">
          AI
        </span>
        {/* Pulse dot */}
        <span className="pointer-events-none absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-primary/80">
          <span className="absolute inset-0 rounded-full bg-primary/60 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </span>
      </button>
    </div>
  );
}
