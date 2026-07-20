import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { updateSeminarioAction } from "../../actions";
import { SeminarioForm } from "../../seminario-form";

export default async function EditarSeminarioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data, error } = await supabaseAdmin
    .from("viaeducacao_seminarios")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) notFound();

  return (
    <AdminShell title="Editar evento" backHref="/admin/seminarios">
      <SeminarioForm
        action={updateSeminarioAction.bind(null, id)}
        initialValues={{
          titulo: data.titulo,
          data_evento: data.data_evento,
          descricao: data.descricao,
          pdf_url: data.pdf_url,
          image_path: data.image_path,
          image_alt: data.image_alt,
        }}
        submitLabel="Guardar alterações"
      />
    </AdminShell>
  );
}
