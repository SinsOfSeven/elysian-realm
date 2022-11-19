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
    <div>
        <div class="flex items-center">
            <p class="uppercase text-sm font-thin">Buff</p>
            <Popover v-if="buff.note">
                <PopoverButton class="flex items-center">
                    <!-- InformationCircleIcon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-6 h-6 text-light-yellow ml-2 w-6 h-6 animate-pulse" v-show="buff.note">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </PopoverButton>
                <Transition name="slide-fade">
                    <PopoverPanel class="absolute z-10 left-0 md:left-6 text-dark-blue bg-dark-pink rounded px-4 py-2 w-full max-w-sm border border-dark-blue max-w-sm">
                        {{ buff.note }}
                    </PopoverPanel>
                </Transition>
            </Popover>
        </div>
    
        <PopoverGroup class="w-full max-w-sm flex relative pt-2" :class="class">
            <Popover v-for="(item, index) in buff.lists" :key="index" v-slot="{ open }">
                <PopoverButton class="w-8 h-8 rounded rotate-45 border mr-4 border-light-yellow text-light-yellow" :class="{ 'border-dark-pink bg-dark-pink text-dark-blue': open }">
                    <p class="-rotate-45">{{ item.load }}</p>
                </PopoverButton>
            
                <Transition name="slide-fade">
                    <PopoverPanel class="absolute z-30 left-0 mt-2 bg-dark-pink text-dark-blue rounded px-4 py-2 w-full max-w-sm border border-dark-blue">
                        {{ item.description }}
                    </PopoverPanel>
                </Transition>
            </Popover>
        </PopoverGroup>
    </div>
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