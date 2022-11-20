<script setup lang="ts">
import { Setup } from "~~/utilities/types";
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

const gear = computed(() => {
    const valk = ensure(valkyries.find(el => slug(el.name) === useRoute().params.name));
    return teamBuild(valk.name, selectedSetup.value.rank, selectedSetup.value.weap, selectedSetup.value.stigmata);
});

</script>
<template>
    <div class="bg-gradient-to-b from-dark-blue via-dark-violet to-dark-pink text-white w-full flex flex-col md:flex-row px-6 py-4 space-y-4">
        <div class="flex flex-col w-full lg:w-3/12 lg:text-lg justify-center text-center">
            <p class="text-center font-semibold">{{ selectedSetup.rank }} - {{ selectedSetup.difficult }}</p>
            <p class="py-2">{{ selectedSetup.weap }}</p>
            <ul class="list-inside">
                <li v-for="(item, index) in selectedSetup.stigmata" :key="index">{{ item }}</li>
            </ul>
            <NuxtLink :to="gear" class="py-2 underline font-semibold text-lg" target="_blank" rel="noopener noreferrer">Visual preview by Arustats</NuxtLink>
            <NuxtLink class="underline text-lg font-semibold animate-pulse" :to="selectedSetup.ref">
                Reference
            </NuxtLink>
        </div>
        <div class="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start lg:text-lg w-full lg:w-3/12 text-sm place-content-start">
            <button @click="selected(index)" v-for="(item, index) in setup.lists" :key="index" :class="['w-full border border-dark-blue rounded max-w-sm px-4 font-semibold h-12', index === selectedIndex ? 'bg-dark-blue text-white' : '']">
                {{ item.time }}
            </button>
        </div>
    </div>
</template>