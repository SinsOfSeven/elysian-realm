<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/solid';
interface Props {
    info: string;
    note?: string | Array<string>;
}
defineProps<{ boss: Props }>();

const open = ref(false);
const toggleModal = (state: boolean) => {
    open.value = state;
}
</script>
<template>
    <span class="uppercase text-xs">boss</span>
    <span class="text-xs font-semibold">{{ boss.info }}
        <button @click="open = true">
            <InformationCircleIcon v-if="boss.note" class="w-6 h-6 inline-flex animate-pulse" />
        </button>
    </span>

    <Modal @is-open="toggleModal" :open="open">
        {{ boss.note }}
    </Modal>
</template>