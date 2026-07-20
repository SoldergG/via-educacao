import { AdminShell } from "@/components/admin/AdminShell";
import { getCertificacao } from "@/lib/content/queries";
import { CertificacaoForm } from "./client-form";

export default async function CertificacaoAdminPage() {
  const certificacao = await getCertificacao();

  return (
    <AdminShell title="Certificações">
      <CertificacaoForm certificacao={certificacao} />
    </AdminShell>
  );
}
