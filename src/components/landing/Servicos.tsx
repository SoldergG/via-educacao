import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { RevealOnScroll } from "./RevealOnScroll";

type IconProps = { size?: number; className?: string };

/* Ícones de linha desenhados à medida — traço fino, geométrico e coerente. */

function IconPortal({ size = 26, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <line x1="3" y1="8.5" x2="21" y2="8.5" />
      <rect x="6.5" y="12" width="4" height="4" rx="1" />
      <rect x="13.5" y="12" width="4" height="4" rx="1" />
    </svg>
  );
}

function IconMapa({ size = 26, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 4 3 6.2v13.8L9 18l6 2 6-2.2V4l-6 2.2z" />
      <line x1="9" y1="4" x2="9" y2="18" />
      <line x1="15" y1="6.2" x2="15" y2="20" />
    </svg>
  );
}

function IconFormacao({ size = 26, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 4 2 8l10 4 10-4z" />
      <path d="M6 10.4V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.6" />
      <line x1="22" y1="8" x2="22" y2="13.5" />
    </svg>
  );
}

function IconCompasso({ size = 26, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 10.5 10.5 8.5 15.5 13.5 13.5z" />
    </svg>
  );
}

function IconSelo({ size = 26, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9.5 9 11 10.5 14.5 7.2" />
      <path d="M8.7 13.4 7 20l5-2.4L17 20l-1.7-6.6" />
    </svg>
  );
}

function IconEvento({ size = 26, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

type Servico = {
  titulo: string;
  descricao: string;
  href: string;
  Icone: (props: IconProps) => React.ReactElement;
};

const SERVICOS: Servico[] = [
  {
    titulo: "Portal e@educa®",
    descricao:
      "Plataforma de gestão educativa para autarquias e colégios: refeições, transportes, AEC e comunicação com as famílias.",
    href: "/e-educa",
    Icone: IconPortal,
  },
  {
    titulo: "Cartas Educativas & PEM",
    descricao:
      "Elaboração e revisão de cartas educativas e projetos educativos municipais, com base em diagnóstico e dados do território.",
    href: "/cartas-educativas",
    Icone: IconMapa,
  },
  {
    titulo: "Formação",
    descricao:
      "Ações de formação para profissionais de educação, autarquias e agrupamentos, adaptadas às necessidades de cada equipa.",
    href: "/formacao",
    Icone: IconFormacao,
  },
  {
    titulo: "Consultoria & AEC",
    descricao:
      "Apoio na gestão de atividades de enriquecimento curricular e outros serviços de consultoria educativa à medida.",
    href: "/outros-servicos",
    Icone: IconCompasso,
  },
  {
    titulo: "Certificações",
    descricao:
      "Entidade certificada, com acompanhamento em processos de certificação e garantia de qualidade dos serviços.",
    href: "/certificacoes",
    Icone: IconSelo,
  },
  {
    titulo: "Seminários & Eventos",
    descricao:
      "Organização de congressos, seminários e eventos que juntam a comunidade educativa em torno de temas atuais.",
    href: "/seminarios",
    Icone: IconEvento,
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="max-w-2xl">
          <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            O que fazemos
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">
            Consultoria educativa, do diagnóstico ao terreno
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Trabalhamos com autarquias, colégios e agrupamentos para transformar a
            gestão educativa em resultados concretos.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((servico, index) => (
            <RevealOnScroll key={servico.titulo} delay={(index % 3) * 0.06}>
              <Link
                href={servico.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-paper p-7 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_20px_50px_-24px_rgba(19,33,28,0.25)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl border border-border text-brand-700 transition-colors group-hover:border-brand-300 group-hover:bg-brand-50">
                  <servico.Icone size={26} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
                  {servico.titulo}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-muted">
                  {servico.descricao}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                  Saber mais
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
