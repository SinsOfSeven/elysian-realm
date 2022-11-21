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
    <div class="md:mt-24 bg-gradient-to-b from-dark-blue via-dark-violet to-dark-pink text-white w-full flex flex-col md:flex-row px-6 py-4 space-y-4 md:space-y-0">
        <div class="flex flex-col md:flex-row w-full lg:text-lg justify-center text-center">
            <div class="flex flex-col w-full">
                <p class="text-center font-semibold">{{ selectedSetup.rank }} - {{ selectedSetup.difficult }}</p>
                <p class="py-2">{{ selectedSetup.weap }}</p>
                <ul class="list-inside">
                    <li v-for="(item, index) in selectedSetup.stigmata" :key="index">{{ item }}</li>
                </ul>
            </div>
            <div class="flex flex-col w-full lg:space-y-4">
                <NuxtLink :to="gear" class="py-2 underline font-semibold text-lg" target="_blank" rel="noopener noreferrer">Visual preview by Arustats</NuxtLink>
                <NuxtLink class="underline text-lg font-semibold" :to="selectedSetup.ref" target="_blank" rel="noopener noreferrer">
                    Reference
                </NuxtLink>
            </div>
        </div>
        <div class="pt-4 grid grid-cols-1 md:grid-cols-2 place-items-start lg:text-lg w-full max-w-sm text-sm place-content-start gap-2">
            <button @click="selected(index)" v-for="(item, index) in setup.lists" :key="index" :class="['w-full rounded px-4 font-semibold h-12', index === selectedIndex ? 'bg-dark-blue text-white border border-white animate-pulse' : 'bg-white text-dark-blue']">
                {{ item.time }}
            </button>
        </div>
    </div>
</template>