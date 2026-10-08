import { RevealOnScroll } from "./RevealOnScroll";

type Passo = { numero: string; titulo: string; descricao: string };

const PASSOS: Passo[] = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao:
      "Ouvimos e analisamos o contexto educativo, os dados e as necessidades reais do território ou da instituição.",
  },
  {
    numero: "02",
    titulo: "Estratégia",
    descricao:
      "Desenhamos um plano à medida, com objetivos claros, prioridades definidas e indicadores de sucesso.",
  },
  {
    numero: "03",
    titulo: "Implementação",
    descricao:
      "Colocamos as soluções no terreno — ferramentas, formação e processos — com acompanhamento de perto.",
  },
  {
    numero: "04",
    titulo: "Acompanhamento",
    descricao:
      "Medimos resultados e ajustamos ao longo do tempo, para garantir impacto duradouro e sustentável.",
  },
];

export function Processo() {
  return (
    <section id="abordagem" className="bg-brand-900 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="max-w-2xl">
          <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Como trabalhamos
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-[2.6rem] sm:leading-[1.1]">
            Um método claro, do primeiro contacto ao resultado
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PASSOS.map((passo, index) => (
            <RevealOnScroll key={passo.numero} delay={index * 0.08}>
              <div className="flex flex-col">
                <span className="font-display text-5xl font-semibold text-brand-400">
                  {passo.numero}
                </span>
                <div className="mt-5 h-px w-full bg-white/15" />
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {passo.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-200">
                  {passo.descricao}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
