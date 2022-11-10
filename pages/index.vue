<script setup lang="ts">
import { valkyries } from '~~/utilities/database';
import { Valkyrie } from '~~/utilities/types';

const valks = ref<Array<Valkyrie>>(valkyries);
function filter(selected: string) {
    if (selected.length > 0) {
        valks.value = valkyries.filter(el => el.keyword.toLowerCase().includes(selected.toLowerCase()));
    } else {
        valks.value = valkyries;
    }
};
</script>
<template>
    <h1 class="text-blue-500 uppercase text-center">elysian realm</h1>
    <SearchBar @filter="filter" />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-6 gap-4">
        <Card v-for="valkyrie in valks" :key="valkyrie.name" :valkyrie="valkyrie" />
    </div>
</template>