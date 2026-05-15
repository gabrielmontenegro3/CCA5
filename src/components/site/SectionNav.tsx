import { useEffect, useState } from "react";
import { MAIN_NAV_HEIGHT, SITE_HEADER_OFFSET_PX, SITE_SECTIONS } from "@/lib/siteSections";
import { cn } from "@/lib/utils";

export function SectionNav() {
  const [activeId, setActiveId] = useState<string>(SITE_SECTIONS[0].id);

  useEffect(() => {
    const sections = SITE_SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${SITE_HEADER_OFFSET_PX}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Atalhos das seções"
      className="fixed inset-x-0 z-40 border-b border-cream/10 bg-deep/88 backdrop-blur-xl"
      style={{ top: MAIN_NAV_HEIGHT }}
    >
      <div className="h-9 overflow-x-auto flex justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="inline-flex h-full items-center justify-center gap-0.5 sm:gap-1 px-4 sm:px-6 lg:px-10">
          {SITE_SECTIONS.map(({ id, label }) => {
            const isActive = activeId === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={cn(
                  "shrink-0 px-3 py-1 rounded-md font-mono text-[10px] uppercase tracking-[0.18em] transition-colors whitespace-nowrap",
                  isActive
                    ? "text-cyan-electric bg-cream/10"
                    : "text-cream/55 hover:text-cream/90 hover:bg-cream/5",
                )}
                aria-current={isActive ? "location" : undefined}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
