"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/auth/require-admin";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { uploadImageIfPresent } from "@/lib/content/upload-image";
import type { SectionFormState } from "@/lib/admin/form-state";

export async function updateCertificacaoAction(
  _prevState: SectionFormState,
  formData: FormData
): Promise<SectionFormState> {
  await requireAdminSession();

  try {
    const imageUrl = await uploadImageIfPresent(
      formData.get("image") as File | null,
      "certificacao"
    );

    const { error } = await supabaseAdmin
      .from("viaeducacao_certificacao")
      .update({
        texto: String(formData.get("texto") ?? ""),
        image_alt: String(formData.get("image_alt") ?? ""),
        pdf_url: String(formData.get("pdf_url") ?? ""),
        ...(imageUrl ? { image_path: imageUrl } : {}),
      })
      .eq("id", 1);
    if (error) throw error;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Erro ao guardar." };
  }

  revalidatePath("/certificacoes");
  revalidatePath("/admin/certificacao");
  return { success: true };
}
