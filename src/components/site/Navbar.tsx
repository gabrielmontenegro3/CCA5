import { useEffect, useState } from "react";
import logoCCA from "@/assets/cca-logo.png";

const links = [
  { href: "#problema", label: "Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#fluxo", label: "Como funciona" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="bg-cream/95 rounded-md px-2.5 py-1.5 shadow-[0_0_20px_oklch(0.78_0.15_220/0.25)]">
            <img src={logoCCA} alt="CCA Governança Técnica" className="h-6 w-auto" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-cream/60">Governança Técnica</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/70 hover:text-cream underline-grow transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cliente"
            className="hidden sm:inline-flex text-sm text-cream/70 hover:text-cream underline-grow"
          >
            Área do cliente
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-cyan-electric text-deep hover:opacity-90 hover:-translate-y-0.5 transition-all"
          >
            Vale a conversa
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-cream/20 text-cream"
            aria-label="Abrir menu"
          >
            <span className="i">≡</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
