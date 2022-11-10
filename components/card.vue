<script setup lang="ts">
import { Valkyrie } from "../utilities/types";
import { slug } from "../utilities/helpers";

defineProps<{valkyrie: Valkyrie}>();

const colorByType = (type: string, position: string): string => {
    if (type === "BIO") {
        if (position === "text") return "bg-orange-600 group-hover:bg-orange-500";
        return "border border-orange-600";
    } else if (type === "MECH") {
        if (position === "text") return "bg-blue-600 group-hover:bg-blue-500";
        return "border border-blue-600";
    } else if (type === "PHY") {
        if (position === "text") return "bg-pink-600 group-hover:bg-pink-500";
        return "border border-pink-600";
    } else if (type === "QUA") {
        if (position === "text") return "bg-violet-600 group-hover:bg-violet-500";
        return "border border-violet-600";
    } else {
        if (position === "text") return "bg-[#8d6057] group-hover:bg-[#b37c72]";
        return "border border-[#8d6057]";
    }
}
</script>

<template>
    <NuxtLink :to="slug(valkyrie.name)" class="group relative">
        <div class="h-full w-full bg-green-200 rounded-lg aspect-w-2 aspect-h-3 overflow-hidden" :class="colorByType(valkyrie.type, 'image')">
            <img :src="`/valkyries/${ slug(valkyrie.name) }.jpg`" :alt="valkyrie.name" class="scale-105 group-hover:scale-100 group-hover:opacity-90 object-cover w-full h-full">
        </div>
        <div :class="colorByType(valkyrie.type, 'text')" class="absolute bottom-0 w-full py-2 px-4 rounded-b-lg text-sm md:text-base uppercase text-white">{{ valkyrie.name }}</div>
    </NuxtLink>
</template>