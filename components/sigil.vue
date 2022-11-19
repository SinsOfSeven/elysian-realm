<script setup lang="ts">
import { Sigil } from "~~/utilities/types";
import { slug, ensure } from "~~/utilities/helpers";
import { sigils } from "~~/utilities/database";

const props = defineProps<{ sigil: Sigil }>();

const first = ref(props.sigil.first.split(' / '));
const firstSection = ref(0);
const nextFirstSection = first.value.length > 1 ? ref(1) : ref(0);

const second = ref(props.sigil.second.split(' / '));
const secondSection = ref(0);
const nextSecondSection = second.value.length > 1 ? ref(1) : ref(0);

function swapSigil(sigil: string) {
    if (sigil === 'first') {
        firstSection.value = (firstSection.value + 1) % first.value.length;
        nextFirstSection.value = (firstSection.value + 1) % first.value.length;
    } else {
        secondSection.value = (secondSection.value + 1) % second.value.length;
        nextSecondSection.value = (nextSecondSection.value + 1) % second.value.length;
    }
};

const fetchDescription = (name: string) => ensure(sigils.find(el => el.name.toLowerCase() === name.toLowerCase()));
</script>
<template>
    <div class="w-40 relative">
        <div class="flex space-x-2">
            <button @click="first.length > 1 ? swapSigil('first') : ''" class="relative w-full" @mouseenter="$emit('isHover', true, fetchDescription(first[firstSection]))" @mouseleave="$emit('isHover', false)">
                <img class="absolute border border-dark-blue bg-light-yellow w-16 h-16 z-20 left-0 top-0" :src="`/sigils/${slug(first[firstSection])}.webp`" :alt="first[firstSection]" :key="firstSection">
                <img class="absolute border border-dark-blue bg-light-yellow w-16 h-16 z-0 left-2 top-2" v-show="first.length > 1" :src="`/sigils/${slug(first[nextFirstSection])}.webp`" :alt="first[nextFirstSection]" :key="nextFirstSection">
            </button>
            <button @click="second.length > 1 ? swapSigil('second') : ''" class="relative w-full" @mouseenter="$emit('isHover', true, fetchDescription(second[secondSection]))" @mouseleave="$emit('isHover', false)">
                <img class="absolute border border-dark-blue bg-light-yellow w-16 h-16 z-20 left-0 top-0" :src="`/sigils/${slug(second[secondSection])}.webp`" :alt="second[secondSection]" :key="secondSection">
                <img class="absolute border border-dark-blue bg-light-yellow w-16 h-16 z-0 left-2 top-2" v-show="second.length > 1" :src="`/sigils/${slug(second[nextSecondSection])}.webp`" :alt="second[nextSecondSection]" :key="nextSecondSection">
            </button>
        </div>
    </div>
</template>