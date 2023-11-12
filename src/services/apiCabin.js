import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("Cabin").select("*");
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storgae/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.form("Cabin");
  if (!id) query=query.insert([{ ...newCabin, image: imagePath }]);

  if (id)
    query=query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  if(hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("Cabin").delete().eq("id", data.id);

    console.error(error);
    throw new Error("Cabin image could not be uploaded and the cabin was not created");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("Cabin").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
