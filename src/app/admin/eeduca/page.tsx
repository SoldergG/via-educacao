import { AdminShell } from "@/components/admin/AdminShell";
import { getEeduca } from "@/lib/content/queries";
import { EeducaTabs } from "./eeduca-form";

export default async function EeducaPage() {
  const eeduca = await getEeduca();

  return (
    <AdminShell title="E@Educa">
      <EeducaTabs eeduca={eeduca} />
    </AdminShell>
  );
}
