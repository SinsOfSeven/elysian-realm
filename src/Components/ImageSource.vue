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
    class="mx-auto hover:cursor-pointer">
    <img :src="source" :alt="imageSrc" class="h-8 w-8 lg:h-12 lg:w-12">
  </a>
</template>