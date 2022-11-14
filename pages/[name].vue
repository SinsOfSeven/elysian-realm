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

const timeline = ["Early", "Mid", "Late"];
const time = ref(0);
const timeText = ref(timeline[0]);
const sigil = ref(selectedBuild.value.sigil.lists[time.value]);
const support = ref(selectedBuild.value.support.lists[time.value]);

function changeTime() {
    time.value = (time.value + 1) % timeline.length;
    timeText.value = timeline[time.value];

    sigil.value = selectedBuild.value.sigil.lists[time.value];
    support.value = selectedBuild.value.support.lists[time.value];
}
</script>

<template>
    <div class="px-2 pt-8 text-white bg-gray-700">
        <p class="text-xs uppercase">{{ valkyrie.name }}</p>
        <p class="text-xl font-bold uppercase">{{ selectedBuild.name }}</p>
        <div class="flex flex-col space-y-2">
            <Information :note="selectedBuild.note" />
            <Danger v-if="selectedBuild.danger" :danger="selectedBuild.danger" />
            <Boss :boss="selectedBuild.boss" class="pt-5 pb-3" />
            <Buff :buff="selectedBuild.buff" />
            <div class="flex w-full space-x-3">
                <button @click="changeTime" class="text-xs bg-white text-gray-700 rounded-full w-16 h-16">
                    {{ timeline[time] }}
                </button>
                <Sigil :sigil="sigil" :key="time" :note="selectedBuild.sigil.note" />
                <Support :support="support" :key="time" :note="selectedBuild.support.note" />
            </div>
        </div>
    </div>
    <Navigation :selected="selectedIndex" @selected="selected" />
</template>