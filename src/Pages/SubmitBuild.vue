<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import { supabase, supabaseReviewDatabase } from "@/utilities/supabase";
import Guest from "@/Layouts/Guest.vue";
import Loading from "@/Components/Loading.vue";

const url = ref("");
const id = ref("");
const loading = ref(true);

const isValid = (url: string): boolean => {
  const urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
  return !!urlPattern.test(url);
}

const submit = async () => {
  if (isValid(url.value)) {
    loading.value = true;

    const { data, error } = await supabase.from(supabaseReviewDatabase).insert({
      url: url.value
    });
  
    if (error) alert(`Oops, error!\nmessage: ${error.message}\ndetails: ${error.details}`);
    // @ts-ignore
    id.value = data[0].id;

    loading.value = false;
  } else { alert("URL is invalid"); }
};

onMounted(() => loading.value = false);
</script>
<template>
  <Loading v-if="loading" />
  <Guest v-else>
    <router-link class="absolute top-4 left-4 md:left-8 underline text-gray-300 hover:text-white" to="/">
      <div class="flex w-full items-center">
        <ArrowLeftIcon class="h-4 w-4 mr-2" /> Back to home page
      </div>
    </router-link>
    <article class="prose prose-invert w-full mx-auto py-16 px-4 md:max-w-screen-sm lg:max-w-screen-md">
      <h1>Submit Build</h1>
      <h3>There you go, a bridge between you and our system</h3>
      <p>Keep in mind that you can submit more than one vids at once, just separate each links with comma. Also we need
        to review your video first before added to website. After submit a build, you will get a code then you go
        <router-link to="/check-build">here</router-link> about your progress
      </p>
      <p v-if="id !== ''">Congrats, your ID is {{ id }}. You can check your progress <router-link :to="`/check-build/${id}`">now</router-link> or later</p>
      <form @submit.prevent="submit" class="prose-none space-y-4 w-2/3 mx-auto pt-8 pb-24 flex">
        <div class="w-full flex justify-between items-center space-x-4">
          <span class="w-1/4">Video URL</span>
          <input type="url" v-model="url" class="rounded w-full text-gray-900" />
          <button class="px-4 py-2 rounded bg-slate-700">Submit</button>
          </div>
      </form>
    </article>
  </Guest>
</template>