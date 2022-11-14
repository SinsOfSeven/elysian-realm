<script setup lang="ts">
import { Support } from "~~/utilities/types";
import { slug } from "~~/utilities/helpers";
const props = defineProps<{ support: Support }>();

const first = ref(props.support.first.split(' / '));
const firstSection = ref(0);
const nextFirstSection = first.value.length > 1 ? ref(1) : ref(0);

const second = ref(props.support.second.split(' / '));
const secondSection = ref(0);
const nextSecondSection = second.value.length > 1 ? ref(1) : ref(0);

const swapSupport = (support: string) => {
    if (support === 'first') {
        firstSection.value = (firstSection.value + 1) % first.value.length;
        nextFirstSection.value = (firstSection.value + 1) % first.value.length;
    } else {
        secondSection.value = (secondSection.value + 1) % second.value.length;
        nextSecondSection.value = (nextSecondSection.value + 1) % second.value.length;
    }
}
</script>
<template>
    <div class="flex space-x-2 w-40">
        <button @click="first.length > 1 ? swapSupport('first') : ''" class="relative w-full">
            <img class="absolute border border-white w-16 h-16 z-20 left-0 top-0"
                :src="`/supports/${first[firstSection]}.webp`" :alt="first[firstSection]" :key="firstSection">
            <img class="absolute border border-white w-16 h-16 z-0 left-4 top-4" v-show="first.length > 1"
                :src="`/supports/${first[nextFirstSection]}.webp`" :alt="first[nextFirstSection]"
                :key="nextFirstSection">
        </button>
        <button @click="second.length > 1 ? swapSupport('second') : ''" class="relative w-full">
            <img class="absolute border border-white w-16 h-16 z-20 left-0 top-0"
                :src="`/supports/${second[secondSection]}.webp`" :alt="second[secondSection]" :key="secondSection">
            <img class="absolute border border-white w-16 h-16 z-0 left-4 top-4" v-show="second.length > 1"
                :src="`/supports/${second[nextSecondSection]}.webp`" :alt="second[nextSecondSection]"
                :key="nextSecondSection">
        </button>
    </div>
</template>