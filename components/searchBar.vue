<script setup lang="ts">
const search = ref("");
</script>
<template>
    <div class="py-5 flex w-full justify-center px-8">
        <input type="text" v-model="search" class="w-full border border-green-500 rounded-full focus:outline-none focus:ring-0 focus:border-2 focus:border-green-400 text-green-700" @input="$emit('filter', search)" />
    </div>
</template>