<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  imageSrc: String
});

const source = computed(() => {
  const image = props.imageSrc!.split("/")[2].split(".")[1];

  return `/assets/sources/${image}.png`;
});
</script>
<template>
  <a :href="imageSrc" target="_blank"
    class="mx-auto hover:cursor-pointer rounded-full h-10 w-10 md:w-16 md:h-16 lg:h-12 lg:w-12 overflow-hidden">
    <img :src="source" :alt="imageSrc" class="h-full w-full mx-auto">
  </a>
</template>