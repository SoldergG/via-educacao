import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Eeduca } from "@/lib/content/types";
import { RevealOnScroll } from "./RevealOnScroll";

const SUBPAGE_HREF: Record<string, string> = {
  geral: "/e-educa",
  colegios: "/e-educa/colegios",
  municipios: "/e-educa/municipios",
};

export function EeducaOverview({ eeduca }: { eeduca: Eeduca[] }) {
  return (
    <section id="eeduca" className="bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">E@Educa</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            O portal e@educa® fornece a autarquias e colégios um serviço de gestão inovador na
            área da educação — já implementado em 16 concelhos, para cerca de 20.000 crianças.
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {eeduca.map((item, index) => (
            <RevealOnScroll key={item.slug} delay={index * 0.08}>
              <Link
                href={SUBPAGE_HREF[item.slug] ?? "/e-educa"}
                className="group flex flex-col overflow-hidden border border-border bg-paper transition-colors hover:border-olive"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 380px, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-ink">{item.titulo}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{item.resumo}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.08em] text-olive group-hover:text-olive-dark">
                    Saber mais
                    <ArrowUpRight size={14} weight="light" />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
