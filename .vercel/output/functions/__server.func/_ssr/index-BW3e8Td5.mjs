import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
const logoCCA = "/assets/ChatGPT%20Image%2011%20de%20mai.%20de%202026_%2015_25_03%20(1)-DUpfXKrB.png";
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-deep/80 backdrop-blur-xl border-b border-cream/10" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 h-16 grid grid-cols-[1fr_auto_1fr] items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "justify-self-center", "aria-label": "Voltar ao topo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoCCA, alt: "CCA", className: "h-12 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contato",
            className: "justify-self-end inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-md bg-cyan-electric text-deep hover:opacity-90 hover:-translate-y-0.5 transition-all whitespace-nowrap",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Conversa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Vale a conversa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
            ]
          }
        )
      ] })
    }
  );
}
const heroBg = "/assets/hero-bg-DkW7QQkX.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative min-h-dvh pt-16 pb-16 overflow-hidden grain text-cream bg-deep isolate",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: heroBg,
            alt: "Estrutura de torre em construção ao crepúsculo, vista cinemática",
            className: "w-full h-full object-cover",
            width: 1920,
            height: 1080,
            fetchPriority: "high"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] bg-deep/52" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] gradient-hero pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] gradient-aurora opacity-75 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 z-[1] grid-bg-dark opacity-28 pointer-events-none",
            style: { animation: "grid-pan 24s linear infinite" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-cyan-electric/30 to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 z-[1] h-10 bg-gradient-to-b from-cyan-electric/10 to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-8 lg:pt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[2.4rem] sm:text-5xl lg:text-6xl xl:text-[4.75rem] font-medium leading-[0.98] tracking-tight text-balance", children: [
              "Gestão técnica que transforma a",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "garantia predial" }),
              " num processo estruturado de ponta a ponta."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-lg lg:text-xl text-cream/80 max-w-xl leading-relaxed", children: "Estruturamos a pós-obra com critérios técnicos, padronização e rastreabilidade — do chamado ao fechamento, com evidências e histórico auditável." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#contato",
                  className: "group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-cyan-electric text-deep font-medium glow-accent hover:-translate-y-0.5 transition-all",
                  children: [
                    "Agendar conversa",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#contato",
                  className: "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md glass text-cream hover:bg-cream/10 transition-colors",
                  children: "Solicitar demonstração"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-8 bg-cyan-electric/20 rounded-3xl blur-3xl -z-10 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -right-10 w-32 h-32 bg-blue-soft/30 rounded-full blur-3xl -z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-2xl overflow-hidden border border-cream/10 bg-deep/30 backdrop-blur-sm shadow-2xl shadow-deep/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video bg-ink", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-aurora opacity-60 pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-deep/40 via-transparent to-transparent pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "video",
                {
                  className: "relative z-[1] w-full h-full object-cover",
                  src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                  poster: heroBg,
                  controls: true,
                  playsInline: true,
                  muted: true,
                  loop: true,
                  autoPlay: true,
                  preload: "metadata"
                }
              )
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.35em]", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-10 bg-gradient-to-b from-cyan-electric to-transparent" })
        ] })
      ]
    }
  );
}
function useReveal() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
const industrialImg = "/assets/industrial-CcFzInZu.jpg";
const sistemaMockImg = "/assets/VS%20PC%20VS%20MOBILE%20MOCK%20SITE%201-rLM9zZm1.png";
const fieldImg = "/assets/field-CVNL-Tsb.jpg";
function Eyebrow({ n, label }) {
  return null;
}
function Problema() {
  const ref = useReveal();
  const items = [
    {
      n: "01",
      t: "Atendimento pode ser mais ágil",
      d: "Chamados técnicos podem ser analisados com mais rapidez quando há critérios e fluxo definidos."
    },
    {
      n: "02",
      t: "Oportunidade de reduzir retrabalho",
      d: "A padronização técnica evita ciclos repetitivos e melhora a eficiência da equipe."
    },
    {
      n: "03",
      t: "Padronização em desenvolvimento",
      d: "Processos claros permitem uniformidade na análise e na tomada de decisão."
    },
    {
      n: "04",
      t: "Decisões técnicas mais consistentes",
      d: "Laudos estruturados trazem mais segurança e alinhamento entre áreas."
    },
    {
      n: "05",
      t: "Melhor controle de custos",
      d: "Com gestão técnica adequada, é possível reduzir desperdícios e evitar custos invisíveis."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "problema",
      ref,
      className: "reveal py-28 lg:py-36 relative bg-background overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-light opacity-60 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "02", label: "O problema" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-foreground text-balance", children: [
              "Transforme sua pós-obra em um",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "processo estruturado" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Após a entrega, é comum que os chamados sejam direcionados ao SAC sem um fluxo técnico bem definido. Com uma abordagem estruturada, é possível ganhar previsibilidade, reduzir retrabalho e tomar decisões com mais segurança." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 lg:col-start-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-2 gap-3", children: items.map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `relative overflow-hidden p-7 rounded-xl bg-deep text-cream border border-cream/10 hover:bg-ink hover:border-cyan-electric/30 hover:-translate-y-1 transition-all group ${idx === items.length - 1 ? "sm:col-span-2" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-aurora opacity-70 pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-deep/40 via-transparent to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative font-display text-xl lg:text-2xl text-cream leading-tight", children: it.t }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative font-mono text-[10px] text-cream/60", children: it.n })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-sm text-cream/70 leading-relaxed", children: it.d }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-5 h-0.5 bg-cream/15 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-cyan-electric w-0 group-hover:w-full transition-all duration-700" }) })
              ]
            },
            it.n
          )) }) })
        ] }) })
      ]
    }
  );
}
function Solucao() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "pilares",
      ref,
      className: "reveal py-28 lg:py-40 bg-background relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-light opacity-55 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-[500px] h-[500px] bg-cyan-electric/15 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-soft/15 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "05", label: "Pilares da metodologia" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl lg:text-7xl xl:text-8xl font-medium leading-[0.98] tracking-tight text-balance text-foreground", children: [
              "Gestão técnica transforma a garantia predial em um",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "processo controlado" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed", children: "Com critérios técnicos, padronização e acompanhamento estruturado, a pós-obra deixa de ser reativa e passa a operar com previsibilidade e controle." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 grid grid-cols-2 gap-3", children: [
            { k: "Pilar 01", v: "Controlado", d: "Controle dos chamados e das decisões técnicas" },
            { k: "Pilar 02", v: "Padronizado", d: "Critérios técnicos definidos para cada situação" },
            { k: "Pilar 03", v: "Rastreável", d: "Histórico completo das ações e atendimentos" },
            { k: "Pilar 04", v: "Orientado por dados", d: "Decisões baseadas em indicadores reais" }
          ].map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative overflow-hidden p-6 lg:p-8 rounded-xl bg-deep text-cream border border-cream/10 hover:bg-ink hover:border-cyan-electric/30 transition-colors group min-h-[110px] lg:min-h-[140px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-aurora opacity-70 pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-deep/40 via-transparent to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative font-mono text-[10px] lg:text-[11px] uppercase tracking-[0.25em] text-cyan-electric mb-2", children: it.k }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative font-display text-xl lg:text-3xl text-cream leading-[1.05] tracking-tight", children: it.v }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 text-sm lg:text-[15px] text-cream/75 leading-relaxed", children: it.d })
              ]
            },
            it.k
          )) })
        ] })
      ]
    }
  );
}
function Plataforma() {
  const ref = useReveal();
  const items = [
    { t: "Controle total das ocorrências", d: "Cada caso registrado, classificado e acompanhado do início ao fim." },
    { t: "Padronização dos processos", d: "Metodologia única aplicada a toda a operação." },
    { t: "Diagnósticos assertivos", d: "Análise técnica baseada em evidências e histórico." },
    { t: "Decisões com base sólida", d: "Cada decisão sustentada por dados rastreáveis." },
    { t: "Visão completa do ativo", d: "Painel integrado com a saúde técnica do empreendimento." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "solucao",
      ref,
      className: "reveal py-28 lg:py-36 bg-deep text-cream relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-25 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-electric/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cream/6 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "04", label: "A solução" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance", children: [
              "Gestão Técnica da",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Garantia Predial" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-cream/75 leading-relaxed", children: "Estruturamos todo o pós-obra com metodologia técnica e uma plataforma digital integrada que organiza cada etapa da operação." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-7 rounded-xl glass border border-cream/10 hover:bg-cream/10 hover:-translate-y-1 transition-all group ${i === 0 ? "sm:col-span-2" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl lg:text-2xl text-cream leading-tight", children: it.t }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-cream/60", children: String(i + 1).padStart(2, "0") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-cream/70 leading-relaxed", children: it.d }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-0.5 bg-cream/15 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-cyan-electric w-0 group-hover:w-full transition-all duration-700" }) })
              ]
            },
            it.t
          )) })
        ] })
      ]
    }
  );
}
function Sistema() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "sistema",
      ref,
      className: "reveal py-28 lg:py-36 bg-background relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-light opacity-45 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -left-24 w-[520px] h-[520px] bg-cyan-electric/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -right-24 w-[520px] h-[520px] bg-blue-soft/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "10", label: "Nosso sistema" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground", children: [
              "Um sistema técnico",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "centralizado" }),
              " para decisões seguras"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl", children: "Centralizamos as etapas do pós-obra em um painel: registro, triagem, diagnóstico, laudo e rastreabilidade. Assim, você ganha previsibilidade, reduz retrabalho e mantém evidências auditáveis." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: sistemaMockImg,
              alt: "Plataforma CCA — mockups desktop e mobile",
              className: "w-full h-auto object-contain",
              loading: "lazy",
              width: 2400,
              height: 1350
            }
          ) }) })
        ] })
      ]
    }
  );
}
function Fluxo() {
  const ref = useReveal();
  const steps = [
    "Demanda",
    "Registro",
    "Triagem",
    "Planejamento",
    "Inspeção",
    "Diagnóstico",
    "Solução técnica",
    "Laudo",
    "Fechamento"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "fluxo",
      ref,
      className: "reveal py-28 lg:py-36 bg-deep text-cream relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-aurora opacity-70 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "04", label: "Fluxo operacional" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance", children: [
              "Gestão técnica estruturada em",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "todas as etapas" }),
              " da pós-obra"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-cream/75 text-lg", children: "Cada etapa é conduzida com critérios técnicos, garantindo rastreabilidade, padronização e segurança na tomada de decisão." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/40 to-transparent hidden lg:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "sm:hidden relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-3 top-2 bottom-2 border-l border-dashed border-border/70" }),
              steps.map((s, i) => {
                const flip = i % 2 === 1;
                const n = String(i + 1).padStart(2, "0");
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-electric shadow-[0_0_0_4px_oklch(0.78_0.15_220/0.10)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-9", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `relative overflow-hidden rounded-2xl bg-deep border border-cream/10 shadow-[0_1px_2px_oklch(0.16_0.04_250/0.10),0_18px_36px_oklch(0.16_0.04_250/0.18)] h-16 flex items-center ${flip ? "flex-row-reverse text-right" : "flex-row text-left"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-35 pointer-events-none" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-aurora opacity-80 pointer-events-none" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-deep/60 via-deep/80 to-ink/60 pointer-events-none" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `relative font-display text-[1.02rem] text-cream font-semibold leading-tight truncate ${flip ? "pr-12 pl-5" : "pl-12 pr-5"}`,
                              children: s
                            }
                          ) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `pointer-events-none absolute top-1/2 -translate-y-1/2 z-20 ${flip ? "-right-2" : "-left-2"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-14 h-14 rounded-full bg-deep/90 backdrop-blur border-[3px] border-cyan-electric/55 shadow-[0_0_0_1px_oklch(0.78_0.15_220/0.22),0_18px_38px_oklch(0.16_0.04_250/0.18)] grid place-items-center", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-2 rounded-full bg-cyan-electric/15 blur-md" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative font-display text-[15px] tracking-tight text-cyan-electric drop-shadow-[0_1px_0_oklch(0.98_0.005_240/0.7)]", children: n })
                        ] })
                      }
                    )
                  ] })
                ] }, s);
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:grid lg:hidden grid-cols-3 gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "group flex flex-col items-start gap-4 relative",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-16 h-16 rounded-full bg-card border border-border group-hover:border-cyan-electric group-hover:bg-cyan-electric group-hover:shadow-[0_0_30px_oklch(0.78_0.15_220/0.5)] transition-all duration-300 flex items-center justify-center font-mono text-sm text-foreground group-hover:text-deep shrink-0", children: String(i + 1).padStart(2, "0") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg lg:text-xl text-foreground leading-tight", children: s }) })
                ]
              },
              s
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "hidden lg:block relative max-w-5xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 -translate-x-1/2 top-2 bottom-2 border-l border-dashed border-border/70" }),
              steps.map((s, i) => {
                const flip = i % 2 === 1;
                const n = String(i + 1).padStart(2, "0");
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative py-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-electric shadow-[0_0_0_5px_oklch(0.78_0.15_220/0.10)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${flip ? "col-start-2 flex justify-start" : "col-start-1 flex justify-end"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[360px]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-deep border border-cream/10 shadow-[0_1px_2px_oklch(0.16_0.04_250/0.10),0_18px_36px_oklch(0.16_0.04_250/0.18)] h-16 flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-35 pointer-events-none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-aurora opacity-80 pointer-events-none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-deep/60 via-deep/80 to-ink/60 pointer-events-none" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `relative font-display text-lg text-cream font-semibold leading-tight truncate ${flip ? "pl-16 pr-6" : "pr-16 pl-6"} ${flip ? "text-left" : "text-right"}`,
                            children: s
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `pointer-events-none absolute top-1/2 -translate-y-1/2 z-20 ${flip ? "-left-2" : "-right-2"}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-14 h-14 rounded-full bg-deep/85 backdrop-blur border-[3px] border-cyan-electric/55 shadow-[0_0_0_1px_oklch(0.78_0.15_220/0.22),0_18px_38px_oklch(0.16_0.04_250/0.18)] grid place-items-center", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-2 rounded-full bg-cyan-electric/15 blur-md" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative font-display text-[15px] tracking-tight text-cyan-electric drop-shadow-[0_1px_0_oklch(0.98_0.005_240/0.7)]", children: n })
                          ] })
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${flip ? "col-start-1" : "col-start-2"}` })
                  ] })
                ] }, s);
              })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Campo() {
  const ref = useReveal();
  const items = [
    "Redução de custos operacionais",
    "Menos retrabalho",
    "Decisões baseadas em dados",
    "Mais segurança jurídica",
    "Padronização técnica",
    "Comunicação clara com o cliente"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "beneficios",
      ref,
      className: "reveal pt-16 pb-28 lg:pt-20 lg:pb-36 bg-background relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-light opacity-45 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-cyan-electric/10 rounded-3xl blur-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: fieldImg,
                  alt: "Equipe técnica em campo realizando inspeção",
                  className: "w-full h-full object-cover",
                  loading: "lazy",
                  width: 1280,
                  height: 1024
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "06", label: "Benefícios e resultados" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground", children: [
              "Mais controle e previsibilidade na sua",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "pós-obra" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Resultados visíveis no balanço, no tempo de resposta e na confiança do cliente final." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-1", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-center gap-4 py-4 border-b border-border group hover:border-cyan-electric transition-colors cursor-default",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground w-8", children: String(i + 1).padStart(2, "0") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg lg:text-xl flex-1 text-foreground", children: it }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-electric opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all", children: "→" })
                ]
              },
              it
            )) })
          ] })
        ] })
      ]
    }
  );
}
function Industrial() {
  const ref = useReveal();
  const map = [
    { k: "Problema", v: "Desafios comuns na gestão da pós-obra" },
    { k: "Solução", v: "Gestão técnica estruturada para a pós-obra" },
    { k: "Como Funciona", v: "Gestão técnica estruturada em todas as etapas da pós-obra" },
    { k: "Pilares", v: "Os pilares da gestão técnica da pós-obra" },
    { k: "Resultados", v: "Mais controle e previsibilidade na sua pós-obra" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "diagnostica",
      ref,
      className: "reveal py-28 lg:py-36 bg-secondary/40 relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-light opacity-35 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 order-2 lg:order-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "07", label: "Engenharia diagnóstica" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground", children: [
              "Mais controle e previsibilidade na sua",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "pós-obra" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Um resumo da apresentação em etapas — do contexto ao impacto na operação." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-3", children: map.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative overflow-hidden rounded-xl border border-border bg-background/70 backdrop-blur p-5 hover:border-cyan-electric/35 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-light opacity-30 pointer-events-none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: it.k }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-2 font-display text-lg lg:text-xl text-foreground leading-tight", children: it.v })
                ]
              },
              it.k
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 order-1 lg:order-2 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-blue-soft/15 rounded-3xl blur-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[5/4] rounded-2xl overflow-hidden border border-border shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: industrialImg,
                  alt: "Inspeção técnica em ambiente industrial",
                  className: "w-full h-full object-cover",
                  loading: "lazy",
                  width: 1280,
                  height: 1024
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-deep/40 via-transparent to-transparent" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Diferencial() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "confidencialidade",
      ref,
      className: "reveal py-32 lg:py-44 bg-deep text-cream relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-mesh opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-25" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cream/6 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "08", label: "Confidencialidade e experiência" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Atuação técnica com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "confidencialidade" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-cream/75 leading-relaxed max-w-xl", children: "Atuamos em operações de pós-obra e garantia predial com total confidencialidade, respeitando a integridade das informações e dos empreendimentos atendidos." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-cream/75 leading-relaxed max-w-xl", children: "Por esse motivo, não divulgamos dados sensíveis ou identificação dos clientes, mantendo o foco na estruturação técnica da operação." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 grid sm:grid-cols-2 gap-3", children: [
            {
              t: "Confidencialidade por padrão",
              d: "Não expomos clientes, dados e ocorrências. Protocolos e documentação sob controle."
            },
            {
              t: "Experiência de campo",
              d: "Inspeções, análise de evidências e condução técnica com método replicável."
            },
            {
              t: "Rastreabilidade e auditoria",
              d: "Histórico completo das decisões e ações — pronto para validação técnica e jurídica."
            },
            {
              t: "Consistência operacional",
              d: "Critérios claros, padronização e indicadores para previsibilidade do pós-obra."
            }
          ].map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 rounded-xl glass hover:bg-cream/10 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl lg:text-2xl text-cream leading-tight", children: it.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-cream/70 leading-relaxed", children: it.d }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-px bg-cream/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-electric", children: "padrão CCA" })
          ] }, it.t)) })
        ] })
      ]
    }
  );
}
function Cta() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "contato",
      ref,
      className: "reveal py-28 lg:py-36 bg-background relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-light opacity-55 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-electric/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/25 to-transparent opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-cyan-electric/8 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto px-6 lg:px-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "11", label: "Vale a conversa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground", children: [
            "Centralize chamados e tenha",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "controle completo" }),
            " da sua operação."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "Acompanhe análises técnicas em um ambiente integrado para ganhar previsibilidade e reduzir retrabalho." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/5585985097622",
              target: "_blank",
              rel: "noopener",
              className: "w-full sm:w-auto px-8 py-4 rounded-md bg-cyan-electric text-deep font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all glow-accent inline-flex items-center justify-center gap-2",
              children: [
                "Falar com especialista ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4", children: ["Operação estruturada", "Redução de retrabalho", "Decisões técnicas mais seguras"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-electric" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm lg:text-[15px]", children: t })
              ]
            },
            t
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/5585985097622",
                target: "_blank",
                rel: "noopener",
                className: "flex items-center gap-2 hover:text-cyan-electric transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-electric" }),
                  "WhatsApp (85) 98509-7622"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:contato@cca-engenharia.com.br",
                className: "flex items-center gap-2 hover:text-cyan-electric transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-electric" }),
                  "contato@cca-engenharia.com.br"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-electric" }),
              "Francisco Costa"
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border py-14 bg-deep text-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoCCA, alt: "CCA", className: "h-12 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-cream/65 max-w-xs", children: "Gestão técnica de pós-obra com controle, rastreabilidade e decisões seguras." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mb-3", children: "Navegação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "hover:text-cyan-electric transition-colors", children: "Hero Inicial" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#problema", className: "hover:text-cyan-electric transition-colors", children: "Problema" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#solucao", className: "hover:text-cyan-electric transition-colors", children: "Solução" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#fluxo", className: "hover:text-cyan-electric transition-colors", children: "Como Funciona" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pilares", className: "hover:text-cyan-electric transition-colors", children: "Pilares" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#resultado", className: "hover:text-cyan-electric transition-colors", children: "Resultados" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#beneficios", className: "hover:text-cyan-electric transition-colors", children: "Benefícios" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", className: "hover:text-cyan-electric transition-colors", children: "Contato" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mb-3", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-cream/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Francisco Costa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/5585985097622", className: "hover:text-cyan-electric transition-colors", children: "WhatsApp (85) 98509-7622" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contato@cca-engenharia.com.br", className: "hover:text-cyan-electric transition-colors", children: "contato@cca-engenharia.com.br" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " CCA Governança Técnica. Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono uppercase tracking-[0.2em]", children: "Governança técnica aplicada · BR" })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Problema, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plataforma, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Solucao, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Fluxo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Campo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Industrial, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Diferencial, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sistema, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Cta, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
