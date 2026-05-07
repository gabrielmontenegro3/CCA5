import { useEffect, useState } from "react";
import logoCCA from "@/assets/logo cca collor (1).png";

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
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
        <div />

        <a href="#top" className="justify-self-center" aria-label="Voltar ao topo">
          <img src={logoCCA} alt="CCA" className="h-8 w-auto" />
        </a>

        <a
          href="#contato"
          className="justify-self-end inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-md bg-cyan-electric text-deep hover:opacity-90 hover:-translate-y-0.5 transition-all whitespace-nowrap"
        >
          <span className="sm:hidden">Conversa</span>
          <span className="hidden sm:inline">Vale a conversa</span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
