<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from "@headlessui/vue";
import { Signet } from "~~/utilities/types";

interface Props {
    note?: string;
    danger?: string;
    lists: Array<Signet>;
};

const props = defineProps<{ signet: Props }>();
const selectedSignet = ref(props.signet.lists[0]);
const select = (index: number) => selectedSignet.value = props.signet.lists[index];

const descriptionModal = ref("");
const isOpen = ref(false);
</script>
<template>
    <div>
        <div class="px-3 py-1 space-y-2 lg:px-6 lg:py-4 text-white font-semibold text-sm lg:text-base bg-dark-pink">
            <div>
                <span v-if="signet.note">{{ signet.note }}</span>
                <span v-else>No additional information</span>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row w-full">
            <div
                class="py-6 grid grid-cols-3 place-items-center w-full gap-3 bg-gradient-to-b from-dark-pink lg:to-dark-blue to-dark-violet">
                <button @click="select(index)" v-for="(item, index) in signet.lists" :key="index"
                    class="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 focus:animate-pulse">
                    <img class="w-full h-full" :src="`/signets/${item.name.toLowerCase().split(' - signet')[0]}.webp`"
                        :alt="item.name.split(' - Signet')[0]" />
                </button>
            </div>
            <div class="flex flex-col w-full text-white lg:h-fit lg:max-h-96">
                <div
                    class="flex w-full px-4 py-3 bg-gradient-to-b from-dark-violet to-dark-blue lg:from-dark-pink lg:to-dark-violet lg:border lg:border-white">
                    <div class="w-1/4 flex justify-center items-center">
                        <img class="w-20 h-20"
                            :src="`/signets/${selectedSignet.name.toLowerCase().split(' - signet')[0]}.webp`"
                            :alt="selectedSignet.name" />
                    </div>
                    <div class="w-3/4">
                        <span class="font-semibold underline" v-text="selectedSignet.name" /> <br />
                        <span v-if="!selectedSignet.note && !selectedSignet.danger" class="font-thin text-sm">
                            No additional information
                        </span>
                        <PopoverGroup v-else class="flex flex-col w-full relative">
                            <Popover>
                                <PopoverButton class="text-start" :disabled="selectedSignet.note!.length <= 100">
                                    {{ selectedSignet.note!.length > 100 ? selectedSignet.note?.substring(0, 100) +
                                            '...' :
                                            selectedSignet.note
                                    }}
                                </PopoverButton>
                                <Transition name="slide-fade">
                                    <PopoverPanel
                                        class="absolute top-0 left-0 rounded z-10 h-fit max-h-64 overflow-y-auto bg-dark-pink border border-white px-2 py-1">
                                        {{ selectedSignet.note }}
                                        <div v-show="selectedSignet.danger">
                                            <span class="font-semibold underline">Warning!</span> <br /> {{
                                                    selectedSignet.danger
                                            }}
                                        </div>
                                    </PopoverPanel>
                                </Transition>
                            </Popover>
                        </PopoverGroup>
                    </div>
                </div>
                <div
                    class="bg-dark-blue lg:bg-gradient-to-b lg:from-dark-violet lg:to-dark-blue text-white lg:h-full overflow-y-auto mt-6 lg:mt-0">
                    <table class="w-full border border-collapse">
                        <tr v-for="(item, index) in selectedSignet.lists" :key="index">
                            <td class="border border-white py-3">
                                <button @click="descriptionModal = item.description; isOpen = true"
                                    class="flex items-center space-x-2">
                                    <span class="inline-flex text-left pl-3">{{ item.name }}</span>
                                    <!-- InformationCircleIcon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-8 h-8" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </button>
                            </td>
                            <td class="border border-white text-center">{{ item.priority }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <Modal :open="isOpen" @is-close="isOpen = false">
            <template #title>Description</template>
            <p class="font-thin text-white">
                {{ descriptionModal }}
            </p>
        </Modal>
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