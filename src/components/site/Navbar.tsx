import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logoCCA from "@/assets/ChatGPT Image 11 de mai. de 2026, 15_25_03 (1).png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-deep/80 backdrop-blur-xl border-b border-cream/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5 lg:gap-8">
        <div className="flex justify-end items-center gap-3 sm:gap-5 min-w-0">
          <Link
            to="/contato"
            className="inline-flex items-center text-xs sm:text-sm font-medium px-1 py-2 rounded-md text-cream/90 hover:text-cyan-electric hover:bg-cream/5 transition-all whitespace-nowrap"
          >
            Contato
          </Link>
          <span
            className="block h-7 sm:h-9 w-px shrink-0 bg-gradient-to-b from-transparent via-cream/22 sm:via-cream/35 to-transparent opacity-70 sm:opacity-90"
            aria-hidden
          />
        </div>

        <Link to="/" className="justify-self-center shrink-0 px-2" aria-label="CCA — Início">
          <img src={logoCCA} alt="CCA" className="h-10 sm:h-12 w-auto" />
        </Link>

        <div className="flex justify-start items-center gap-3 sm:gap-5 min-w-0">
          <span
            className="block h-7 sm:h-9 w-px shrink-0 bg-gradient-to-b from-transparent via-cream/22 sm:via-cream/35 to-transparent opacity-70 sm:opacity-90"
            aria-hidden
          />
          <a
            href="/#sobre-nos"
            className="text-xs sm:text-sm font-medium text-cream/90 hover:text-cyan-electric transition-colors whitespace-nowrap shrink-0"
          >
            Sobre nós
          </a>
          <span className="flex-1 min-w-2" aria-hidden />
          <a
            href="/#contato"
            className="inline-flex items-center gap-1 text-[10px] leading-tight sm:text-sm font-medium px-2 sm:px-4 py-2 rounded-lg bg-cyan-electric text-deep hover:opacity-90 hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0"
          >
            Fale com especialista
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
