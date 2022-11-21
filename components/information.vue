<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
defineProps<{ note: string, danger?: string }>();

</script>
<template>
    <div class="py-2 text-base lg:w-1/2" v-if="note">
        <Popover>
            <PopoverButton class="text-left focus:outline-none" :disabled="note.length <= 100">
                {{ note.length > 100 ? note.substring(0, 100) + '...' : note }}
            </PopoverButton>
            <Transition name="slide-fade">
                <PopoverPanel
                    class="z-40 h-fit max-h-72 px-2 py-1 rounded overflow-y-auto absolute top-3 bg-dark-pink text-white w-full lg:max-w-md border border-white">
                    <p>{{ note }}</p>
                    <div class="flex flex-col w-full" v-show="danger">
                        <p class="font-bold">Warning!</p>
                        <div class="flex flex-col w-full">
                            <p>{{ danger }}</p>
                        </div>
                    </div>
                </PopoverPanel>
            </Transition>
        </Popover>
    </div>
    <div class="py-2 text-base" v-else>
        <p>No additional information</p>
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