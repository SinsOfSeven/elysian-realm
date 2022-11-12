<script setup lang="ts">
defineProps<{ note: string | Array<string> }>();
</script>
<template>
    <div class="py-2 text-base">
        <p v-if="typeof note === 'string'">{{ note }}</p>
        <p v-else v-for="i in note" :key="i">{{ i }}</p>
    </div>
</template>