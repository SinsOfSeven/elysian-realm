<script setup lang="ts">
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
interface Props {
    info: string;
    note?: string | Array<string>;
}
defineProps<{ boss: Props; class: string }>();

</script>
<template>
    <div :class="class" class="flex flex-col">
        <span class="uppercase text-sm font-thin">boss</span>
        <Popover>
            <PopoverButton class="uppercase text-sm flex" :class="boss.note === '' ? 'cursor-arrow': 'cursor-auto'">
                <span class="inline-flex text-left font-bold">{{ boss.info }}</span> <InformationCircleIcon v-show="boss.note" class="ml-2 w-6 h-6 animate-pulse" />
            </PopoverButton>
        
            <PopoverPanel class="absolute z-30 bg-gray-900 rounded px-4 py-2 w-sm" v-show="boss.note">
                {{ boss.note }}
            </PopoverPanel>
        </Popover>
    </div>
</template>