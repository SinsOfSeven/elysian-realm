<script setup lang="ts">
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
interface Props {
    note?: string;
    lists: Array<{
        description: string;
        load: number;
    }>;
}
defineProps<{ buff: Props }>();

const open = ref(false);
</script>
<template>
    <div class="flex space-x-3">
        <p class="uppercase text-lg">Buff</p>
        <button @click="open = true"><InformationCircleIcon class="w-6 h-6 text-white animate-pulse" /></button>
    </div>
    <Modal :open="open" @is-open="open = false">
        <div v-if="buff.note" class="pb-2">
            <p v-if="typeof buff.note === 'string'">{{ buff.note }}</p>
            <p v-else v-for="i in buff.note" key="i">{{ i }}</p>
        </div>
        <table class="border border-collapse border-blue-600">
            <tr>
                <td class="border border-blue-600 px-4">
                    Load
                </td>
                <td class="border border-blue-600">
                    Description
                </td>
            </tr>
            <tr v-for="i in buff.lists">
                <td class="border border-blue-600">{{ i.load }}</td>
                <td class="border border-blue-600 px-2 py-1 text-start">{{ i.description }}</td>
            </tr>
        </table>
    </Modal>
</template>