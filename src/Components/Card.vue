<script setup lang="ts">
import { ref, computed } from "vue";
import { Valkyrie } from "@/utilities/types";

type Props = { valkyrie: Valkyrie };
const props = defineProps<Props>();

let loading = ref(true);
let isLoaded = ref(false);

const loaded = () => { loading.value = false; isLoaded.value = true };

const image = computed(() => {
  const nameArray = props.valkyrie.image.split(".");
  return `${nameArray[0]}-min.${nameArray[1]}`;
});
</script>
<template>
  <router-link :to="`/valkyries/${valkyrie.slug}`">
    <div class="group relative w-full">
      <div
        class="aspect-w-1 aspect-h-1 flex min-h-12 lg:h-12 w-full flex-col items-center overflow-hidden bg-transparent rounded-tr-xl transition delay-150 ease-in-out group-hover:opacity-75">
        <img v-if="loading" class="m-auto w-full h-full bg-transparent" src="/assets/loading.gif"
          alt="loading.." />
        <img v-show="isLoaded" :src="image" :alt="valkyrie.name" :class="valkyrie.position" @load="loaded"
          class="h-full w-full scale-105 object-cover group-hover:scale-100 lg:h-full lg:w-full" />
      </div>
      <div
        class="rounded-bl-xl bg-gradient-to-r from-blue-800 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-500 w-full uppercase px-4 py-2 group-hover:pl-6">
        <span class="w-full text-xs uppercase font-semibold text-white" v-text="valkyrie.name" />
      </div>
    </div>
  </router-link>
</template>
