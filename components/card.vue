<script setup lang="ts">
import { Valkyrie } from "../utilities/types";
import { slug } from "../utilities/helpers";

defineProps<{valkyrie: Valkyrie}>();
</script>

<template>
    <NuxtLink :to="slug(valkyrie.name)" class="group relative">
        <div class="h-full w-full bg-green-200 rounded-lg aspect-w-2 aspect-h-3 overflow-hidden">
            <img :src="`/valkyries/${ slug(valkyrie.name) }.jpg`" :alt="valkyrie.name" class="scale-105 group-hover:scale-100 group-hover:opacity-90 object-cover w-full h-full">
        </div>
        <div :class="
            valkyrie.type === 'BIO' ? 'bg-orange-600 group-hover:bg-orange-500'
            : valkyrie.type === 'MECH' ? 'bg-blue-600 group-hover:bg-blue-500'
            : valkyrie.type === 'PHY' ? 'bg-pink-600 group-hover:bg-pink-500'
            : valkyrie.type === 'QUA' ? 'bg-violet-600 group-hover:bg-violet-500'
            : 'bg-[#8d6057] group-hover:bg-[#b37c72]'
        " class="absolute bottom-0 w-full py-2 px-4 rounded-b-lg text-sm md:text-base uppercase text-white">{{ valkyrie.name }}</div>
    </NuxtLink>
</template>