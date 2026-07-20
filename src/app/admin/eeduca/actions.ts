"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/auth/require-admin";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { uploadImageIfPresent } from "@/lib/content/upload-image";
import type { SectionFormState } from "@/lib/admin/form-state";
import type { EeducaSlug } from "@/lib/content/types";

export async function updateEeducaAction(
  slug: EeducaSlug,
  _prevState: SectionFormState,
  formData: FormData
): Promise<SectionFormState> {
  await requireAdminSession();

  try {
    const imageUrl = await uploadImageIfPresent(
      formData.get("image") as File | null,
      `eeduca/${slug}`
    );
    const pontos = String(formData.get("pontos") ?? "")
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean);

    const { error } = await supabaseAdmin
      .from("viaeducacao_eeduca")
      .update({
        titulo: String(formData.get("titulo") ?? ""),
        resumo: String(formData.get("resumo") ?? ""),
        pontos,
        image_alt: String(formData.get("image_alt") ?? ""),
        ...(imageUrl ? { image_path: imageUrl } : {}),
      })
      .eq("slug", slug);
    if (error) throw error;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Erro ao guardar." };
  }

  revalidatePath("/");
  revalidatePath("/e-educa");
  revalidatePath("/e-educa/colegios");
  revalidatePath("/e-educa/municipios");
  revalidatePath("/admin/eeduca");
  return { success: true };
}
