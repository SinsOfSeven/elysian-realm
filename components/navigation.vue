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
    <div class="sticky bottom-0 bg-gradient-to-r text-white"
    :class="[
        previousValk.type === 'BIO' ? 'from-orange-600'
        : previousValk.type === 'MECH' ? 'from-blue-600'
        : previousValk.type === 'PHY' ? 'from-pink-600'
        : previousValk.type === 'QUA' ? 'from-violet-600'
        : 'from-[#8d6057]',
        nextValk.type === 'BIO' ? 'to-orange-600'
        : nextValk.type === 'MECH' ? 'to-blue-600'
        : nextValk.type === 'PHY' ? 'to-pink-600'
        : nextValk.type === 'QUA' ? 'to-violet-600'
        : 'to-[#8d6057]',
    ]">
        <div class="grid w-full grid-cols-3">
            <NuxtLink class="px-4 w-full h-full flex justify-center items-center" :to="`/${ slug(previousValk.name) }`">{{ previousValk.name }}</NuxtLink>
            <div class="grid w-full grid-cols-2 place-content-around px-1 py-0.5">
                <button @click="$emit('selected', index)" v-for="(build, index) in valkyrie.builds" :key="index" class="px-4 py-2 rounded" :class="selected === index ? 'border border-white border-2' : ''">{{ index + 1 }}</button>
            </div>
            <NuxtLink class="px-4 w-full h-full flex justify-center items-center" :to="`/${ slug(nextValk.name) }`">{{ nextValk.name }}</NuxtLink>
        </div>
    </div>
</template>