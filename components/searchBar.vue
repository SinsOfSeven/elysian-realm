<script setup lang="ts">
const search = ref("");
</script>
<template>
    <div class="py-5 flex w-full justify-center max-w-md mx-auto px-8 relative">
        <input type="text" v-model="search" class="text-dark-blue w-full rounded-full border-transparent focus:outline-none focus:ring-0 focus:border-dark-blue" @input="$emit('filter', search)" />
        <!-- MagnifyingGlassIcon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 absolute right-12 mt-2">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </div>
</template>