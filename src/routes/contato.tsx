import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { ContatoPortal } from "@/components/site/ContatoPortal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "CCA — Portal de contato técnico" },
      {
        name: "description",
        content:
          "Entrada técnica para construtoras, incorporadoras e indústria. Leads qualificados e conversas sobre pós-obra, garantia predial e inspeção.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <ContatoPortal />
      </main>
      <footer className="border-t border-border py-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <Link to="/" className="font-display text-foreground hover:text-cyan-electric transition-colors">
            ← Voltar ao site
          </Link>
          <a href="mailto:contato@cca-engenharia.com.br" className="hover:text-cyan-electric transition-colors">
            contato@cca-engenharia.com.br
          </a>
        </div>
      </footer>
    </div>
  );
}
