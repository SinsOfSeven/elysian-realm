<script setup lang="ts">
import { Signet } from "~~/utilities/types";

interface Props {
    note?: string;
    danger?: string;
    lists: Array<Signet>;
};

const props = defineProps<{ signet: Props }>();
const selectedSignet = ref(props.signet.lists[0]);
const select = (index: number) => selectedSignet.value = props.signet.lists[index];

const infoIsTruncate = ref(true);
const dangerIsTruncate = ref(true);
const infoTruncateButton = ref("Read more");
const dangerTruncateButton = ref("Read more");

const toggleTruncate = (type: string) => {
    if (type === 'info') {
        infoIsTruncate.value = !infoIsTruncate.value;
        if (infoIsTruncate.value) infoTruncateButton.value = "Read more";
        else infoTruncateButton.value = "Show less";
    } else {
        dangerIsTruncate.value = !dangerIsTruncate.value;
        if (dangerIsTruncate.value) dangerTruncateButton.value = "Read more";
        else dangerTruncateButton.value = "Show less";
    }
};

const descriptionModal = ref("");
const isOpen = ref(false);
const dangerDescription = ref(false);
const dangerDescriptionText = ref("Read more");

const truncateSignetDanger = () => {
    dangerDescription.value = !dangerDescription.value;
    if (dangerDescription.value) dangerDescriptionText.value = "Show less";
    else dangerDescriptionText.value = "Read more";
}
</script>
<template>
    <div class="px-3 py-1 space-y-2 lg:px-6 lg:py-4 text-light-yellow font-semibold text-sm lg:text-base">
        <div>
            <span v-if="signet.note">{{ signet.note }}</span>
            <span v-else>No additional information</span>
        </div>
        <div v-if="signet.danger" class="flex flex-col">
            <div class="flex">
                <span class="text-red-500">Warning!</span> 
                <button class="underline ml-2" @click="truncateSignetDanger">{{ dangerDescriptionText }}</button>
            </div>
            <div class="mt-2">
                <span v-show="dangerDescription" v-text="signet.danger" />
            </div>
        </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full border border-dark-blue">
        <div class="py-2 grid grid-cols-3 place-items-center w-full bg-sky-blue gap-3">
            <button @click="select(index)" v-for="(item, index) in signet.lists" :key="index" class="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 focus:animate-pulse">
                <img class="w-full h-full" :src="`/signets/${item.name.toLowerCase().split(' - signet')[0]}.webp`" :alt="item.name.split(' - Signet')[0]">
            </button>
        </div>
        <div class="flex flex-col w-full bg-dark-blue">
            <div class="flex w-full px-4 py-3">
                <div class="w-1/4">
                    <img class="mx-auto w-20 h-20" :src="`/signets/${selectedSignet.name.toLowerCase().split(' - signet')[0]}.webp`" alt="">
                </div>
                <div class="text-light-yellow w-3/4">
                    <span class="font-semibold underline">{{ selectedSignet.name }}</span> <br />
                    <span v-if="!selectedSignet.note && !selectedSignet.danger" class="font-thin text-sm">No additional information</span>
                    <div v-else class="flex flex-col">
                        <span class="font-thin text-sm">{{ infoIsTruncate && selectedSignet.note && selectedSignet.note.length > 100 ? `${selectedSignet.note.substring(0, 100)}...` : selectedSignet.note }}</span>
                        <button class="underline animate-pulse text-sm mr-auto" @click="toggleTruncate('info')" v-if="selectedSignet.note && selectedSignet.note.length > 100">{{ infoTruncateButton }}</button>
                        <div v-if="selectedSignet.danger" class="pt-3">
                            <p class="text-dark-pink font-semibold text-sm">Warning!</p>
                            <span class="font-thin text-sm">{{ dangerIsTruncate && selectedSignet.danger && selectedSignet.danger.length > 100 ? `${selectedSignet.danger.substring(0, 100)}...` : selectedSignet.danger }}</span>
                            <button class="underline animate-pulse text-sm mr-auto" @click="toggleTruncate('danger')" v-if="selectedSignet.danger && selectedSignet.danger.length > 100">{{ dangerTruncateButton }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-light-yellow text-dark-blue">
                <table class="w-full border border-collapse">
                    <tr v-for="(item, index) in selectedSignet.lists" :key="index">
                        <td class="border border-dark-blue py-3">
                            <button @click="descriptionModal = item.description; isOpen = true" class="flex">
                                <span class="inline-flex text-left pl-3">{{ item.name }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    class="ml-2 w-6 h-6 animate-pulse">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                            </button>
                        </td>
                        <td class="border border-dark-blue text-center">{{ item.priority }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <Modal :open="isOpen" @is-close="isOpen = false">
        <template #title>Description</template>
        <p class="font-thin">
            {{ descriptionModal }}
        </p>
    </Modal>
</template>