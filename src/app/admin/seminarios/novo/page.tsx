import { AdminShell } from "@/components/admin/AdminShell";
import { createSeminarioAction } from "../actions";
import { SeminarioForm } from "../seminario-form";

export default function NovoSeminarioPage() {
  return (
    <AdminShell title="Novo evento" backHref="/admin/seminarios">
      <SeminarioForm
        action={createSeminarioAction}
        initialValues={{
          titulo: "",
          data_evento: null,
          descricao: "",
          pdf_url: "",
          image_path: null,
          image_alt: "",
        }}
        submitLabel="Criar evento"
      />
    </AdminShell>
  );
}
