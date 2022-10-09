<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { supabase, supabaseValkyrieDatabase } from "@/utilities/supabase";
import Loading from "@/Components/Loading.vue";
import Admin from "@/Layouts/Admin.vue";

interface Valkyrie { name: string, slug: string; };
const valkyries = ref<Valkyrie[]>([{ name: "", slug: "" }]);
const selectedValkyries = ref<Valkyrie[]>([{ name: "", slug: "" }]);
const loading = ref(false);
const search = ref("");
const logout = async () => { await supabase.auth.signOut(); window.location.replace("/") };

const getValkyries = async () => {
  try {
    let { data, error } = await supabase.from(supabaseValkyrieDatabase).select("name, slug").order("slug");
    if (error) alert(`Oops, error!\nMessage: ${error.message}\nDetails: ${error.details}`);
    if (data) {
      valkyries.value = data;
      selectedValkyries.value = valkyries.value;
    };
    loading.value = false;
  } catch (error) {
    alert(error);
  }
}

const filterValkyries = () => {
  if (search.value == undefined) selectedValkyries.value = valkyries.value;
  else {
    selectedValkyries.value = valkyries.value.filter(el => el.name.toLowerCase().includes(search.value.toLowerCase()));
  }
}

onMounted(() => {
  getValkyries();
});

watch(search, (last, old) => filterValkyries());
</script>
<template>
  <Loading v-if="loading" />
  <Admin v-else>
    <div class="w-full">
      <nav class="flex w-full bg-gradient-to-r from-slate-400 to-gray-700 py-4 justify-end px-8">
        <button @click="logout" class="hover:underline">Logout</button>
      </nav>
      <div class="w-full max-w-lg mx-auto pt-8 space-y-8">
        <div class="w-full flex items-center space-x-4">
          <input type="text" id="search" v-model="search" class="w-2/3 rounded-full text-gray-900"
            placeholder="Search valkyrie ..." />
          <router-link to="/admin/valkyries/create" class="hover:underline w-1/3 px-4 py-2 text-center rounded-lg bg-slate-600">Add Valkyrie</router-link>
        </div>
        <table class="table w-full border-collapse">
          <thead>
            <tr>
              <th class="border border-slate-100 py-2 px-4">Name</th>
              <th class="border border-slate-100 py-2 px-4">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="valkyrie in selectedValkyries" :key="valkyrie.slug">
              <td class="border border-slate-100 py-3 px-4">{{ valkyrie.name }}</td>
              <td class="border border-slate-100 py-3 px-4 text-center">
                <router-link :to="`/admin/valkyries/${valkyrie.slug}`">
                  Edit
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Admin>
</template>