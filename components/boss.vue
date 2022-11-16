<script setup lang="ts">
import { InformationCircleIcon } from "@heroicons/vue/24/outline";
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
                <span class="inline-flex text-left font-bold">{{ boss.info }}</span> <InformationCircleIcon v-show="boss.note" class="text-light-yellow ml-2 w-6 h-6 animate-pulse" />
            </PopoverButton>
        
            <PopoverPanel class="left-0 md:left-6 absolute z-30 bg-dark-pink rounded px-4 py-2 w-full max-w-sm border-turquoise text-dark-blue" v-show="boss.note">
                {{ boss.note }}
            </PopoverPanel>
        </Popover>
    </div>
</template>