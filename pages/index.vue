<script setup lang="ts">
import { valkyries } from '~~/utilities/database';
</script>
<template>
    <h1 class="text-blue-500">elysian realm</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-6 gap-4">
        <Card v-for="valkyrie in valkyries" :key="valkyrie.name" :valkyrie="valkyrie" />
    </div>
</template>