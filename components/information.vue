<script setup lang="ts">
defineProps<{ note: string }>();

const isTruncate = ref(true);

const toggleTruncate = () => {
    isTruncate.value = !isTruncate.value;
    if (isTruncate.value) truncateButton.value = "Read more";
    else truncateButton.value = "Show less";
};

const truncateButton = ref("Read more");
</script>
<template>
    <div class="py-2 text-base">
        <p>{{ isTruncate && note.length > 100 ? `${note.substring(0, 100)}...` : note }}</p>
        <p @click="toggleTruncate" v-if="note.length > 100" class="cursor-pointer text-gray-400">{{ truncateButton }}</p>
    </div>
</template>