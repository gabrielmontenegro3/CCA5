import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
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
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5 lg:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end items-center gap-3 sm:gap-5 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contato",
              className: "inline-flex items-center text-xs sm:text-sm font-medium px-1 py-2 rounded-md text-cream/90 hover:text-cyan-electric hover:bg-cream/5 transition-all whitespace-nowrap",
              children: "Contato"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "block h-7 sm:h-9 w-px shrink-0 bg-gradient-to-b from-transparent via-cream/22 sm:via-cream/35 to-transparent opacity-70 sm:opacity-90",
              "aria-hidden": true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "justify-self-center shrink-0 px-2", "aria-label": "CCA — Início", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoCCA, alt: "CCA", className: "h-10 sm:h-12 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-start items-center gap-3 sm:gap-5 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "block h-7 sm:h-9 w-px shrink-0 bg-gradient-to-b from-transparent via-cream/22 sm:via-cream/35 to-transparent opacity-70 sm:opacity-90",
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/#sobre-nos",
              className: "text-xs sm:text-sm font-medium text-cream/90 hover:text-cyan-electric transition-colors whitespace-nowrap shrink-0",
              children: "Sobre nós"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 min-w-2", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/#contato",
              className: "inline-flex items-center gap-1 text-[10px] leading-tight sm:text-sm font-medium px-2 sm:px-4 py-2 rounded-lg bg-cyan-electric text-deep hover:opacity-90 hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0",
              children: [
                "Fale com especialista",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const fieldImg = "/assets/field-CVNL-Tsb.jpg";
const industrialImg = "/assets/industrial-CcFzInZu.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export {
  Navbar as N,
  cn as c,
  fieldImg as f,
  industrialImg as i,
  logoCCA as l
};
