<script setup lang="ts">
import { Setup } from "~~/utilities/types";
import { ArrowUpRightIcon } from "@heroicons/vue/24/outline/index.js";
import { teamBuild, ensure, slug } from "~~/utilities/helpers";
import { valkyries } from "~~/utilities/database";

interface Props {
    lists: Array<Setup>,
    danger?: string;
    note?: string;
}

const props = defineProps<{ setup: Props }>();

const selectedIndex = ref(0);
const selectedSetup = ref(props.setup.lists[0]);
const selected = (index: number) => {
    selectedIndex.value = index;
    selectedSetup.value = props.setup.lists[selectedIndex.value];
};

const reference = computed(() => selectedSetup.value.ref.split('/youtu.be/')[1]);
const size = ref(window.innerWidth);

const gear = computed(() => {
    const valk = ensure(valkyries.find(el => slug(el.name) === useRoute().params.name));
    return teamBuild(valk.name, selectedSetup.value.rank, selectedSetup.value.weap, selectedSetup.value.stigmata);
});
</script>
<template>
    <div class="bg-dark-pink text-dark-blue w-full flex flex-col md:flex-row px-6 py-4 space-y-4">
        <div class="flex flex-col w-full lg:w-3/12 lg:text-lg justify-center text-center">
            <p class="text-center font-semibold">{{ selectedSetup.rank }} - {{ selectedSetup.difficult }}</p>
            <p class="py-2">{{ selectedSetup.weap }}</p>
            <ul class="list-inside">
                <li v-for="(item, index) in selectedSetup.stigmata" :key="index">{{ item }}</li>
            </ul>
            <NuxtLink :to="gear" class="py-2 underline" target="_blank" rel="noopener noreferrer">Visual preview by Arustats</NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start lg:text-lg w-full lg:w-3/12 text-sm place-content-start">
            <button @click="selected(index)" v-for="(item, index) in setup.lists" :key="index" :class="['border border-dark-blue rounded border-2 px-2 py-0.5', index === selectedIndex ? 'bg-dark-blue text-light-yellow' : '']">
                {{ item.time }}
            </button>
        </div>
        <div class="flex items-center justify-center w-full lg:w-6/12">
            <NuxtLink class="block md:hidden underline" :to="selectedSetup.ref">
                <span class="flex items-center">
                    Reference
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-4 h-4 pt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </span>
            </NuxtLink>
            <iframe class="hidden md:block" :width="size < 1024 ? 325 : 650" :height="size < 1024 ? 174 : 378" :src="`https://www.youtube.com/embed/${reference}`" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>
</template>