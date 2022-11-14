<script setup lang="ts">
import { Setup } from "~~/utilities/types";
import { ShieldCheckIcon, ChartBarIcon, ArrowUpRightIcon } from "@heroicons/vue/24/outline";

interface Props {
    lists: Array<Setup>,
    danger?: string | Array<string>;
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
    const x = selectedSetup.value.gear.split(' & ');
    return `${x[0]} <br /> ${x[1]}`;
});

</script>
<template>
    <div class="bg-violet-700 text-white w-full grid grid-cols-3 gap-x-2 px-6 py-4">
        <div class="grid grid-cols-1 w-full">
            <div class="flex items-center">
                <ChartBarIcon class="w-4 h-4 mr-2" /> {{ selectedSetup.rank }} - {{ selectedSetup.difficult }}
            </div>
            <div class="flex items-center">
                <ShieldCheckIcon class="w-4 h-4 mr-2" />
                <div v-html="gear" />
            </div>
        </div>
        <div class="grid grid-cols-1 place-items-center w-full grap-y-1 text-sm">
            <button @click="selected(index)" v-for="(item, index) in setup.lists" :key="index" :class="['border border-white rounded border-2 px-2 py-0.5 w-full', index === selectedIndex ? 'bg-white text-gray-700' : '']">
                {{ item.time }}
            </button>
        </div>
        <div class="flex items-center justify-center">
            <NuxtLink class="block md:hidden underline" :to="selectedSetup.ref">
                <span class="flex items-center">
                    Reference
                    <ArrowUpRightIcon class="w-4 h-4 pt-1" />
                </span>
            </NuxtLink>
        </div>
    </div>
</template>