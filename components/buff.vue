<script setup lang="ts">
import { Popover, PopoverGroup, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";
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
                    <InformationCircleIcon class="ml-2 w-6 h-6 animate-pulse text-light-yellow" />
                </PopoverButton>
            
                <PopoverPanel class="absolute z-10 left-0 md:left-6 text-dark-blue bg-dark-pink rounded px-4 py-2 w-full max-w-sm border border-dark-blue max-w-sm">
                    {{ buff.note }}
                </PopoverPanel>
            </Popover>
        </div>
    
        <PopoverGroup class="w-full max-w-sm flex relative pt-2" :class="class">
            <Popover v-for="(item, index) in buff.lists" :key="index" v-slot="{ open }">
                <PopoverButton class="w-8 h-8 rounded rotate-45 border mr-4 border-light-yellow text-light-yellow" :class="{ 'border-dark-pink bg-dark-pink text-dark-blue': open }">
                    <p class="-rotate-45">{{ item.load }}</p>
                </PopoverButton>
            
                <PopoverPanel class="absolute z-30 left-0 mt-2 bg-dark-pink text-dark-blue rounded px-4 py-2 w-full max-w-sm border border-dark-blue">
                    {{ item.description }}
                </PopoverPanel>
            </Popover>
        </PopoverGroup>
    </div>
</template>