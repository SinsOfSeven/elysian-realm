<script setup lang="ts">
const name = useRoute().params.name;
</script>

<template>
    {{ name }}
</template>