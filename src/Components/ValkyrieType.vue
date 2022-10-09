<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: String
});

const valkyrieType = computed(() => `/assets/types/${props.type!.toLowerCase()}.png`);
</script>
<template>
  <img :src="valkyrieType" :alt="type" class="h-8 w-8 lg:h-12 lg:w-12 mx-auto">
</template>