<script setup lang="ts">
const search = ref("");
</script>
<template>
    <div class="py-5 flex w-full justify-center px-8">
        <input type="text" v-model="search" placeholder="Search for valkyrie" class="placeholder:text-gray-400 text-dark-blue w-full max-w-md rounded-full border-transparent focus:outline-none focus:ring-0 focus:border focus:border-dark-blue" @input="$emit('filter', search)" />
    </div>
</template>