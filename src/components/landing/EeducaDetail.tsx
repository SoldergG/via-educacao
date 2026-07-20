import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import type { Eeduca } from "@/lib/content/types";
import { PageHeader } from "./PageHeader";
import { RevealOnScroll } from "./RevealOnScroll";

export function EeducaDetail({ eeduca }: { eeduca: Eeduca }) {
  return (
    <>
      <PageHeader titulo={eeduca.titulo} intro={eeduca.resumo} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <RevealOnScroll>
            <div className="relative aspect-[5/4] w-full overflow-hidden border border-border">
              <Image
                src={eeduca.imageSrc}
                alt={eeduca.imageAlt}
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <ul className="flex flex-col gap-3">
              {eeduca.pontos.map((ponto) => (
                <li key={ponto} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <CheckCircle size={18} weight="light" className="mt-0.5 shrink-0 text-olive" />
                  <span>{ponto}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
