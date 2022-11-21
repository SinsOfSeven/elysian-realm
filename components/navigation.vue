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
    <div class="bg-gradient-to-b from-dark-blue via-dark-violet to-dark-pink text-white font-semibold py-4 lg:from-dark-blue lg:via-dark-blue lg:to-dark-blue">
        <div class="grid w-full grid-cols-3">
            <NuxtLink class="px-4 w-full h-full flex justify-center items-center" :to="`/${ slug(previousValk.name) }`">{{ previousValk.name }}</NuxtLink>
            <div class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-around px-1 py-0.5">
                <button @click="$emit('selected', index)" v-for="(build, index) in valkyrie.builds" :key="index" class="px-4 py-2 rounded" :class="selected === index ? 'border border-white border-2' : ''">{{ index + 1 }}</button>
            </div>
            <NuxtLink class="px-4 w-full h-full flex justify-center items-center" :to="`/${ slug(nextValk.name) }`">{{ nextValk.name }}</NuxtLink>
        </div>
    </div>
</template>