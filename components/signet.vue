<script setup lang="ts">
import { Signet } from "~~/utilities/types";
import { QuestionMarkCircleIcon, ExclamationTriangleIcon } from "@heroicons/vue/24/solid";

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

</script>
<template>
    <div class="flex flex-col lg:flex-row w-full border border-dark-blue">
        <div class="py-2 grid grid-cols-3 place-items-center w-full bg-sky-blue gap-3">
            <button @click="select(index)" v-for="(item, index) in signet.lists" :key="index" class="flex items-center justify-center w-20 h-20 lg:w-36 lg:h-36 focus:animate-pulse">
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
                                <span class="inline-flex text-left font-bold pl-3">{{ item.name }}</span>
                                <QuestionMarkCircleIcon class="ml-2 w-6 h-6 animate-pulse" />
                            </button>
                        </td>
                        <td class="border border-dark-blue text-center font-bold">{{ item.priority }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <Modal :open="isOpen" @is-close="isOpen = false">
        <template #title>Description</template>
        {{ descriptionModal }}
    </Modal>
</template>