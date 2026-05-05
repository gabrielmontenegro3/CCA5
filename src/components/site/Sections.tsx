import { useReveal, useCountUp } from "@/hooks/use-reveal";
import industrialImg from "@/assets/industrial.jpg";
import fieldImg from "@/assets/field.jpg";
import logoCCA from "@/assets/cca-logo.png";

/* Helper — small section eyebrow */
function Eyebrow({ n, label }: { n: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-electric mb-5">
      <span className="w-6 h-px bg-cyan-electric" />
      {n} · {label}
    </div>
  );
}

/* TELA 2 — DOR DO CLIENTE */
export function Problema() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { n: "01", t: "Respostas lentas", d: "Chamados parados em SAC sem suporte técnico especializado." },
    { n: "02", t: "Retrabalho constante", d: "Equipes operam em ciclos repetidos de correção." },
    { n: "03", t: "Falta de padrão", d: "Cada caso conduzido de forma improvisada e sem método." },
    { n: "04", t: "Baixa assertividade", d: "Laudos divergentes comprometem a decisão técnica." },
    { n: "05", t: "Custos aumentando", d: "Operação sem controle vira prejuízo invisível no balanço." },
  ];
  return (
    <section
      id="problema"
      ref={ref}
      className="reveal py-28 lg:py-36 relative bg-background overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-6">
            <Eyebrow n="02" label="O problema" />
            <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-foreground text-balance">
              Sua pós-obra está{" "}
              <span className="text-gradient">fora de controle</span>?
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Após a entrega, chamados caem em SAC ou assistência técnica — áreas
              sem suporte técnico especializado e sem metodologia.{" "}
              <span className="text-foreground font-medium">
                A garantia predial vira um processo reativo e desorganizado.
              </span>
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-sm">
          {items.map((it) => (
            <div
              key={it.n}
              className="group bg-card p-7 lg:p-8 hover:bg-accent/5 transition-colors duration-500 relative"
            >
              <div className="font-mono text-xs text-muted-foreground mb-10">{it.n}</div>
              <div className="font-display text-xl lg:text-2xl text-foreground mb-2 leading-tight">
                {it.t}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">{it.d}</div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-cyan-electric scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 3 — VIRADA (reposicionamento) */
export function Solucao() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="virada"
      ref={ref}
      className="reveal py-28 lg:py-40 bg-deep text-cream relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="absolute inset-0 gradient-aurora" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-cyan-electric/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-soft/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Eyebrow n="03" label="O diagnóstico" />
          <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl font-medium leading-[0.98] tracking-tight text-balance">
            A garantia predial não é o problema.{" "}
            <span className="text-gradient">A falta de gestão técnica é.</span>
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-cream/75 max-w-xl leading-relaxed">
            Com método e tecnologia, o pós-obra deixa de ser um centro de
            problemas e se torna um processo construído sobre quatro pilares.
          </p>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          {[
            { k: "Pilar 01", v: "Controlado" },
            { k: "Pilar 02", v: "Padronizado" },
            { k: "Pilar 03", v: "Rastreável" },
            { k: "Pilar 04", v: "Orientado por dados" },
          ].map((it) => (
            <div
              key={it.k}
              className="p-6 rounded-xl glass hover:bg-cream/10 transition-colors group"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-electric mb-2">
                {it.k}
              </div>
              <div className="font-display text-xl lg:text-2xl text-cream leading-tight">
                {it.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 4 — SOLUÇÃO (Gestão Técnica da Garantia Predial) */
export function Plataforma() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { t: "Controle total das ocorrências", d: "Cada caso registrado, classificado e acompanhado do início ao fim." },
    { t: "Padronização dos processos", d: "Metodologia única aplicada a toda a operação." },
    { t: "Diagnósticos assertivos", d: "Análise técnica baseada em evidências e histórico." },
    { t: "Decisões com base sólida", d: "Cada decisão sustentada por dados rastreáveis." },
    { t: "Visão completa do ativo", d: "Painel integrado com a saúde técnica do empreendimento." },
  ];
  return (
    <section
      id="solucao"
      ref={ref}
      className="reveal py-28 lg:py-36 bg-secondary/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-electric/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Eyebrow n="04" label="A solução" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-foreground text-balance">
            Gestão Técnica da{" "}
            <span className="text-gradient">Garantia Predial</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Estruturamos todo o pós-obra com metodologia técnica e uma plataforma
            digital integrada que organiza cada etapa da operação.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border text-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-electric animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">
              Metodologia + plataforma CCA
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
          {items.map((it, i) => (
            <div
              key={it.t}
              className={`p-7 rounded-xl bg-card border border-border hover:border-cyan-electric/50 hover:shadow-lg hover:-translate-y-1 transition-all group ${
                i === 0 ? "sm:col-span-2 bg-gradient-to-br from-card to-secondary/40" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="font-display text-xl lg:text-2xl text-foreground">{it.t}</div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              <div className="mt-5 h-0.5 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-cyan-electric w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 5 — COMO FUNCIONA (fluxo) */
export function Fluxo() {
  const ref = useReveal<HTMLDivElement>();
  const steps = [
    "Demanda", "Registro", "Triagem", "Planejamento", "Inspeção",
    "Diagnóstico", "Solução técnica", "Laudo", "Fechamento",
  ];
  return (
    <section
      id="fluxo"
      ref={ref}
      className="reveal py-28 lg:py-36 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex">
            <Eyebrow n="05" label="O fluxo" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
            Um processo claro, do{" "}
            <span className="text-gradient">início ao fim</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Cada etapa é controlada, documentada e integrada.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-electric/40 to-transparent hidden lg:block" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-6 lg:gap-2">
            {steps.map((s, i) => (
              <div
                key={s}
                className="group flex lg:flex-col items-center lg:items-start gap-3 lg:gap-4 relative"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-card border border-border group-hover:border-cyan-electric group-hover:bg-cyan-electric group-hover:shadow-[0_0_30px_oklch(0.78_0.15_220/0.5)] transition-all duration-300 flex items-center justify-center font-mono text-sm text-foreground group-hover:text-deep shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-display text-lg lg:text-xl text-foreground leading-tight">
                    {s}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* TELA 6 — DIFERENCIAL TECNOLÓGICO (substitui Resultados original) */
export function Resultados() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { t: "Dashboard com indicadores", n: "01" },
    { t: "Kanban de chamados", n: "02" },
    { t: "Chat integrado", n: "03" },
    { t: "Upload de imagens e arquivos", n: "04" },
    { t: "Tags e classificação de risco", n: "05" },
    { t: "Notificações automáticas", n: "06" },
    { t: "Histórico completo do ativo", n: "07" },
    { t: "Links para ordens de serviço", n: "08" },
  ];
  return (
    <section
      id="plataforma"
      ref={ref}
      className="reveal py-28 lg:py-36 bg-deep text-cream relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-electric/8 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <Eyebrow n="06" label="Funcionalidades" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance">
            Plataforma digital{" "}
            <span className="text-gradient">integrada</span>.
          </h2>
          <p className="mt-6 text-lg text-cream/75 max-w-xl leading-relaxed">
            Tudo o que sua operação precisa para registrar, analisar e resolver
            ocorrências em um só lugar — com evidências e histórico auditável.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 rounded-2xl overflow-hidden border border-cream/10">
          {items.map((it) => (
            <div
              key={it.n}
              className="bg-deep p-8 lg:p-10 hover:bg-ink transition-colors group relative"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-electric mb-6">
                {it.n}
              </div>
              <div className="font-display text-xl lg:text-2xl text-cream leading-tight">
                {it.t}
              </div>
              <div className="absolute top-0 left-0 h-px w-0 bg-cyan-electric group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 7 — BENEFÍCIOS */
export function Campo() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    "Redução de custos operacionais",
    "Menos retrabalho",
    "Decisões baseadas em dados",
    "Mais segurança jurídica",
    "Padronização técnica",
    "Comunicação clara com o cliente",
  ];
  return (
    <section
      id="beneficios"
      ref={ref}
      className="reveal py-28 lg:py-36 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-6 bg-cyan-electric/10 rounded-3xl blur-2xl" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img
              src={fieldImg}
              alt="Equipe técnica em campo realizando inspeção"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
          </div>
          <div
            className="absolute -bottom-8 -right-4 sm:-right-6 bg-cyan-electric text-deep p-6 rounded-xl max-w-[260px] shadow-2xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
              Na prática
            </div>
            <div className="font-display text-xl mt-1 leading-tight font-medium">
              Operação previsível, sem surpresas
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <Eyebrow n="07" label="Benefícios" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
            O que muda{" "}
            <span className="text-gradient">na prática</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Resultados visíveis no balanço, no tempo de resposta e na confiança
            do cliente final.
          </p>

          <ul className="mt-10 space-y-1">
            {items.map((it, i) => (
              <li
                key={it}
                className="flex items-center gap-4 py-4 border-b border-border group hover:border-cyan-electric transition-colors cursor-default"
              >
                <span className="font-mono text-xs text-muted-foreground w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg lg:text-xl flex-1 text-foreground">
                  {it}
                </span>
                <span className="text-cyan-electric opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* TELA 8 — AUTORIDADE */
export function Industrial() {
  const ref = useReveal<HTMLDivElement>();
  const pilares = [
    { t: "Rigor técnico", d: "Análises sustentadas por critérios objetivos." },
    { t: "Padronização", d: "Metodologia única em toda a operação." },
    { t: "Rastreabilidade", d: "Cada decisão documentada e auditável." },
    { t: "Inteligência aplicada", d: "Dados que orientam a operação." },
  ];
  return (
    <section
      id="autoridade"
      ref={ref}
      className="reveal py-28 lg:py-36 bg-secondary/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Eyebrow n="08" label="Autoridade" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
            Governança técnica do{" "}
            <span className="text-gradient">ativo construído</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A CCA Governança Técnica atua com foco em quatro pilares.
            Mais do que resolver problemas,{" "}
            <span className="text-foreground font-medium">
              estruturamos processos
            </span>.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {pilares.map((p, i) => (
              <div
                key={p.t}
                className="border-l-2 border-cyan-electric pl-4 py-2"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Pilar {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-lg lg:text-xl mt-1 text-foreground">
                  {p.t}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="absolute -inset-6 bg-blue-soft/15 rounded-3xl blur-2xl" />
          <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img
              src={industrialImg}
              alt="Inspeção técnica em ambiente industrial"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* TELA 9 — RESULTADO FINAL */
export function Experiencia() {
  const ref = useReveal<HTMLDivElement>();
  const c1 = useCountUp(63);
  const c2 = useCountUp(41);
  const c3 = useCountUp(98);
  return (
    <section
      id="resultado"
      ref={ref}
      className="reveal py-28 lg:py-36 bg-background overflow-hidden relative"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <Eyebrow n="09" label="Resultado" />
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
            De operação reativa para{" "}
            <span className="text-gradient">gestão estratégica</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A garantia predial deixa de ser um risco e passa a ser um processo
            controlado, inteligente e confiável.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {[
            { v: c1, suf: "%", k: "Redução de retrabalho" },
            { v: c2, suf: "%", k: "Redução de custos" },
            { v: c3, suf: "%", k: "Decisões com evidência" },
          ].map((it, i) => (
            <div key={i} className="bg-card p-10 lg:p-12 group relative">
              <div className="font-display text-6xl lg:text-7xl text-foreground tabular-nums leading-none">
                <span ref={it.v}>0</span>
                <span className="text-cyan-electric">{it.suf}</span>
              </div>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {it.k}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          {["Controlado", "Inteligente", "Confiável"].map((w) => (
            <span
              key={w}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-deep text-cream font-mono text-[11px] uppercase tracking-[0.25em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TELA 10 — DIFERENCIAL (frase de fechamento de marca) */
export function Diferencial() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      ref={ref}
      className="reveal py-32 lg:py-44 bg-deep text-cream relative overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div className="absolute inset-0 grid-bg-dark opacity-25" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex">
          <Eyebrow n="10" label="Posicionamento" />
        </div>
        <h2 className="font-display text-5xl lg:text-7xl xl:text-9xl font-medium leading-[0.95] tracking-tight text-balance">
          Mais que gestão, <br />
          <span className="text-gradient">engenharia aplicada</span>.
        </h2>
        <div className="mt-14 inline-flex items-center gap-4 px-6 py-3 rounded-full glass">
          <span className="w-2 h-2 rounded-full bg-cyan-electric animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80">
            Engenharia · Tecnologia · Evidência
          </span>
        </div>
      </div>
    </section>
  );
}

/* TELA 11 — CTA FINAL */
export function Cta() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="contato"
      ref={ref}
      className="reveal py-28 lg:py-36 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-electric/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Eyebrow n="11" label="Vale a conversa" />
        <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-tight text-balance text-foreground">
          Se isso já acontece na sua operação,{" "}
          <span className="text-gradient">vale a conversa</span>.
        </h2>
        <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Fale com um especialista da CCA Governança Técnica e veja como
          estruturar o pós-obra do seu empreendimento.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="seu@email.com.br"
            className="flex-1 px-5 py-4 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-electric focus:ring-2 focus:ring-cyan-electric/20 transition-all"
          />
          <button
            type="submit"
            className="px-7 py-4 rounded-md bg-cyan-electric text-deep font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all glow-accent"
          >
            Falar com especialista →
          </button>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground text-sm">
          <a
            href="https://wa.me/5585985097622"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 hover:text-cyan-electric transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
            WhatsApp (85) 98509-7622
          </a>
          <a
            href="mailto:contato@cca-engenharia.com.br"
            className="flex items-center gap-2 hover:text-cyan-electric transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
            contato@cca-engenharia.com.br
          </a>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
            Francisco Costa
          </span>
        </div>
      </div>
    </section>
  );
}

/* ÁREA DO CLIENTE — acesso à plataforma */
export function AreaCliente() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="cliente"
      ref={ref}
      className="reveal py-24 bg-secondary/40 border-t border-border relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <Eyebrow n="·" label="Área do cliente" />
          <h2 className="font-display text-3xl lg:text-5xl font-medium leading-[1.05] tracking-tight text-foreground text-balance">
            Acesse ou cadastre{" "}
            <span className="text-gradient">sua operação</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Gerencie demandas técnicas, acompanhe análises e auditorias em um
            único painel.
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-deep text-cream font-medium hover:opacity-90 transition-opacity"
          >
            Acessar plataforma →
          </a>
          <a
            href="#"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-border text-foreground hover:bg-card transition-colors"
          >
            Cadastrar operação
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-14 bg-deep text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-cream rounded-md px-3 py-2">
              <img src={logoCCA} alt="CCA Governança Técnica" className="h-7 w-auto" />
            </div>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mt-3">
            Governança Técnica Predial
          </div>
          <p className="mt-4 text-sm text-cream/65 max-w-xs">
            Gestão técnica de pós-obra com controle, rastreabilidade e
            decisões seguras.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mb-3">
            Navegação
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#problema" className="hover:text-cyan-electric transition-colors">Problema</a></li>
            <li><a href="#solucao" className="hover:text-cyan-electric transition-colors">Solução</a></li>
            <li><a href="#fluxo" className="hover:text-cyan-electric transition-colors">Como funciona</a></li>
            <li><a href="#contato" className="hover:text-cyan-electric transition-colors">Contato</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/55 mb-3">
            Contato
          </div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Francisco Costa</li>
            <li>
              <a href="https://wa.me/5585985097622" className="hover:text-cyan-electric transition-colors">
                WhatsApp (85) 98509-7622
              </a>
            </li>
            <li>
              <a href="mailto:contato@cca-engenharia.com.br" className="hover:text-cyan-electric transition-colors">
                contato@cca-engenharia.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/50">
        <span>© {new Date().getFullYear()} CCA Governança Técnica. Todos os direitos reservados.</span>
        <span className="font-mono uppercase tracking-[0.2em]">Governança técnica aplicada · BR</span>
      </div>
    </footer>
  );
}
