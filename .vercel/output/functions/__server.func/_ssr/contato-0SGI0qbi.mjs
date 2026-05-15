import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, f as fieldImg, i as industrialImg, c as cn, l as logoCCA } from "./utils-DxbC-_0b.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { C as Checkbox$1, a as CheckboxIndicator } from "../_libs/radix-ui__react-checkbox.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { C as Check } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Checkbox = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Checkbox$1,
  {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { className: cn("grid place-content-center text-current"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = Checkbox$1.displayName;
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const MAIL = "contato@cca-engenharia.com.br";
const CONSTRUTORA_TEMAS = [
  "Garantia predial",
  "Assistência técnica",
  "Inspeção predial",
  "Diagnóstico técnico",
  "Laudos técnicos",
  "Organização operacional do pós-obra",
  "Controle técnico das ocorrências",
  "Fluxo de atendimento técnico"
];
const CONSTRUTORA_TIPOS = [
  "Edifícios Verticais / Horizontais",
  "Condomínios",
  "Loteamentos",
  "Corporativos",
  "Galpões",
  "Obras públicas",
  "Outros"
];
const INDUSTRIA_CONDICOES = [
  "Degradação de sistemas construtivos",
  "Corrosão estrutural",
  "Falhas em revestimentos",
  "Umidade / infiltração",
  "Integridade funcional",
  "Reabilitação em operação",
  "Continuidade operacional",
  "Inspeção técnica"
];
const INDUSTRIA_SETORES = [
  "Alimentos",
  "Logística",
  "Energia",
  "Química",
  "Industrial leve",
  "Industrial pesada",
  "Outros"
];
function toggleSetItem(set, key, checked) {
  const next = new Set(set);
  if (checked) next.add(key);
  else next.delete(key);
  return next;
}
function ContatoIntro() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative border-b border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-light opacity-40 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2", children: "Entrada no site" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-electric mb-4", children: "Portal CCA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-foreground text-balance", children: [
        "Entrada técnica para",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "construtoras, incorporadoras e indústria" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "O portal da CCA será utilizado como estrutura de entrada técnica para construtoras, incorporadoras e plantas industriais. O objetivo principal é gerar leads qualificados e iniciar conversas técnicas relacionadas a pós-obra, garantia predial, inspeção técnica, diagnóstico e reabilitação de sistemas construtivos." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/80 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg text-foreground mb-3", children: "O portal não deve transmitir" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground list-disc pl-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "software SaaS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "plataforma comercial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "operação massiva já implantada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "estrutura consolidada de pós-obra" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-cyan-electric/25 bg-deep/5 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg text-foreground mb-3", children: "O portal deve transmitir" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground list-disc pl-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "engenharia especializada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "abordagem consultiva" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "apoio técnico" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "engenharia diagnóstica" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "entendimento operacional" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ContatoPortal() {
  const [flow, setFlow] = reactExports.useState(null);
  const [step, setStep] = reactExports.useState(1);
  const startConstrutora = reactExports.useCallback(() => {
    setFlow("construtora");
    setStep(1);
  }, []);
  const startIndustria = reactExports.useCallback(() => {
    setFlow("industria");
    setStep(1);
  }, []);
  const exitForm = reactExports.useCallback(() => {
    setFlow(null);
    setStep(1);
  }, []);
  if (flow === "construtora") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ConstrutoraFormWizard, { step, setStep, onCancel: exitForm });
  }
  if (flow === "industria") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(IndustriaFormWizard, { step, setStep, onCancel: exitForm });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContatoIntro, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 lg:py-24 bg-secondary/30 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg-light opacity-35 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-5xl font-medium text-center text-foreground text-balance max-w-3xl mx-auto", children: "Selecione o contexto da sua operação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: fieldImg, alt: "", className: "absolute inset-0 w-full h-full object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-electric", children: "Construtora / Incorporadora" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-cream mt-1", children: "Pós-obra" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Soluções técnicas aplicadas à garantia predial, assistência técnica, inspeção e organização operacional de edificações." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-electric", children: "Áreas de atuação" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-1.5 text-sm text-foreground list-disc pl-5 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Garantia predial" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Assistência técnica" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Inspeção predial" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Diagnóstico técnico" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Prognóstico" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Prescrição técnica" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Laudos técnicos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Direcionamento técnico de reabilitação" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Organização operacional do pós-obra" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Controle técnico das ocorrências" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-8 w-full bg-cyan-electric text-deep hover:opacity-90", size: "lg", onClick: startConstrutora, children: "Solicitar Atendimento Técnico" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: industrialImg, alt: "", className: "absolute inset-0 w-full h-full object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-electric", children: "Indústria" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-cream mt-1", children: "Inspeção e Reabilitação" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Soluções técnicas aplicadas à inspeção, diagnóstico e reabilitação de sistemas construtivos em ambiente operacional industrial." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-electric", children: "Áreas de atuação" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-1.5 text-sm text-foreground list-disc pl-5 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Inspeção técnica" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Diagnóstico técnico" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Prognóstico de degradação" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Avaliação de criticidade" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reabilitação de sistemas construtivos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Integridade operacional" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Continuidade operacional" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-8 w-full bg-cyan-electric text-deep hover:opacity-90", size: "lg", onClick: startIndustria, children: "Solicitar Atendimento Técnico" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function FormShell({
  title,
  badge,
  children,
  onBack
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 h-16 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: "← Início" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contato", className: "flex items-center gap-2", "aria-label": "CCA", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoCCA, alt: "CCA", className: "h-9 w-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onBack, className: "text-sm text-muted-foreground hover:text-foreground", children: "Cancelar" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-3xl mx-auto px-6 py-10 lg:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-electric", children: badge }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-2xl sm:text-3xl font-medium text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children })
    ] })
  ] });
}
function ConstrutoraFormWizard({
  step,
  setStep,
  onCancel
}) {
  const [nome, setNome] = reactExports.useState("");
  const [empresa, setEmpresa] = reactExports.useState("");
  const [cargo, setCargo] = reactExports.useState("");
  const [whatsapp, setWhatsapp] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [temas, setTemas] = reactExports.useState(() => /* @__PURE__ */ new Set());
  const [tipos, setTipos] = reactExports.useState(() => /* @__PURE__ */ new Set());
  const [numEmp, setNumEmp] = reactExports.useState("");
  const [volume, setVolume] = reactExports.useState("");
  const mailto = reactExports.useMemo(() => {
    const lines = [
      "=== Atendimento Técnico Pós-obra (Construtora/Incorporadora) ===",
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `Cargo: ${cargo}`,
      `WhatsApp: ${whatsapp}`,
      `E-mail: ${email}`,
      "",
      "Temas da operação:",
      ...[...temas].map((t) => `• ${t}`),
      "",
      "Tipos de empreendimento:",
      ...[...tipos].map((t) => `• ${t}`),
      "",
      `Número de empreendimentos: ${numEmp}`,
      `Volume aproximado de atendimentos: ${volume}`
    ];
    const body = lines.join("\n");
    return `mailto:${MAIL}?subject=${encodeURIComponent("Portal CCA — Construtora/Incorporadora")}&body=${encodeURIComponent(body)}`;
  }, [nome, empresa, cargo, whatsapp, email, temas, tipos, numEmp, volume]);
  const step1Valid = nome.trim() && empresa.trim() && cargo.trim() && whatsapp.trim() && email.trim();
  const step2Valid = temas.size > 0;
  const step3Valid = tipos.size > 0 && numEmp.trim() && volume.trim();
  if (step === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      FormShell,
      {
        badge: "Construtora / Incorporadora",
        title: "Atendimento Técnico Pós-obra",
        onBack: onCancel,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-8", children: "Preencha as informações abaixo para que nossa equipe compreenda o contexto da sua operação e identifique possíveis necessidades técnicas relacionadas ao pós-obra." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-nome", children: "Nome" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "c-nome", className: "mt-1.5", value: nome, onChange: (e) => setNome(e.target.value) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-empresa", children: "Empresa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "c-empresa", className: "mt-1.5", value: empresa, onChange: (e) => setEmpresa(e.target.value) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-cargo", children: "Cargo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "c-cargo", className: "mt-1.5", value: cargo, onChange: (e) => setCargo(e.target.value) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-wa", children: "WhatsApp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "c-wa", className: "mt-1.5", value: whatsapp, onChange: (e) => setWhatsapp(e.target.value) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-email", children: "E-mail" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "c-email", type: "email", className: "mt-1.5", value: email, onChange: (e) => setEmail(e.target.value) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: !step1Valid, onClick: () => setStep(2), className: "bg-cyan-electric text-deep", children: "Próximo" }) })
        ]
      }
    );
  }
  if (step === 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormShell, { badge: "Construtora / Incorporadora", title: "Contexto Operacional", onBack: () => setStep(1), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium mb-6", children: "Quais temas fazem parte da sua operação?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: CONSTRUTORA_TEMAS.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: temas.has(label),
            onCheckedChange: (v) => setTemas((s) => toggleSetItem(s, label, v === true)),
            className: "mt-0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-snug", children: label })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setStep(1), children: "Voltar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: !step2Valid, onClick: () => setStep(3), className: "bg-cyan-electric text-deep", children: "Próximo" })
      ] })
    ] });
  }
  if (step === 3) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormShell, { badge: "Construtora / Incorporadora", title: "Características do Empreendimento", onBack: () => setStep(2), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: CONSTRUTORA_TIPOS.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: tipos.has(label),
            onCheckedChange: (v) => setTipos((s) => toggleSetItem(s, label, v === true)),
            className: "mt-0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-snug", children: label })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-num", children: "Número de empreendimentos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "c-num", className: "mt-1.5", value: numEmp, onChange: (e) => setNumEmp(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-vol", children: "Volume aproximado de atendimentos técnicos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "c-vol", className: "mt-1.5", value: volume, onChange: (e) => setVolume(e.target.value) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setStep(2), children: "Voltar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: !step3Valid, onClick: () => setStep(4), className: "bg-cyan-electric text-deep", children: "Próximo" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormShell, { badge: "Construtora / Incorporadora", title: "Informações registradas com sucesso.", onBack: onCancel, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "As informações serão avaliadas pela equipe técnica da CCA para entendimento inicial das necessidades operacionais relacionadas ao pós-obra." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3 justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setStep(3), children: "Voltar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-cyan-electric text-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: mailto, children: "Enviar Informações" }) })
    ] })
  ] });
}
function IndustriaFormWizard({
  step,
  setStep,
  onCancel
}) {
  const [nome, setNome] = reactExports.useState("");
  const [empresa, setEmpresa] = reactExports.useState("");
  const [cargo, setCargo] = reactExports.useState("");
  const [whatsapp, setWhatsapp] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [condicoes, setCondicoes] = reactExports.useState(() => /* @__PURE__ */ new Set());
  const [setores, setSetores] = reactExports.useState(() => /* @__PURE__ */ new Set());
  const [areaOp, setAreaOp] = reactExports.useState("");
  const [regime, setRegime] = reactExports.useState("");
  const [intervencoes, setIntervencoes] = reactExports.useState("");
  const mailto = reactExports.useMemo(() => {
    const lines = [
      "=== Atendimento Técnico Industrial ===",
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `Cargo: ${cargo}`,
      `WhatsApp: ${whatsapp}`,
      `E-mail: ${email}`,
      "",
      "Condições da operação:",
      ...[...condicoes].map((t) => `• ${t}`),
      "",
      "Setores / tipos:",
      ...[...setores].map((t) => `• ${t}`),
      "",
      `Área operacional aproximada: ${areaOp}`,
      `Regime operacional: ${regime}`,
      `Intervenções recorrentes: ${intervencoes}`
    ];
    return `mailto:${MAIL}?subject=${encodeURIComponent("Portal CCA — Indústria")}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [nome, empresa, cargo, whatsapp, email, condicoes, setores, areaOp, regime, intervencoes]);
  const step1Valid = nome.trim() && empresa.trim() && cargo.trim() && whatsapp.trim() && email.trim();
  const step2Valid = condicoes.size > 0;
  const step3Valid = setores.size > 0 && areaOp.trim() && regime.trim() && intervencoes.trim();
  if (step === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormShell, { badge: "Indústria", title: "Atendimento Técnico Industrial", onBack: onCancel, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-8", children: "Preencha as informações abaixo para que nossa equipe compreenda as condições operacionais do ativo e identifique possíveis necessidades técnicas." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "i-nome", children: "Nome" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "i-nome", className: "mt-1.5", value: nome, onChange: (e) => setNome(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "i-empresa", children: "Empresa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "i-empresa", className: "mt-1.5", value: empresa, onChange: (e) => setEmpresa(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "i-cargo", children: "Cargo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "i-cargo", className: "mt-1.5", value: cargo, onChange: (e) => setCargo(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "i-wa", children: "WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "i-wa", className: "mt-1.5", value: whatsapp, onChange: (e) => setWhatsapp(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "i-email", children: "E-mail" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "i-email", type: "email", className: "mt-1.5", value: email, onChange: (e) => setEmail(e.target.value) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: !step1Valid, onClick: () => setStep(2), className: "bg-cyan-electric text-deep", children: "Próximo" }) })
    ] });
  }
  if (step === 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormShell, { badge: "Indústria", title: "Contexto Operacional do Ativo", onBack: () => setStep(1), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium mb-6", children: "Quais condições fazem parte da operação do ativo?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: INDUSTRIA_CONDICOES.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: condicoes.has(label),
            onCheckedChange: (v) => setCondicoes((s) => toggleSetItem(s, label, v === true)),
            className: "mt-0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-snug", children: label })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setStep(1), children: "Voltar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: !step2Valid, onClick: () => setStep(3), className: "bg-cyan-electric text-deep", children: "Próximo" })
      ] })
    ] });
  }
  if (step === 3) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormShell, { badge: "Indústria", title: "Características Operacionais", onBack: () => setStep(2), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: INDUSTRIA_SETORES.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: setores.has(label),
            onCheckedChange: (v) => setSetores((s) => toggleSetItem(s, label, v === true)),
            className: "mt-0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-snug", children: label })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "i-area", children: "Área operacional aproximada" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "i-area", className: "mt-1.5", value: areaOp, onChange: (e) => setAreaOp(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "i-regime", children: "Regime operacional" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "i-regime", className: "mt-1.5", value: regime, onChange: (e) => setRegime(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "i-int", children: "Intervenções recorrentes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "i-int", className: "mt-1.5", value: intervencoes, onChange: (e) => setIntervencoes(e.target.value) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setStep(2), children: "Voltar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: !step3Valid, onClick: () => setStep(4), className: "bg-cyan-electric text-deep", children: "Próximo" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormShell, { badge: "Indústria", title: "Informações registradas com sucesso.", onBack: onCancel, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "As informações serão avaliadas pela equipe técnica da CCA para entendimento inicial das necessidades relacionadas às condições operacionais do ativo industrial." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3 justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setStep(3), children: "Voltar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-cyan-electric text-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: mailto, children: "Enviar Informações" }) })
    ] })
  ] });
}
function ContatoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { solid: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContatoPortal, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-display text-foreground hover:text-cyan-electric transition-colors", children: "← Voltar ao site" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contato@cca-engenharia.com.br", className: "hover:text-cyan-electric transition-colors", children: "contato@cca-engenharia.com.br" })
    ] }) })
  ] });
}
export {
  ContatoPage as component
};
