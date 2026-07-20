import { AdminShell } from "@/components/admin/AdminShell";
import { getCartasEducativas } from "@/lib/content/queries";
import { CartasEducativasForm } from "./client-form";

export default async function CartasEducativasAdminPage() {
  const content = await getCartasEducativas();

  return (
    <AdminShell title="Cartas Educativas">
      <CartasEducativasForm content={content} />
    </AdminShell>
  );
}
