<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { supabase } from "@/utilities/supabase";
import Card from "@/Components/Card.vue";
import Loading from "@/Components/Loading.vue";
import { Valkyrie } from "@/utilities/types";
import Guest from "@/Layouts/Guest.vue";
import { useValkyrieTypes } from "@/utilities/helpers";

const loading = ref(false);
const valkyries = ref<Array<Valkyrie>>();
const getData = async () => {
  // Fetch list of valkyries from database then remove loading overlay
  try {
    const { data, error, status } = await supabase.from("valkyries").select().order("slug");
    if (error && status !== 406) {
      throw error;
    }
    if (data) {
      valkyries.value = data;
    } 
    loading.value = false;
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
};

const selectedType = ref("ALL");
const types = useValkyrieTypes;
const search = ref("");
const selectedValkyries = computed(() => {
  // This regex is to check each word in keywords that starts with search bar
  const regex = new RegExp(`\\b${search.value.toLowerCase()}`, "g");

  // Filter by search bar and type of valkyries
  if (search.value !== "" && selectedType.value !== "ALL") {
    return valkyries.value?.filter(el => (el.type.toUpperCase() === selectedType.value) && (el.keywords.toLowerCase().match(regex)));
  }
  // Filter by search bar
  else if (search.value !== "") {
    return valkyries.value?.filter(el => el.keywords.toLowerCase().match(regex));
  }
  // Filter by type of valkyries
  else if (selectedType.value !== "ALL") {
    return valkyries.value?.filter(el => el.type.toUpperCase() === selectedType.value);
  }
  // Show all valkyries
  else {
    return valkyries.value
  };
});

onMounted(() => getData());
</script>
<template>
  <Loading v-if="loading" />
  <Guest v-else>
    <div class="mx-auto max-w-2xl py-16 px-4 sm:px-8 lg:max-w-7xl lg:px-8 grow">
      <h1 class="text-center font-thin tracking-widest uppercase text-5xl mb-12">elysian realm</h1>
      <div class="flex w-full justify-center my-4 bg-white skew-x-12">
        <div class="-skew-x-12 w-full sm:w-96">
          <input type="text" v-model="search" class="bg-transparent w-full text-gray-800 border-0 border-r-2 focus:border-0 focus:border-r-2 focus:border-gray-500 focus:ring-0 focus:outline-none"
            placeholder="Search valkyrie ..." />
        </div>
        <div class="flex w-full justify-center">
          <div class="w-full flex lg:hidden">
            <select v-model="selectedType" class="text-center text-gray-900 -skew-x-12 w-full border-none focus:border-none focus:outline-none focus:ring-0 bg-transparent">
              <option v-for="(type, index) in types" :key="index" :value="type">{{ type }}</option>
            </select>
          </div>
          <div class="w-full max-w-lg hidden lg:flex justify-between -skew-x-12">
            <button v-for="(type, index) in types" :key="index" @click="selectedType = type" class="tracking-wider font-xl hover:text-gray-800 hover:font-semibold" :class="selectedType === type ? 'font-semibold text-gray-800' : 'text-gray-500 font-thin'">
              {{ type }}
            </button>
          </div>
        </div>
      </div>
      <div class="mt-12 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Card v-for="valkyrie in selectedValkyries" :valkyrie="valkyrie" :key="valkyrie.name" />
      </div>
    </div>
  </Guest>
</template>