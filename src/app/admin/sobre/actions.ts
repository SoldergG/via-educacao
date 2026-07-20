"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/auth/require-admin";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { uploadImageIfPresent } from "@/lib/content/upload-image";
import type { SectionFormState } from "@/lib/admin/form-state";

export async function updateSobreAction(
  _prevState: SectionFormState,
  formData: FormData
): Promise<SectionFormState> {
  await requireAdminSession();

  try {
    const imageUrl = await uploadImageIfPresent(formData.get("image") as File | null, "sobre");
    const pontos = String(formData.get("pontos") ?? "")
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean);

    const { error } = await supabaseAdmin
      .from("viaeducacao_sobre")
      .update({
        titulo: String(formData.get("titulo") ?? ""),
        texto_intro: String(formData.get("texto_intro") ?? ""),
        texto_missao: String(formData.get("texto_missao") ?? ""),
        pontos,
        ano_fundacao: Number(formData.get("ano_fundacao")) || 1999,
        image_alt: String(formData.get("image_alt") ?? ""),
        ...(imageUrl ? { image_path: imageUrl } : {}),
      })
      .eq("id", 1);
    if (error) throw error;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Erro ao guardar." };
  }

  revalidatePath("/");
  revalidatePath("/admin/sobre");
  return { success: true };
}
