<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
interface Props {
    info: string;
    note?: string;
}
defineProps<{ boss: Props; class: string }>();

</script>
<template>
    <div :class="class" class="flex flex-col">
        <span class="uppercase text-sm font-semibold">boss</span>
        <Popover>
            <PopoverButton class="uppercase text-sm flex focus:outline-none py-3" :class="boss.note === '' ? 'cursor-arrow': 'cursor-auto'" aria-label="More info">
                <p class="text-left font-semibold items-center">{{ boss.info }}. <span v-show="boss.note" class="underline">More info</span></p>
            </PopoverButton>
        
            <Transition name="slide-fade">
                <PopoverPanel class="left-0 md:left-6 absolute z-30 bg-dark-pink rounded px-4 py-2 w-full max-w-sm text-white border border-white" v-show="boss.note">
                    {{ boss.note }}
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