<script setup lang="ts">
import { Valkyrie } from "~~/utilities/types";
import { valkyries } from "~~/utilities/database";
import { slug, ensure } from "~~/utilities/helpers";

const name = useRoute().params.name;
const valkyrie: Valkyrie = ensure(valkyries.find(el => slug(el.name) === name));

useHead({
    title: valkyrie.name,
});

const selectedIndex = ref(0);
const selectedBuild = ref(valkyrie.builds[selectedIndex.value]);
const selected = (index: number) => {
    selectedIndex.value = index;
    selectedBuild.value = valkyrie.builds[selectedIndex.value];
};
</script>

<template>
    <div class="backdrop-blur-sm h-96 px-2 pt-8 text-white bg-gray-700 bg-no-repeat bg-center bg-contain" :style="`background-image: url('/valkyries/${slug(valkyrie.name)}.jpg');`">
        <p class="text-xs uppercase">{{ valkyrie.name }}</p>
        <p class="text-xl font-bold uppercase">{{ selectedBuild.name }}</p>
        <Information v-if="selectedBuild.note" :note="selectedBuild.note" />
        <Danger v-if="selectedBuild.danger" :danger="selectedBuild.danger" />
        <div class="flex flex-col py-6">
            <Boss :boss="selectedBuild.boss" />
        </div>
        <div class="flex w-full space-x-2 items-center">
            <span class="uppercase">Buff</span>
            <div class="flex w-full justify-start space-x-2">
                <button class="border border-white bg-orange-600 w-12 h-12">5</button>
                <button class="border border-white bg-orange-600 w-12 h-12">10</button>
                <button class="border border-white bg-orange-600 w-12 h-12">15</button>
            </div>
        </div>
    </div>
    <Navigation @selected="selected" />
</template>