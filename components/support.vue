<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Support } from "~~/utilities/types";
import { ensure } from "~~/utilities/helpers";
import { supports } from "~~/utilities/database";

const props = defineProps<{ support: Support, note?: string, danger?: string }>();

const first = ref(props.support.first.split(' / '));
const firstSection = ref(0);
const nextFirstSection = first.value.length > 1 ? ref(1) : ref(0);

const second = ref(props.support.second.split(' / '));
const secondSection = ref(0);
const nextSecondSection = second.value.length > 1 ? ref(1) : ref(0);

function swapSupport(support: string) {
    if (support === 'first') {
        firstSection.value = (firstSection.value + 1) % first.value.length;
        nextFirstSection.value = (firstSection.value + 1) % first.value.length;
    } else {
        secondSection.value = (secondSection.value + 1) % second.value.length;
        nextSecondSection.value = (nextSecondSection.value + 1) % second.value.length;
    }
};

const fetchDescription = (name: string) => ensure(supports.find(el => el.abbr.toLowerCase() === name.toLowerCase()));
</script>
<template>
<div class="flex w-full justify-center py-8">
    <button @click="first.length > 1 ? swapSupport('first') : ''" class="w-24 flex relative z-0"
        @mouseenter="$emit('isHover', true, fetchDescription(first[firstSection]))"
        @mouseleave="$emit('isHover', false)">
        <nuxt-img class="absolute top-0 left-0 z-10 border border-black bg-yellow-100"
            :src="`/supports/${first[firstSection]}.webp`" :alt="first[firstSection]" :key="firstSection"
            placeholder height="64" width="64" />
        <nuxt-img class="absolute top-2 left-2 z-0 border border-black bg-yellow-100" v-show="first.length > 1"
            :src="`/supports/${first[nextFirstSection]}.webp`" :alt="first[nextFirstSection]"
            :key="nextFirstSection" placeholder height="64" width="64" />
    </button>
    <button @click="second.length > 1 ? swapSupport('second') : ''" class="w-24 flex relative z-0"
        @mouseenter="$emit('isHover', true, fetchDescription(second[secondSection]))"
        @mouseleave="$emit('isHover', false)">
        <nuxt-img class="absolute top-0 left-0 z-10 border border-black bg-yellow-100"
            :src="`/supports/${second[secondSection]}.webp`" :alt="second[secondSection]" :key="secondSection"
            placeholder height="64" width="64" />
        <nuxt-img class="absolute top-2 left-2 z-0 border border-black bg-yellow-100" v-show="second.length > 1"
            :src="`/supports/${second[nextSecondSection]}.webp`" :alt="second[nextSecondSection]"
            :key="nextSecondSection" placeholder height="64" width="64" />
    </button>
    <Popover>
        <PopoverButton class="text-left focus:outline-none">
            <!-- InformationCircleIcon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-12 h-12" v-show="note" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
        </PopoverButton>
        <Transition name="slide-fade">
            <PopoverPanel class="z-20 rounded overflow-y-auto bg-dark-pink text-white w-full absolute left-0 mt-6 px-3 py-2 border border-white">
                <p v-if="note">{{ note }}</p>
                <p v-else>
                    <p v-if="danger"><span class="font-semibold uppercase">Warning!</span><br /> {{ danger }}</p>
                    <p v-else>No additional information</p>
                </p>
            </PopoverPanel>
        </Transition>
    </Popover>
</div></template>