<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/utilities/supabase";

type Form = { email: string; password: string };
const form = ref<Form>({ email: "", password: "" });
const login = async () => {
  const { user, session, error } = await supabase.auth.signIn({
    email: form.value.email,
    password: form.value.password,
  });

  if (error) alert(error.message);
  window.location.replace("/admin");
}
</script>
<template>
  <form class="bg-slate-700 w-full max-w-sm space-y-3 m-auto py-4 rounded-lg mt-16" @submit.prevent="login">
    <div class="flex flex-col w-full px-8">
      <label for="email" class="text-sm">Email</label>
      <input type="text" v-model="form.email" id="email" class="rounded text-gray-700" placeholder="john@example.com"
        tabindex="0">
    </div>
    <div class="flex flex-col w-full px-8">
      <label for="password" class="text-sm">Password</label>
      <input type="password" v-model="form.password" id="password" class="rounded text-gray-700" tabindex="1">
    </div>
    <div class="flex justify-end px-8">
      <button class="px-4 py-2 bg-gray-600 border-2 border-gray-800 rounded hover:bg-gray-800"
        tabindex="2">Login</button>
    </div>
  </form>
</template>