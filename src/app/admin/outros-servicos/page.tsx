import { AdminShell } from "@/components/admin/AdminShell";
import { getOutrosServicos } from "@/lib/content/queries";
import { OutrosServicosTabs } from "./outro-servico-form";

export default async function OutrosServicosAdminPage() {
  const servicos = await getOutrosServicos();

  return (
    <AdminShell title="Outros Serviços">
      <OutrosServicosTabs servicos={servicos} />
    </AdminShell>
  );
}
