<script setup lang="ts">
defineProps<{ note: string | Array<string> }>();
</script>
<template>
    <p v-if="typeof note === 'string'" class="text-xs py-4">{{ note }}</p>
    <div v-else class="py-4 text-xs">
        <p v-for="i in note" :key="i">{{ i }}</p>
    </div>
</template>