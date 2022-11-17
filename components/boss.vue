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
        <span class="uppercase text-sm font-thin">boss</span>
        <Popover>
            <PopoverButton class="uppercase text-sm flex" :class="boss.note === '' ? 'cursor-arrow': 'cursor-auto'">
                <span class="inline-flex text-left font-bold">{{ boss.info }}</span> 
                <!-- InformationCircleIcon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-6 h-6 text-light-yellow ml-2 w-6 h-6 animate-pulse" v-show="boss.note">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </PopoverButton>
        
            <PopoverPanel class="left-0 md:left-6 absolute z-30 bg-dark-pink rounded px-4 py-2 w-full max-w-sm border-turquoise text-dark-blue" v-show="boss.note">
                {{ boss.note }}
            </PopoverPanel>
        </Popover>
    </div>
</template>