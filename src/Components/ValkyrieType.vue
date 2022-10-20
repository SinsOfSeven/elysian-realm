<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: String
});

const valkyrieType = computed(() => `/assets/types/${props.type!.toLowerCase()}.png`);
</script>
<template>
  <div class="rounded-full h-10 w-10 md:h-16 md:w-16 lg:h-12 lg:w-12 mx-auto">
    <img :src="valkyrieType" :alt="type" class="mx-auto w-full h-full overflow-hidden">
  </div>
</template>