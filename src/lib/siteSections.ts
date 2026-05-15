/** Altura da navbar principal (h-16) */
export const MAIN_NAV_HEIGHT = "4rem";
export const MAIN_NAV_HEIGHT_PX = 64;

/** Altura da barra de atalhos das seções (h-9) */
export const SECTION_NAV_HEIGHT = "2.25rem";
export const SECTION_NAV_HEIGHT_PX = 36;

/** Offset total para scroll e padding do hero */
export const SITE_HEADER_OFFSET = "6.25rem";
/** Mesmo offset em px — IntersectionObserver só aceita px ou % em rootMargin */
export const SITE_HEADER_OFFSET_PX = MAIN_NAV_HEIGHT_PX + SECTION_NAV_HEIGHT_PX;

/** Seções da landing, na ordem em que aparecem na página */
export const SITE_SECTIONS = [
  { id: "top", label: "Início" },
  { id: "problema", label: "Problema" },
  { id: "solucao", label: "Solução" },
  { id: "pilares", label: "Pilares" },
  { id: "fluxo", label: "Fluxo" },
  { id: "beneficios", label: "Benefícios" },
  { id: "sobre-nos", label: "Sobre nós" },
  { id: "confidencialidade", label: "Confidencialidade" },
  { id: "sistema", label: "Sistema" },
  { id: "contato", label: "Contato" },
] as const;
