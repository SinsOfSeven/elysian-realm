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

useHead({
    title: "Elysian Realm Guide 6.1",
    bodyAttrs: {
        class: 'bg-gradient-to-br from-turquoise to-dark-blue'
    }
});

const isSticky = ref(false);
function scroll() {
    let y = window.scrollY;
    if (y >= 150) isSticky.value = true;
    else isSticky.value = false;
}

onMounted(() => window.addEventListener('scroll', scroll));
onUnmounted(() => window.removeEventListener('scroll', scroll));
</script>
<template>
    <div class="flex flex-col min-h-screen">
        <div :class="isSticky ? 'sticky top-0 bg-gradient-to-b from-sky-blue to-dark-blue z-20' : 'bg-transparent'">
            <h1 class="text-dark-pink uppercase text-center text-4xl font-bold tracking-wider pt-8 pb-4">elysian realm</h1>
            <SearchBar @filter="filter" />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-6 md:px-12 md:gap-6 gap-4 py-8" v-if="valks.length > 0">
            <Card v-for="valkyrie in valks" :key="valkyrie.name" :valkyrie="valkyrie" />
        </div>
        <div v-else class="grow bg-red-500">
            No Result
        </div>
    </div>
</template>