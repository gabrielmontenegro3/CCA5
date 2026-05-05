import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
const logoCCA = "/assets/cca-logo-DtJ8IqSD.png";
const links = [
  { href: "#problema", label: "Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#fluxo", label: "Como funciona" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#contato", label: "Contato" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-deep/80 backdrop-blur-xl border-b border-cream/10" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-cream/95 rounded-md px-2.5 py-1.5 shadow-[0_0_20px_oklch(0.78_0.15_220/0.25)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoCCA, alt: "CCA Governança Técnica", className: "h-6 w-auto" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leading-tight hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-[0.25em] text-cream/60", children: "Governança Técnica" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-sm text-cream/70 hover:text-cream underline-grow transition-colors",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#cliente",
                className: "hidden sm:inline-flex text-sm text-cream/70 hover:text-cream underline-grow",
                children: "Área do cliente"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contato",
                className: "inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-cyan-electric text-deep hover:opacity-90 hover:-translate-y-0.5 transition-all",
                children: [
                  "Vale a conversa",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpen((o) => !o),
                className: "lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-cream/20 text-cream",
                "aria-label": "Abrir menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "i", children: "≡" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 flex flex-col gap-3", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            onClick: () => setOpen(false),
            className: "text-sm text-foreground/80",
            children: l.label
          },
          l.href
        )) }) })
      ]
    }
  );
}
const heroBg = "/assets/hero-bg-DkW7QQkX.jpg";
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
function useCountUp(target, duration = 1600) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const value = Math.round(target * eased);
            if (el) el.textContent = value.toLocaleString("pt-BR");
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return ref;
}
function Hero() {
  const [playing, setPlaying] = reactExports.useState(false);
  const [slot, setSlot] = reactExports.useState(0);
  const slots = [
    "01 / Diagnóstico técnico",
    "02 / Plataforma de gestão",
    "03 / Resultado mensurável"
  ];
  reactExports.useEffect(() => {
    const id = setInterval(() => setSlot((s) => (s + 1) % slots.length), 3200);
    return () => clearInterval(id);
  }, []);
  const c1 = useCountUp(47);
  const c2 = useCountUp(1847);
  const c3 = useCountUp(98);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative min-h-dvh pt-24 pb-16 overflow-hidden grain text-cream bg-deep isolate",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] bg-deep/70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] gradient-hero pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] gradient-aurora pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 z-[1] grid-bg-dark opacity-40 pointer-events-none",
            style: { animation: "grid-pan 24s linear infinite" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-deep pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-24 left-6 lg:left-10 z-10 flex items-center gap-3 text-cream/70 font-mono text-[10px] uppercase tracking-[0.3em]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-cyan-electric" }),
          "Slide 01 — Visão geral"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-24 right-6 lg:right-10 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex w-2 h-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-cyan-electric opacity-60 animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full w-2 h-2 bg-cyan-electric" })
          ] }),
          "ao vivo · ccaengenharia.com.br"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-electric animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-cream/85", children: "Gestão técnica da garantia predial" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[0.98] tracking-tight text-balance", children: [
              "Pós-obra sem gestão gera",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "custos invisíveis" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-lg lg:text-xl text-cream/80 max-w-xl leading-relaxed", children: "Assuma o controle da garantia predial com gestão técnica estruturada — metodologia, plataforma digital e rastreabilidade completa do chamado ao fechamento." }),
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
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-cream/15 pt-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl lg:text-4xl text-cyan-electric tabular-nums", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: c1, children: "0" }),
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mt-1", children: "Menos retrabalho" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl lg:text-4xl text-cream tabular-nums", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: c2, children: "0" }),
                  "h"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mt-1", children: "Otimizadas" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl lg:text-4xl text-cream tabular-nums", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: c3, children: "0" }),
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mt-1", children: "Satisfação" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-8 bg-cyan-electric/20 rounded-3xl blur-3xl -z-10 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -right-10 w-32 h-32 bg-blue-soft/30 rounded-full blur-3xl -z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden glass-dark shadow-2xl shadow-deep/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 border-b border-cream/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-cream/20" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-cream/20" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-cyan-electric" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60", children: "cca · institucional · 02:14" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 text-right font-mono text-[10px] text-cream/50", children: "HD" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video bg-gradient-to-br from-ink via-deep to-deep", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-aurora" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "video",
                  {
                    className: "absolute inset-0 w-full h-full object-cover opacity-0",
                    playsInline: true,
                    muted: true,
                    loop: true,
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setPlaying((p) => !p),
                      className: "relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-electric text-deep hover:scale-110 transition-transform ring-pulse glow-accent",
                      "aria-label": "Reproduzir vídeo",
                      children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "❚❚" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl translate-x-0.5", children: "▶" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-cream/65", children: "Espaço reservado para vídeo" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 rounded-md glass-dark font-mono text-[10px] uppercase tracking-[0.2em] text-cream/85", children: slots[slot] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: slots.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `h-0.5 transition-all ${i === slot ? "w-6 bg-cyan-electric" : "w-3 bg-cream/30"}`
                    },
                    i
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 divide-x divide-cream/10 border-t border-cream/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-cream/45", children: "Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-cream text-sm font-medium mt-0.5 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-electric animate-pulse" }),
                    "Operacional"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-cream/45", children: "Demandas" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream text-sm font-medium mt-0.5", children: "128 ativas" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-cream/45", children: "SLA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cyan-electric text-sm font-medium mt-0.5", children: "98,4%" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "hidden lg:flex absolute -left-8 -bottom-10 glass-dark rounded-xl px-5 py-4 items-center gap-4 shadow-2xl",
                style: { animation: "float 6s ease-in-out infinite" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-cyan-electric/20 grid place-items-center text-cyan-electric font-mono text-sm", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-[0.25em] text-cream/55", children: "Caso #2841 · resolvido" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream text-sm font-medium", children: "Diagnóstico técnico aprovado" })
                  ] })
                ]
              }
            )
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
const industrialImg = "/assets/industrial-CcFzInZu.jpg";
const fieldImg = "/assets/field-CVNL-Tsb.jpg";
function Eyebrow({ n, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-electric mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-cyan-electric" }),
    n,
    " · ",
    label
  ] });
}
function Problema() {
  const ref = useReveal();
  const items = [
    { n: "01", t: "Respostas lentas", d: "Chamados parados em SAC sem suporte técnico especializado." },
    { n: "02", t: "Retrabalho constante", d: "Equipes operam em ciclos repetidos de correção." },
    { n: "03", t: "Falta de padrão", d: "Cada caso conduzido de forma improvisada e sem método." },
    { n: "04", t: "Baixa assertividade", d: "Laudos divergentes comprometem a decisão técnica." },
    { n: "05", t: "Custos aumentando", d: "Operação sem controle vira prejuízo invisível no balanço." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "problema",
      ref,
      className: "reveal py-28 lg:py-36 relative bg-background overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-end mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "02", label: "O problema" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-foreground text-balance", children: [
                "Sua pós-obra está",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "fora de controle" }),
                "?"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 lg:col-start-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-muted-foreground leading-relaxed", children: [
              "Após a entrega, chamados caem em SAC ou assistência técnica — áreas sem suporte técnico especializado e sem metodologia.",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "A garantia predial vira um processo reativo e desorganizado." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-sm", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group bg-card p-7 lg:p-8 hover:bg-accent/5 transition-colors duration-500 relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-10", children: it.n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl lg:text-2xl text-foreground mb-2 leading-tight", children: it.t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground leading-relaxed", children: it.d }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-cyan-electric scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" })
              ]
            },
            it.n
          )) })
        ] })
      ]
    }
  );
}
function Solucao() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "virada",
      ref,
      className: "reveal py-28 lg:py-40 bg-deep text-cream relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-aurora" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-[500px] h-[500px] bg-cyan-electric/15 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-soft/15 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "03", label: "O diagnóstico" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl lg:text-7xl xl:text-8xl font-medium leading-[0.98] tracking-tight text-balance", children: [
              "A garantia predial não é o problema.",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "A falta de gestão técnica é." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg lg:text-xl text-cream/75 max-w-xl leading-relaxed", children: "Com método e tecnologia, o pós-obra deixa de ser um centro de problemas e se torna um processo construído sobre quatro pilares." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 grid grid-cols-2 gap-3", children: [
            { k: "Pilar 01", v: "Controlado" },
            { k: "Pilar 02", v: "Padronizado" },
            { k: "Pilar 03", v: "Rastreável" },
            { k: "Pilar 04", v: "Orientado por dados" }
          ].map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-6 rounded-xl glass hover:bg-cream/10 transition-colors group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-electric mb-2", children: it.k }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl lg:text-2xl text-cream leading-tight", children: it.v })
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
      className: "reveal py-28 lg:py-36 bg-secondary/50 relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-electric/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "04", label: "A solução" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-foreground text-balance", children: [
              "Gestão Técnica da",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Garantia Predial" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Estruturamos todo o pós-obra com metodologia técnica e uma plataforma digital integrada que organiza cada etapa da operação." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-cyan-electric animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70", children: "Metodologia + plataforma CCA" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-7 rounded-xl bg-card border border-border hover:border-cyan-electric/50 hover:shadow-lg hover:-translate-y-1 transition-all group ${i === 0 ? "sm:col-span-2 bg-gradient-to-br from-card to-secondary/40" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl lg:text-2xl text-foreground", children: it.t }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: String(i + 1).padStart(2, "0") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: it.d }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-0.5 bg-border rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-cyan-electric w-0 group-hover:w-full transition-all duration-700" }) })
              ]
            },
            it.t
          )) })
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
      className: "reveal py-28 lg:py-36 bg-background relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "05", label: "O fluxo" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground", children: [
              "Um processo claro, do",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "início ao fim" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-lg", children: "Cada etapa é controlada, documentada e integrada." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/40 to-transparent hidden lg:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-6 lg:gap-2", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "group flex lg:flex-col items-center lg:items-start gap-3 lg:gap-4 relative",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-16 h-16 rounded-full bg-card border border-border group-hover:border-cyan-electric group-hover:bg-cyan-electric group-hover:shadow-[0_0_30px_oklch(0.78_0.15_220/0.5)] transition-all duration-300 flex items-center justify-center font-mono text-sm text-foreground group-hover:text-deep shrink-0", children: String(i + 1).padStart(2, "0") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg lg:text-xl text-foreground leading-tight", children: s }) })
                ]
              },
              s
            )) })
          ] })
        ] })
      ]
    }
  );
}
function Resultados() {
  const ref = useReveal();
  const items = [
    { t: "Dashboard com indicadores", n: "01" },
    { t: "Kanban de chamados", n: "02" },
    { t: "Chat integrado", n: "03" },
    { t: "Upload de imagens e arquivos", n: "04" },
    { t: "Tags e classificação de risco", n: "05" },
    { t: "Notificações automáticas", n: "06" },
    { t: "Histórico completo do ativo", n: "07" },
    { t: "Links para ordens de serviço", n: "08" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "plataforma",
      ref,
      className: "reveal py-28 lg:py-36 bg-deep text-cream relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-electric/8 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 max-w-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "06", label: "Funcionalidades" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance", children: [
              "Plataforma digital",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "integrada" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-cream/75 max-w-xl leading-relaxed", children: "Tudo o que sua operação precisa para registrar, analisar e resolver ocorrências em um só lugar — com evidências e histórico auditável." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 rounded-2xl overflow-hidden border border-cream/10", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-deep p-8 lg:p-10 hover:bg-ink transition-colors group relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-electric mb-6", children: it.n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl lg:text-2xl text-cream leading-tight", children: it.t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 h-px w-0 bg-cyan-electric group-hover:w-full transition-all duration-700" })
              ]
            },
            it.n
          )) })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "beneficios",
      ref,
      className: "reveal py-28 lg:py-36 bg-background relative overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center", children: [
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
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute -bottom-8 -right-4 sm:-right-6 bg-cyan-electric text-deep p-6 rounded-xl max-w-[260px] shadow-2xl",
              style: { animation: "float 6s ease-in-out infinite" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] opacity-70", children: "Na prática" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl mt-1 leading-tight font-medium", children: "Operação previsível, sem surpresas" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "07", label: "Benefícios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground", children: [
            "O que muda",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "na prática" }),
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
    }
  );
}
function Industrial() {
  const ref = useReveal();
  const pilares = [
    { t: "Rigor técnico", d: "Análises sustentadas por critérios objetivos." },
    { t: "Padronização", d: "Metodologia única em toda a operação." },
    { t: "Rastreabilidade", d: "Cada decisão documentada e auditável." },
    { t: "Inteligência aplicada", d: "Dados que orientam a operação." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "autoridade",
      ref,
      className: "reveal py-28 lg:py-36 bg-secondary/40 relative overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 order-2 lg:order-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "08", label: "Autoridade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground", children: [
            "Governança técnica do",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "ativo construído" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: [
            "A CCA Governança Técnica atua com foco em quatro pilares. Mais do que resolver problemas,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "estruturamos processos" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 gap-4", children: pilares.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "border-l-2 border-cyan-electric pl-4 py-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: [
                  "Pilar ",
                  String(i + 1).padStart(2, "0")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg lg:text-xl mt-1 text-foreground", children: p.t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: p.d })
              ]
            },
            p.t
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
    }
  );
}
function Experiencia() {
  const ref = useReveal();
  const c1 = useCountUp(63);
  const c2 = useCountUp(41);
  const c3 = useCountUp(98);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "resultado",
      ref,
      className: "reveal py-28 lg:py-36 bg-background overflow-hidden relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "09", label: "Resultado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground", children: [
              "De operação reativa para",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "gestão estratégica" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "A garantia predial deixa de ser um risco e passa a ser um processo controlado, inteligente e confiável." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden", children: [
            { v: c1, suf: "%", k: "Redução de retrabalho" },
            { v: c2, suf: "%", k: "Redução de custos" },
            { v: c3, suf: "%", k: "Decisões com evidência" }
          ].map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-10 lg:p-12 group relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-6xl lg:text-7xl text-foreground tabular-nums leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: it.v, children: "0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-electric", children: it.suf })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: it.k })
          ] }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap items-center gap-4", children: ["Controlado", "Inteligente", "Confiável"].map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-deep text-cream font-mono text-[11px] uppercase tracking-[0.25em]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-electric" }),
                w
              ]
            },
            w
          )) })
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
      ref,
      className: "reveal py-32 lg:py-44 bg-deep text-cream relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-mesh opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-dark opacity-25" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto px-6 lg:px-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "10", label: "Posicionamento" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl lg:text-7xl xl:text-9xl font-medium leading-[0.95] tracking-tight text-balance", children: [
            "Mais que gestão, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "engenharia aplicada" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 inline-flex items-center gap-4 px-6 py-3 rounded-full glass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-cyan-electric animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80", children: "Engenharia · Tecnologia · Evidência" })
          ] })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-electric/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto px-6 lg:px-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "11", label: "Vale a conversa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground", children: [
            "Se isso já acontece na sua operação,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "vale a conversa" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto", children: "Fale com um especialista da CCA Governança Técnica e veja como estruturar o pós-obra do seu empreendimento." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: (e) => e.preventDefault(),
              className: "mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    required: true,
                    placeholder: "seu@email.com.br",
                    className: "flex-1 px-5 py-4 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-electric focus:ring-2 focus:ring-cyan-electric/20 transition-all"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "px-7 py-4 rounded-md bg-cyan-electric text-deep font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all glow-accent",
                    children: "Falar com especialista →"
                  }
                )
              ]
            }
          ),
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
function AreaCliente() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "cliente",
      ref,
      className: "reveal py-24 bg-secondary/40 border-t border-border relative",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { n: "·", label: "Área do cliente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-5xl font-medium leading-[1.05] tracking-tight text-foreground text-balance", children: [
            "Acesse ou cadastre",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "sua operação" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl", children: "Gerencie demandas técnicas, acompanhe análises e auditorias em um único painel." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-deep text-cream font-medium hover:opacity-90 transition-opacity",
              children: "Acessar plataforma →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-border text-foreground hover:bg-card transition-colors",
              children: "Cadastrar operação"
            }
          )
        ] })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border py-14 bg-deep text-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-cream rounded-md px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoCCA, alt: "CCA Governança Técnica", className: "h-7 w-auto" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mt-3", children: "Governança Técnica Predial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-cream/65 max-w-xs", children: "Gestão técnica de pós-obra com controle, rastreabilidade e decisões seguras." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mb-3", children: "Navegação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#problema", className: "hover:text-cyan-electric transition-colors", children: "Problema" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#solucao", className: "hover:text-cyan-electric transition-colors", children: "Solução" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#fluxo", className: "hover:text-cyan-electric transition-colors", children: "Como funciona" }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Solucao, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Fluxo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plataforma, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Resultados, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Campo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Industrial, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experiencia, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Diferencial, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Cta, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AreaCliente, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
