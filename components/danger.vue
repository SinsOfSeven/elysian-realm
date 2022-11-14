<script setup lang="ts">
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid';
defineProps<{ danger: string }>();
const isTruncate = ref(true);

const toggleTruncate = () => {
    isTruncate.value = !isTruncate.value;
    if (isTruncate.value) truncateButton.value = "Show warning";
    else truncateButton.value = "Hide warning";
};

const truncateButton = ref("Read more");
</script>
<template>
    <div class="flex w-full items-center space-x-2 text-base">
        <ExclamationTriangleIcon class="w-8 h-8 text-red-500" />
        <div class="flex flex-col w-full">
            <p>{{ !isTruncate ? danger : '' }}</p>
            <p @click="toggleTruncate" v-if="danger" class="cursor-pointer text-gray-400">{{ truncateButton }}</p>
        </div>
    </div>
</template>