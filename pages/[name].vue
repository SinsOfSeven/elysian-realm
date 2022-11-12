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
    <div class="px-2 pt-8 text-white bg-gray-700">
        <p class="text-xs uppercase">{{ valkyrie.name }}</p>
        <p class="text-xl font-bold uppercase">{{ selectedBuild.name }}</p>
        <Information v-if="selectedBuild.note" :note="selectedBuild.note" />
        <Danger v-if="selectedBuild.danger" :danger="selectedBuild.danger" />
        <div class="flex flex-col py-6">
            <Boss :boss="selectedBuild.boss" />
        </div>
        <div class="flex w-full space-x-2 items-center">
            <Buff v-if="selectedBuild.buff" :buff="selectedBuild.buff" />
        </div>
    </div>
    <Navigation :selected="selectedIndex" @selected="selected" />
</template>