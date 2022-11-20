<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
defineProps<{ open: boolean }>();
</script>
<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-20" @close="$emit('isClose')">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-dark-blue bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="text-white font-semibold relative transform overflow-hidden rounded-lg bg-dark-pink text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-dark-pink px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 lg:text-left">
                                    <DialogTitle as="h3" class="uppercase underline leading-6 text-center">
                                        <slot name="title" />
                                    </DialogTitle>
                                    <div class="mt-2">
                                        <slot />
                                    </div>
                                </div>
                            </div>
                            <div class="bg-dark-pink px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button"
                                    class="font-semibold inline-flex w-full justify-center rounded-md border border-white bg-dark-pink px-4 py-2 text-base font-medium text-white hover:bg-dark-blue hover:bg-dark-pink focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    @click="$emit('isClose')" ref="cancelButtonRef">Close</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
