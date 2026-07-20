import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { SeminarioRow } from "./seminario-row";

export default async function SeminariosAdminPage() {
  const { data: seminarios, error } = await supabaseAdmin
    .from("viaeducacao_seminarios")
    .select("id, titulo, data_evento, publicado")
    .order("ordem", { ascending: true });
  if (error) throw error;

  return (
    <AdminShell title="Seminários & Eventos">
      <Link
        href="/admin/seminarios/novo"
        className="mb-6 inline-flex h-11 items-center bg-orange px-6 text-[13px] font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:bg-orange-dark hover:text-cream"
      >
        + Novo evento
      </Link>

      <div className="flex flex-col gap-3">
        {(seminarios ?? []).map((seminario) => (
          <SeminarioRow key={seminario.id} seminario={seminario} />
        ))}
        {seminarios?.length === 0 && (
          <p className="text-sm text-ink-muted">Ainda não há eventos.</p>
        )}
      </div>
    </AdminShell>
  );
}
