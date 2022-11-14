<script setup lang="ts">
import { Popover, PopoverGroup, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
import { Buff } from "~~/utilities/types";
interface Props {
    note?: string;
    lists: Array<Buff>;
};
defineProps<{ buff: Props }>();
</script>
<template>
    <div class="flex items-center">
        <p class="uppercase text-sm font-thin">Buff</p>
        <Popover v-if="buff.note">
            <PopoverButton class="flex items-center">
                <InformationCircleIcon class="ml-2 w-6 h-6 animate-pulse" />
            </PopoverButton>
        
            <PopoverPanel class="absolute z-10 left-0 bg-gray-900 rounded px-4 py-2 w-full">
                {{ buff.note }}
            </PopoverPanel>
        </Popover>
    </div>

    <PopoverGroup class="w-sm flex pt-4 pb-2 relative">
        <Popover v-for="(item, index) in buff.lists" :key="index" v-slot="{ open }">
            <PopoverButton class="w-8 h-8 rounded rotate-45 border border-white mr-4" :class="{ 'bg-white text-gray-700': open }">
                <p class="-rotate-45">{{ item.load }}</p>
            </PopoverButton>
        
            <PopoverPanel class="absolute z-30 left-0 mt-2 bg-gray-900 rounded px-4 py-2 w-full">
                {{ item.description }}
            </PopoverPanel>
        </Popover>
    </PopoverGroup>
</template>