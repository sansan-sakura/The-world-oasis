import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    option: {
      data: {
        fullName,
        avater: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function getCurentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avater }) {
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  if (!avater) return data;

  const fileName = `avater-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage.from("avatars").upload(fileName, avater);

  if (storageError) throw new Error(storageError.message);

  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: { avater: "url" },
  });

  if (error2) throw new Error(error2.message);

  return updatedUser;
}
