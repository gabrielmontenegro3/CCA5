import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { useCountUp } from "@/hooks/use-reveal";

export function Hero() {
  const [playing, setPlaying] = useState(false);
  const [slot, setSlot] = useState(0);
  const slots = [
    "01 / Diagnóstico técnico",
    "02 / Plataforma de gestão",
    "03 / Resultado mensurável",
  ];

  useEffect(() => {
    const id = setInterval(() => setSlot((s) => (s + 1) % slots.length), 3200);
    return () => clearInterval(id);
  }, []);

  const c1 = useCountUp(47);
  const c2 = useCountUp(1847);
  const c3 = useCountUp(98);

  return (
    <section
      id="top"
      className="relative min-h-dvh pt-24 pb-16 overflow-hidden grain text-cream bg-deep isolate"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Estrutura de torre em construção ao crepúsculo, vista cinemática"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>

      {/* Layered overlays — deep navy + cyan glow + technical grid */}
      <div className="absolute inset-0 z-[1] bg-deep/70" />
      <div className="absolute inset-0 z-[1] gradient-hero pointer-events-none" />
      <div className="absolute inset-0 z-[1] gradient-aurora pointer-events-none" />
      <div
        className="absolute inset-0 z-[1] grid-bg-dark opacity-40 pointer-events-none"
        style={{ animation: "grid-pan 24s linear infinite" }}
      />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-deep pointer-events-none" />

      {/* Top bar markers */}
      <div className="absolute top-24 left-6 lg:left-10 z-10 flex items-center gap-3 text-cream/70 font-mono text-[10px] uppercase tracking-[0.3em]">
        <span className="w-8 h-px bg-cyan-electric" />
        Slide 01 — Visão geral
      </div>
      <div className="absolute top-24 right-6 lg:right-10 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70">
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-electric opacity-60 animate-ping" />
          <span className="relative inline-flex rounded-full w-2 h-2 bg-cyan-electric" />
        </span>
        ao vivo · ccaengenharia.com.br
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/85">
              Gestão técnica da garantia predial
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[0.98] tracking-tight text-balance">
            Pós-obra sem gestão gera{" "}
            <span className="text-gradient">custos invisíveis</span>.
          </h1>

          <p className="mt-7 text-lg lg:text-xl text-cream/80 max-w-xl leading-relaxed">
            Assuma o controle da garantia predial com gestão técnica
            estruturada — metodologia, plataforma digital e rastreabilidade
            completa do chamado ao fechamento.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-cyan-electric text-deep font-medium glow-accent hover:-translate-y-0.5 transition-all"
            >
              Agendar conversa
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md glass text-cream hover:bg-cream/10 transition-colors"
            >
              Solicitar demonstração
            </a>
          </div>

          {/* Mini KPIs */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-cream/15 pt-7">
            <div>
              <div className="font-display text-3xl lg:text-4xl text-cyan-electric tabular-nums">
                <span ref={c1}>0</span>%
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mt-1">
                Menos retrabalho
              </div>
            </div>
            <div>
              <div className="font-display text-3xl lg:text-4xl text-cream tabular-nums">
                <span ref={c2}>0</span>h
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mt-1">
                Otimizadas
              </div>
            </div>
            <div>
              <div className="font-display text-3xl lg:text-4xl text-cream tabular-nums">
                <span ref={c3}>0</span>%
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mt-1">
                Satisfação
              </div>
            </div>
          </div>
        </div>

        {/* Right — video / dashboard mockup */}
        <div className="lg:col-span-6 relative">
          {/* Glow halos */}
          <div className="absolute -inset-8 bg-cyan-electric/20 rounded-3xl blur-3xl -z-10 animate-pulse" />
          <div className="absolute top-1/2 -right-10 w-32 h-32 bg-blue-soft/30 rounded-full blur-3xl -z-10" />

          <div className="relative rounded-2xl overflow-hidden glass-dark shadow-2xl shadow-deep/60">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-cream/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cream/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-cream/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-electric" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60">
                cca · institucional · 02:14
              </div>
              <div className="w-12 text-right font-mono text-[10px] text-cream/50">HD</div>
            </div>

            {/* Video slot */}
            <div className="relative aspect-video bg-gradient-to-br from-ink via-deep to-deep">
              {/* faint grid */}
              <div className="absolute inset-0 grid-bg-dark opacity-40" />
              {/* aurora */}
              <div className="absolute inset-0 gradient-aurora" />

              <video
                className="absolute inset-0 w-full h-full object-cover opacity-0"
                playsInline
                muted
                loop
                aria-hidden
              />

              {/* Placeholder visual */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <button
                    onClick={() => setPlaying((p) => !p)}
                    className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-electric text-deep hover:scale-110 transition-transform ring-pulse glow-accent"
                    aria-label="Reproduzir vídeo"
                  >
                    {playing ? (
                      <span className="text-2xl">❚❚</span>
                    ) : (
                      <span className="text-2xl translate-x-0.5">▶</span>
                    )}
                  </button>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-cream/65">
                    Espaço reservado para vídeo
                  </p>
                </div>
              </div>

              {/* Live caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-md glass-dark font-mono text-[10px] uppercase tracking-[0.2em] text-cream/85">
                  {slots[slot]}
                </div>
                <div className="flex gap-1">
                  {slots.map((_, i) => (
                    <span
                      key={i}
                      className={`h-0.5 transition-all ${
                        i === slot ? "w-6 bg-cyan-electric" : "w-3 bg-cream/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Footer strip */}
            <div className="grid grid-cols-3 divide-x divide-cream/10 border-t border-cream/10">
              <div className="px-4 py-3">
                <div className="font-mono text-[9px] uppercase tracking-widest text-cream/45">
                  Status
                </div>
                <div className="text-cream text-sm font-medium mt-0.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric animate-pulse" />
                  Operacional
                </div>
              </div>
              <div className="px-4 py-3">
                <div className="font-mono text-[9px] uppercase tracking-widest text-cream/45">
                  Demandas
                </div>
                <div className="text-cream text-sm font-medium mt-0.5">128 ativas</div>
              </div>
              <div className="px-4 py-3">
                <div className="font-mono text-[9px] uppercase tracking-widest text-cream/45">
                  SLA
                </div>
                <div className="text-cyan-electric text-sm font-medium mt-0.5">98,4%</div>
              </div>
            </div>
          </div>

          {/* Floating data card */}
          <div
            className="hidden lg:flex absolute -left-8 -bottom-10 glass-dark rounded-xl px-5 py-4 items-center gap-4 shadow-2xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <div className="w-10 h-10 rounded-full bg-cyan-electric/20 grid place-items-center text-cyan-electric font-mono text-sm">
              ✓
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-cream/55">
                Caso #2841 · resolvido
              </div>
              <div className="text-cream text-sm font-medium">
                Diagnóstico técnico aprovado
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60">
        <span className="font-mono text-[10px] uppercase tracking-[0.35em]">Role</span>
        <span className="w-px h-10 bg-gradient-to-b from-cyan-electric to-transparent" />
      </div>
    </section>
  );
}
