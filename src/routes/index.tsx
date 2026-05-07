import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  Problema,
  Plataforma,
  Campo,
  Industrial,
  Diferencial,
  Fluxo,
  Solucao,
  Cta,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CCA Governança Técnica — Gestão técnica de pós-obra baseada em evidências" },
      {
        name: "description",
        content:
          "A CCA Governança Técnica estrutura tecnicamente o seu pós-obra com metodologia, plataforma e análise baseada em evidências. Reduza retrabalho, aumente controle e tome decisões seguras.",
      },
      { property: "og:title", content: "CCA Governança Técnica — Pós-obra com gestão técnica" },
      {
        property: "og:description",
        content:
          "Controle, rastreabilidade e decisões seguras para o pós-obra. Governança técnica aplicada da CCA.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Plataforma />
        <Solucao />
        <Fluxo />
        <Campo />
        <Industrial />
        <Diferencial />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
