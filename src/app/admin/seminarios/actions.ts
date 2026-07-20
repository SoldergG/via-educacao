"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/auth/require-admin";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { uploadImageIfPresent } from "@/lib/content/upload-image";
import type { SectionFormState } from "@/lib/admin/form-state";

function readSeminarioFields(formData: FormData) {
  return {
    titulo: String(formData.get("titulo") ?? ""),
    data_evento: String(formData.get("data_evento") ?? "") || null,
    descricao: String(formData.get("descricao") ?? ""),
    pdf_url: String(formData.get("pdf_url") ?? ""),
    image_alt: String(formData.get("image_alt") ?? ""),
  };
}

export async function createSeminarioAction(
  _prevState: SectionFormState,
  formData: FormData
): Promise<SectionFormState> {
  await requireAdminSession();

  let newId: string | null = null;
  try {
    const { data, error } = await supabaseAdmin
      .from("viaeducacao_seminarios")
      .insert(readSeminarioFields(formData))
      .select("id")
      .single();
    if (error) throw error;
    newId = data.id;

    const imageUrl = await uploadImageIfPresent(
      formData.get("image") as File | null,
      `seminarios/${newId}`
    );
    if (imageUrl) {
      const { error: imgError } = await supabaseAdmin
        .from("viaeducacao_seminarios")
        .update({ image_path: imageUrl })
        .eq("id", newId);
      if (imgError) throw imgError;
    }
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Erro ao criar." };
  }

  revalidatePath("/seminarios");
  revalidatePath("/admin/seminarios");
  redirect("/admin/seminarios");
}

export async function updateSeminarioAction(
  id: string,
  _prevState: SectionFormState,
  formData: FormData
): Promise<SectionFormState> {
  await requireAdminSession();

  try {
    const imageUrl = await uploadImageIfPresent(
      formData.get("image") as File | null,
      `seminarios/${id}`
    );
    const { error } = await supabaseAdmin
      .from("viaeducacao_seminarios")
      .update({
        ...readSeminarioFields(formData),
        ...(imageUrl ? { image_path: imageUrl } : {}),
      })
      .eq("id", id);
    if (error) throw error;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Erro ao guardar." };
  }

  revalidatePath("/seminarios");
  revalidatePath("/admin/seminarios");
  return { success: true };
}

export async function deleteSeminarioAction(id: string) {
  await requireAdminSession();
  const { error } = await supabaseAdmin.from("viaeducacao_seminarios").delete().eq("id", id);
  if (error) throw error;
  revalidatePath("/seminarios");
  revalidatePath("/admin/seminarios");
}

export async function toggleSeminarioPublicadoAction(id: string, publicado: boolean) {
  await requireAdminSession();
  const { error } = await supabaseAdmin
    .from("viaeducacao_seminarios")
    .update({ publicado })
    .eq("id", id);
  if (error) throw error;
  revalidatePath("/seminarios");
  revalidatePath("/admin/seminarios");
}
