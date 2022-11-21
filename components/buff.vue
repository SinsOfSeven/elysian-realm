<script setup lang="ts">
import { Popover, PopoverGroup, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Buff } from "~~/utilities/types";
interface Props {
    note?: string;
    lists: Array<Buff>;
};
defineProps<{ buff: Props; class: string }>();
</script>
<template>
    <p class="uppercase text-sm font-semibold -mb-4 mt-3">Buff</p>
    <PopoverGroup class="w-full max-w-sm flex relative items-center" :class="class">
        <Popover v-for="(item, index) in buff.lists" :key="index" v-slot="{ open }">
            <PopoverButton class="w-12 h-12 mt-2 rounded border mr-4 border-white text-white focus:outline-none"
                :class="{ 'border-dark-pink bg-dark-pink text-white': open }">
                {{ item.load }}
            </PopoverButton>

            <Transition name="slide-fade">
                <PopoverPanel class="absolute z-30 left-0 bg-dark-pink text-white rounded px-4 py-2 w-full max-w-sm border border-white mt-4">
                    {{ item.description }}
                </PopoverPanel>
            </Transition>
        </Popover>

        <Popover v-show="buff.note">
            <PopoverButton class="flex items-center focus:outline-none" aria-label="More info">
                <!-- InformationCircleIcon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-12 h-12" v-show="buff.note" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </PopoverButton>
            <Transition name="slide-fade">
                <PopoverPanel
                    class="absolute z-30 left-0 mt-2 text-white bg-dark-pink rounded px-4 py-2 w-full max-w-sm border border-white">
                    {{ buff.note }}
                </PopoverPanel>
            </Transition>
        </Popover>
    </PopoverGroup>
</template>
<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>