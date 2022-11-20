<script setup lang="ts">
import { slug } from "../utilities/helpers";
interface Props {
    name: string;
    keyword: string;
};
defineProps<{ valkyrie: Props }>();
</script>

<template>
    <NuxtLink :to="`/${slug(valkyrie.name)}`" class="group relative" :id="slug(valkyrie.name)">
        <div class="h-full w-full bg-sky-200 rounded-lg aspect-w-9 aspect-h-16 overflow-hidden border border-white">
            <nuxt-img :src="`/valkyries/${slug(valkyrie.name)}.jpg`" class="scale-105 group-hover:scale-100 group-hover:opacity-90"
             width="270" height="480" format="webp" :placeholder="[50, 100, 10]" />
        </div>
        <div class="absolute bottom-0 w-full py-2 px-4 rounded-b-lg text-sm md:text-base uppercase text-white bg-gradient-to-r from-dark-blue to-dark-violet border border-white">{{ valkyrie.name }}</div>
    </NuxtLink>
</template>