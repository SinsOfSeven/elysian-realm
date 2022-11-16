<script setup lang="ts">
defineProps<{ danger: string }>();
const isTruncate = ref(true);

const toggleTruncate = () => {
    isTruncate.value = !isTruncate.value;
    if (isTruncate.value) truncateButton.value = "Read more";
    else truncateButton.value = "Show less";
};

const truncateButton = ref("Read more");
</script>
<template>
    <div class="flex flex-col w-full lg:w-1/2 items-center space-x-2 text-base">
        <p class="flex text-red-500 text-left w-full font-bold">Warning!</p>
        <div class="flex flex-col w-full">
            <p>{{ isTruncate && danger.length > 100 ? `${danger.substring(0,100)}...` : danger }}</p>
            <p @click="toggleTruncate" v-if="danger && danger.length > 100" class="cursor-pointer text-light-yellow animate-pulse underline">{{ truncateButton }}</p>
        </div>
    </div>
</template>