<script setup lang="ts">
import { Valkyrie } from "../utilities/types";
import { slug } from "../utilities/helpers";

const props = defineProps<{ valkyrie: Valkyrie }>();

const isLazy = ref("eager");

function loadingType() {
    const rect = document.getElementById(slug(props.valkyrie.name))!.getBoundingClientRect();
    if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
        isLazy.value = "eager";
    }

    isLazy.value = "lazy";
}

onMounted(() => window.addEventListener('scroll', loadingType));
onUnmounted(() => window.removeEventListener('scroll', loadingType));
</script>

<template>
    <NuxtLink :to="`/valkyrie/${slug(valkyrie.name)}`" class="group relative" :id="slug(valkyrie.name)">
        <div class="h-full w-full bg-green-200 rounded-lg aspect-w-2 aspect-h-3 overflow-hidden bg-dark-pink border border-dark-pink">
            <img :src="`/valkyries/${ slug(valkyrie.name) }.webp`" :alt="valkyrie.name" class="scale-105 group-hover:scale-100 group-hover:opacity-90 object-cover w-full h-full" :loading="isLazy">
        </div>
        <div class="absolute bottom-0 w-full py-2 px-4 rounded-b-lg text-sm md:text-base uppercase text-dark-blue font-bold bg-dark-pink">{{ valkyrie.name }}</div>
    </NuxtLink>
</template>