import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { AdminShell } from "@/components/admin/AdminShell";

const SECTIONS = [
  { label: "Hero & Aviso", href: "/admin/hero-aviso", description: "Texto de destaque e banner opcional na home" },
  { label: "A Via Educação", href: "/admin/sobre", description: "Texto institucional e estatísticas" },
  { label: "E@Educa", href: "/admin/eeduca", description: "Geral, Colégios e Municípios" },
  { label: "Cartas Educativas", href: "/admin/cartas-educativas", description: "Carta Educativa 2ª Geração e Projeto Educativo Municipal" },
  { label: "Outros Serviços", href: "/admin/outros-servicos", description: "Livro \"A minha escola…\" e consultoria AEC" },
  { label: "Certificações", href: "/admin/certificacao", description: "Certificação PME" },
  { label: "Seminários & Eventos", href: "/admin/seminarios", description: "Congressos e seminários" },
  { label: "Parcerias", href: "/admin/parcerias", description: "Logótipos e links dos parceiros" },
  { label: "Notícias", href: "/admin/noticias", description: "Arquivo de comunicados" },
  { label: "Contacto", href: "/admin/contacto", description: "Morada, telefones, email e Google Maps" },
  { label: "Pedidos recebidos", href: "/admin/pedidos", description: "Contacto, formação e recrutamento" },
];

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Painel de administração" backHref={null}>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 inline-flex items-center gap-1 text-[13px] uppercase tracking-[0.1em] text-olive hover:text-olive-dark"
      >
        Ver site <ArrowUpRight size={14} weight="light" />
      </a>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="border border-border bg-paper p-6 transition-colors hover:border-olive"
          >
            <p className="font-display text-xl text-ink">{section.label}</p>
            <p className="mt-1.5 text-sm text-ink-muted">{section.description}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
