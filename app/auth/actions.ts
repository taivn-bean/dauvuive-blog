"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect("/login?error=" + error.message);
  }

  redirect("/");
}

export async function signup(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/callback`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "Check your email to confirm your account!" };
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}

export async function forgotPassword(formData: FormData) {
  const email = formData.get("email") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/reset-password`,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "Check your email for the password reset link!" };
}

export async function resetPassword(formData: FormData) {
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "Password updated successfully!" };
}

export async function updateProfile(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const website = formData.get("website") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    data: {
      full_name: fullName,
      website,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "Profile updated successfully!" };
}

export async function changePassword(formData: FormData) {
  const currentPassword = formData.get("currentPassword") as string;
  const newPassword = formData.get("newPassword") as string;
  const supabase = await createClient();

  // First verify the current password
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: (await supabase.auth.getUser()).data.user?.email || "",
    password: currentPassword,
  });

  if (signInError) {
    return { error: "Current password is incorrect" };
  }

  // Then update to the new password
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "Password changed successfully!" };
}

export async function verifyEmail() {
  const supabase = await createClient();

  const { error } = await supabase.auth.resend({
    type: "signup",
    email: (await supabase.auth.getUser()).data.user?.email || "",
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "Verification email sent!" };
}
