<script setup lang="ts">
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid';

defineProps<{ danger: string | Array<string> }>();
</script>
<template>
    <div class="flex w-full items-center space-x-2 text-xs">
        <div>
            <ExclamationTriangleIcon class="w-6 h-6 text-red-500" />
        </div>
        <div v-if="typeof danger === 'string'">
            <p>{{ danger }}</p>
        </div>
        <p v-else v-for="i in danger" :key="i">{{ i }}</p>
    </div>
</template>