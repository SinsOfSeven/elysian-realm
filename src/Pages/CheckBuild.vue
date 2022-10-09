<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import { supabase, supabaseReviewDatabase } from "@/utilities/supabase";
import Guest from "@/Layouts/Guest.vue";

const route = useRoute().params.id;
const id = ref(route ?? "");

const result = ref({ created_at: "-", review: "-", approve: "-", reject: "-", reason: "-" });

const search = async () => {
  if (id.value === "") {
    alert("Oops, error!\nyou must fill the textbox first");
    return;
  }

  const { data, error } = await supabase.from(supabaseReviewDatabase).select().eq("id", id.value).single();
  if (error) alert(`Oops, error!\nMessage: ${error.message}\nDetails: ${error.details}`);

  result.value = { ...data };
  result.value.created_at = result.value.created_at ? new Date(result.value.created_at).toLocaleString() : '-';
  result.value.review = result.value.review ? new Date(result.value.review).toLocaleString() : '-';
  result.value.approve = result.value.approve ? new Date(result.value.approve).toLocaleString() : '-';
  result.value.reject = result.value.reject ? new Date(result.value.reject).toLocaleString() : '-';
  result.value.reason = result.value.reason ? result.value.reason : '-';
}
</script>
<template>
<Guest>
  <router-link class="absolute top-4 left-4 md:left-8 underline text-gray-300 hover:text-white" to="/">
    <div class="flex w-full items-center">
      <ArrowLeftIcon class="h-4 w-4 mr-2" /> Back to home page
    </div>
  </router-link>
<article class="prose prose-invert w-full px-4 md:max-w-screen-sm lg:max-w-screen-md mx-auto py-16">
  <h1>Status Build</h1>
  <p>Insert your ID build to show status of your build progress</p>
  <div class="w-full flex space-x-4">
    <input type="text" class="prose-none rounded w-full text-gray-900" v-model="id">
    <button @click="search" class="px-4 py-2 bg-slate-700 rounded">Search</button>
  </div>
  <table class="prose-none w-full border-collapse border border-white text-lg">
    <tr>
      <td class="py-2 px-4 border border-white">Submit</td>
      <td class="py-2 px-4 border border-white">{{ result.created_at }}</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border border-white">Review</td>
      <td class="py-2 px-4 border border-white">{{ result.review }}</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border border-white">Approve</td>
      <td class="py-2 px-4 border border-white">{{ result.approve }}</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border border-white">Reject</td>
      <td class="py-2 px-4 border border-white">{{ result.reject }}</td>
    </tr>
    <tr>
      <td class="py-2 px-4 border border-white">Reason</td>
      <td class="py-2 px-4 border border-white">{{ result.reason }}</td>
    </tr>
  </table>
</article>
</Guest>
</template>