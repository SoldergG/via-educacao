"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/auth/require-admin";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { uploadImageIfPresent } from "@/lib/content/upload-image";
import type { SectionFormState } from "@/lib/admin/form-state";

export async function updateCartasEducativasAction(
  _prevState: SectionFormState,
  formData: FormData
): Promise<SectionFormState> {
  await requireAdminSession();

  try {
    const cartaImageUrl = await uploadImageIfPresent(
      formData.get("carta_image") as File | null,
      "cartas-educativas/carta"
    );
    const pemImageUrl = await uploadImageIfPresent(
      formData.get("pem_image") as File | null,
      "cartas-educativas/pem"
    );

    const { error } = await supabaseAdmin
      .from("viaeducacao_cartas_educativas")
      .update({
        titulo: String(formData.get("titulo") ?? ""),
        texto: String(formData.get("texto") ?? ""),
        carta_cta_label: String(formData.get("carta_cta_label") ?? ""),
        carta_cta_href: String(formData.get("carta_cta_href") ?? ""),
        pem_cta_label: String(formData.get("pem_cta_label") ?? ""),
        pem_cta_href: String(formData.get("pem_cta_href") ?? ""),
        ...(cartaImageUrl ? { carta_image_path: cartaImageUrl } : {}),
        ...(pemImageUrl ? { pem_image_path: pemImageUrl } : {}),
      })
      .eq("id", 1);
    if (error) throw error;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Erro ao guardar." };
  }

  revalidatePath("/");
  revalidatePath("/cartas-educativas");
  revalidatePath("/admin/cartas-educativas");
  return { success: true };
}
