"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/auth/require-admin";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { uploadImageIfPresent } from "@/lib/content/upload-image";
import type { SectionFormState } from "@/lib/admin/form-state";

function slugify(titulo: string): string {
  return titulo
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readNoticiaFields(formData: FormData) {
  const tituloRaw = String(formData.get("titulo") ?? "");
  const slugRaw = String(formData.get("slug") ?? "").trim();
  return {
    titulo: tituloRaw,
    slug: slugRaw || slugify(tituloRaw),
    resumo: String(formData.get("resumo") ?? ""),
    corpo: String(formData.get("corpo") ?? ""),
    data_noticia: String(formData.get("data_noticia") ?? "") || null,
    image_alt: String(formData.get("image_alt") ?? ""),
  };
}

export async function createNoticiaAction(
  _prevState: SectionFormState,
  formData: FormData
): Promise<SectionFormState> {
  await requireAdminSession();

  let newId: string | null = null;
  try {
    const { data, error } = await supabaseAdmin
      .from("viaeducacao_noticias")
      .insert(readNoticiaFields(formData))
      .select("id")
      .single();
    if (error) throw error;
    newId = data.id;

    const imageUrl = await uploadImageIfPresent(
      formData.get("image") as File | null,
      `noticias/${newId}`
    );
    if (imageUrl) {
      const { error: imgError } = await supabaseAdmin
        .from("viaeducacao_noticias")
        .update({ image_path: imageUrl })
        .eq("id", newId);
      if (imgError) throw imgError;
    }
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Erro ao criar." };
  }

  revalidatePath("/noticias");
  revalidatePath("/admin/noticias");
  redirect("/admin/noticias");
}

export async function updateNoticiaAction(
  id: string,
  _prevState: SectionFormState,
  formData: FormData
): Promise<SectionFormState> {
  await requireAdminSession();

  try {
    const imageUrl = await uploadImageIfPresent(
      formData.get("image") as File | null,
      `noticias/${id}`
    );
    const { error } = await supabaseAdmin
      .from("viaeducacao_noticias")
      .update({
        ...readNoticiaFields(formData),
        ...(imageUrl ? { image_path: imageUrl } : {}),
      })
      .eq("id", id);
    if (error) throw error;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Erro ao guardar." };
  }

  revalidatePath("/noticias");
  revalidatePath("/admin/noticias");
  return { success: true };
}

export async function deleteNoticiaAction(id: string) {
  await requireAdminSession();
  const { error } = await supabaseAdmin.from("viaeducacao_noticias").delete().eq("id", id);
  if (error) throw error;
  revalidatePath("/noticias");
  revalidatePath("/admin/noticias");
}

export async function toggleNoticiaPublicadoAction(id: string, publicado: boolean) {
  await requireAdminSession();
  const { error } = await supabaseAdmin
    .from("viaeducacao_noticias")
    .update({ publicado })
    .eq("id", id);
  if (error) throw error;
  revalidatePath("/noticias");
  revalidatePath("/admin/noticias");
}
