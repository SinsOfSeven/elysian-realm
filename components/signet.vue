<script setup lang="ts">
import { Signet } from "~~/utilities/types";
import { QuestionMarkCircleIcon, ExclamationTriangleIcon } from "@heroicons/vue/24/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

interface Props {
    note?: string;
    danger?: string;
    lists: Array<Signet>;
};

const props = defineProps<{ signet: Props }>();
const selectedSignet = ref(props.signet.lists[0]);
const select = (index: number) => selectedSignet.value = props.signet.lists[index];

const isTruncate = ref(true);

const toggleTruncate = () => {
    isTruncate.value = !isTruncate.value;
    if (isTruncate.value) truncateButton.value = "Read more";
    else truncateButton.value = "Show less";
};

const truncateButton = ref("Read more");
</script>
<template>
    <div class="flex flex-col w-full">
        <div class="grid grid-cols-3 place-content-center w-full bg-yellow-500 gap-3">
            <div v-for="(item, index) in signet.lists" :key="index" class="border border-white w-full">
                <button @click="select(index)" class="flex items-center mx-auto">
                    <img class="w-20 h-20" :src="`/signets/${item.name.toLowerCase().split(' - signet')[0]}.webp`" alt="">
                </button>
            </div>
        </div>
        <div class="flex flex-col w-full bg-purple-500">
            <div class="flex w-full px-4 py-3">
                <div class="w-1/4">
                    <img class="mx-auto w-20 h-20" :src="`/signets/${selectedSignet.name.toLowerCase().split(' - signet')[0]}.webp`" alt="">
                </div>
                <div class="text-white w-3/4">
                    <span class="font-semibold">{{ selectedSignet.name }}</span> <br />
                    <span v-if="!selectedSignet.note && !selectedSignet.danger" class="font-thin text-sm">No additional information</span>
                    <div v-else>
                        <span class="font-thin text-sm">{{ isTruncate && selectedSignet.note && selectedSignet.note.length > 100 ? `${selectedSignet.note?.substring(0, 100)}...` : selectedSignet.note }}</span>
                        <button class="underline animate-pulse ml-2 text-sm" @click="toggleTruncate">{{ truncateButton }}</button>
                        <div v-if="selectedSignet.danger" class="flex">
                            <ExclamationTriangleIcon class="w-6 h-6 text-red-500" />
                            <span class="font-thin text-sm">{{ selectedSignet.note }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-orange-500 text-white">
                <table class="w-full border border-collapse">
                    <tr v-for="(item, index) in selectedSignet.lists" :key="index">
                        <td class="border border-white py-3">
                            <Popover>
                                <PopoverButton class="flex w-full">
                                    <span class="inline-flex text-left font-bold pl-3">{{ item.name }}</span>
                                    <QuestionMarkCircleIcon class="ml-2 w-6 h-6 animate-pulse" />
                                </PopoverButton>
                            
                                <PopoverPanel class="absolute z-30 bg-gray-900 rounded px-4 py-2 w-sm">
                                    {{ item.description }}
                                </PopoverPanel>
                            </Popover>
                        </td>
                        <td class="border border-white text-center">{{ item.priority }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>