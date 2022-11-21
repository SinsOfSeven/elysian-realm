<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Sigil } from "~~/utilities/types";
import { slug, ensure } from "~~/utilities/helpers";
import { sigils } from "~~/utilities/database";

const props = defineProps<{ sigil: Sigil, note?: string }>();

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
    <div class="flex w-full justify-center md:justify-start md:ml-6">
        <button @click="first.length > 1 ? swapSigil('first') : ''" class="w-24 flex relative z-0"
            @mouseenter="$emit('isHover', true, fetchDescription(first[firstSection]))"
            @mouseleave="$emit('isHover', false)">
            <nuxt-img class="absolute top-0 left-0 z-10 border border-black bg-yellow-100"
                :src="`/sigils/${slug(first[firstSection])}.webp`" :alt="first[firstSection]" :key="firstSection"
                placeholder sizes="xs:64px md:80px" />
            <nuxt-img class="absolute top-2 left-2 z-0 border border-black bg-yellow-100" v-show="first.length > 1"
                :src="`/sigils/${slug(first[nextFirstSection])}.webp`" :alt="first[nextFirstSection]"
                :key="nextFirstSection" placeholder sizes="xs:64px md:80px" />
        </button>
        <button @click="second.length > 1 ? swapSigil('second') : ''" class="w-24 flex relative z-0"
            @mouseenter="$emit('isHover', true, fetchDescription(second[secondSection]))"
            @mouseleave="$emit('isHover', false)">
            <nuxt-img class="absolute top-0 left-0 z-10 border border-black bg-yellow-100"
                :src="`/sigils/${slug(second[secondSection])}.webp`" :alt="second[secondSection]" :key="secondSection"
                placeholder sizes="xs:64px md:80px" />
            <nuxt-img class="absolute top-2 left-2 z-0 border border-black bg-yellow-100" v-show="second.length > 1"
                :src="`/sigils/${slug(second[nextSecondSection])}.webp`" :alt="second[nextSecondSection]"
                :key="nextSecondSection" placeholder sizes="xs:64px md:80px" />
        </button>
        <Popover>
            <PopoverButton class="text-left focus:outline-none md:hidden" aria-label="More info">
                <!-- InformationCircleIcon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-12 h-12" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </PopoverButton>
            <Transition name="slide-fade">
                <PopoverPanel class="z-20 rounded overflow-y-auto bg-dark-pink text-white w-full absolute left-0 mt-6 px-3 py-2 border border-white">
                    <p v-if="note">{{ note }}</p>
                    <p v-else>No additional information</p>
                </PopoverPanel>
            </Transition>
        </Popover>
    </div>
</template>
<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>