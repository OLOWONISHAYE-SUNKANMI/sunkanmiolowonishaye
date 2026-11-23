"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100)));
      }

      if (currentScroll > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in zoom-in duration-300">
      <button
        onClick={scrollToTop}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/90 text-zinc-300 shadow-2xl backdrop-blur-md transition-all hover:border-amber-400 hover:text-amber-400 hover:scale-105 active:scale-95"
        aria-label="Scroll to top of page"
      >
        {/* SVG Circular Progress Ring */}
        <svg className="absolute inset-0 h-12 w-12 -rotate-90" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-zinc-800"
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-amber-400 transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Center Icon */}
        <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
