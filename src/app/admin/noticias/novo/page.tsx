import { AdminShell } from "@/components/admin/AdminShell";
import { createNoticiaAction } from "../actions";
import { NoticiaForm } from "../noticia-form";

export default function NovaNoticiaPage() {
  return (
    <AdminShell title="Nova notícia" backHref="/admin/noticias">
      <NoticiaForm
        action={createNoticiaAction}
        initialValues={{
          titulo: "",
          slug: "",
          resumo: "",
          corpo: "",
          data_noticia: null,
          image_path: null,
          image_alt: "",
        }}
        submitLabel="Criar notícia"
      />
    </AdminShell>
  );
}
