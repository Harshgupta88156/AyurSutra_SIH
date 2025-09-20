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
        <div className="relative max-w-[280px] rounded-2xl border bg-white/90 dark:bg-background/90 text-foreground shadow-xl backdrop-blur px-4 py-3">
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
            Want to chat about AyurSutra? I can answer questions on Panchakarma and the product.
          </p>
        </div>
      )}

      <button
        onClick={openChat}
        aria-label="Open AyurSutra chatbot"
        className={cn(
          "group relative inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:scale-105",
        )}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="pointer-events-none absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground shadow">AI</span>
      </button>
    </div>
  );
}
