import Image from "next/image";
import type { Parceria } from "@/lib/content/types";
import { RevealOnScroll } from "./RevealOnScroll";

export function Parcerias({ parcerias }: { parcerias: Parceria[] }) {
  return (
    <section id="parcerias" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="max-w-xl">
          <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Confiança
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            Parcerias
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Trabalhamos em rede com marcas e organizações que partilham os nossos valores.
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {parcerias.map((parceria, index) => (
            <RevealOnScroll key={parceria.id} delay={index * 0.05}>
              <a
                href={parceria.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-2xl border border-border bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_16px_40px_-22px_rgba(19,33,28,0.25)]"
              >
                <div className="relative h-full w-full opacity-80 transition-opacity hover:opacity-100">
                  <Image
                    src={parceria.imageSrc}
                    alt={parceria.imageAlt}
                    fill
                    sizes="180px"
                    className="object-contain"
                  />
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
