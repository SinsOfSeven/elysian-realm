<script setup lang="ts">
import { valkyries } from "~~/utilities/database";
import { slug } from "~~/utilities/helpers";

defineProps<{ selected: number }>();

const name = useRoute().params.name;
const valkyrieIndex = valkyries.findIndex(el => slug(el.name) === name);
const valkyrie = valkyries[valkyrieIndex];
const previousValk = valkyrieIndex > 0 ? valkyries[valkyrieIndex - 1] : valkyries[valkyries.length - 1];
const nextValk = valkyrieIndex < valkyries.length - 1 ? valkyries[valkyrieIndex + 1] : valkyries[0];
</script>
<template>
    <div class="bg-dark-pink text-dark-blue font-semibold py-4 border border-4 border-t-dark-blue">
        <div class="grid w-full grid-cols-3">
            <NuxtLink class="px-4 w-full h-full flex justify-center items-center" :to="`/valkyrie/${ slug(previousValk.name) }`">{{ previousValk.name }}</NuxtLink>
            <div class="grid w-full grid-cols-2 place-content-around px-1 py-0.5">
                <button @click="$emit('selected', index)" v-for="(build, index) in valkyrie.builds" :key="index" class="px-4 py-2 rounded" :class="selected === index ? 'border border-dark-blue border-2' : ''">{{ index + 1 }}</button>
            </div>
            <NuxtLink class="px-4 w-full h-full flex justify-center items-center" :to="`/valkyrie/${ slug(nextValk.name) }`">{{ nextValk.name }}</NuxtLink>
        </div>
    </div>
</template>