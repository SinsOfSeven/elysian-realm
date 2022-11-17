<script setup lang="ts">
import { Valkyrie, Description } from "~~/utilities/types";
import { valkyries } from "~~/utilities/database";
import { slug, ensure } from "~~/utilities/helpers";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

const name = useRoute().params.name;
const valkyrie: Valkyrie = ensure(valkyries.find((el: Valkyrie) => slug(el.name) === name));

useHead({
    title: valkyrie.name,
    htmlAttrs: {
        lang: "en"
    },
    meta: [
        {
            name: "description",
            content: `Recommended Signet Builds for ${valkyrie.name} Elysian Realm Honkai Impact 3rd`
        },
        {
            name: "og:url",
            content: `https://elysian-realm.vercel.app/valkyrie/${slug(valkyrie.name)}`
        },
        {
            name: "og:type",
            content: "website"
        },
        {
            name: "og:title",
            content: `Elysian Realm: ${valkyrie.name} Guide`
        },
        {
            name: "og:description",
            content: `Recommended Signet Builds for ${valkyrie.name} Elysian Realm Honkai Impact 3rd`
        },
        {
            name: "og:image",
            content: `https://elysian-realm.vercel.app/valkyries/${slug(valkyrie.name)}.webp`
        },
        {
            name: "twitter:card",
            content: "summary_large_image"
        },
        {
            name: "twitter:domain",
            content: "elysian-realm.vercel.app"
        },
        {
            name: "twitter:url",
            content: `https://elysian-realm.vercel.app/valkyrie/${slug(valkyrie.name)}`
        },
        {
            name: "twitter:title",
            content: `Elysian Realm: ${valkyrie.name} Guide`
        },
        {
            name: "twitter:description",
            content: `Recommended Signet Builds for ${valkyrie.name} Elysian Realm Honkai Impact 3rd`
        },
        {
            name: "twitter:image",
            content: `https://elysian-realm.vercel.app/valkyries/${slug(valkyrie.name)}.webp`
        },
    ],
});

const selectedIndex = ref(0);
const selectedBuild = ref(valkyrie.builds[selectedIndex.value]);
function selected(index: number) {
    selectedIndex.value = index;
    selectedBuild.value = valkyrie.builds[selectedIndex.value];
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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

const showDetails = ref(false);
const description = ref<Description>({
    name: "",
    description: "",
    skill: "",
    abbr: "",
    charging: "",
    cooldown: "",
});

function fetchDescription(state: boolean, name?: Description) {
    if (state) {
        showDetails.value = true;
        description.value = name!;
    } else {
        showDetails.value = false;
        description.value = {
            name: "",
            description: "",
            skill: "",
            abbr: "",
            charging: "",
            cooldown: "",
        };
    }
};

const isOpen = ref(false);
</script>

<template>
    <div class="px-2 md:px-6 pt-8 bg-gradient-to-br from-dark-blue to-sky-blue text-light-yellow relative z-0">
        <div class="z-20">
            <p class="text-xs uppercase">{{ valkyrie.name }}</p>
            <p class="text-xl font-bold uppercase">{{ selectedBuild.name }}</p>
            <div class="flex flex-col space-y-2 w-full">
                <Information :note="selectedBuild.note" :key="selectedBuild.name" />
                <Danger v-if="selectedBuild.danger" :danger="selectedBuild.danger" :key="selectedBuild.name" />
                <div class="flex flex-col lg:flex-row w-full">
                    <div class="w-full">
                        <Boss :boss="selectedBuild.boss" class="pt-5 pb-3" />
                        <Buff :buff="selectedBuild.buff" class="lg:pb-4" />
                    </div>
                    <div class="flex flex-col w-full py-6 relative">
                        <div class="flex space-x-2 lg:justify-end">
                            <button @click="changeTime" class="tracking-tight border border-dark-blue text-xs bg-dark-pink font-semibold text-dark-blue rounded-full w-16 h-16">
                                {{ timeline[time].toUpperCase() }}
                            </button>
                            <Sigil :sigil="sigil" :key="time" @is-hover="fetchDescription" />
                            <Support :support="support" :key="time" @is-hover="fetchDescription" />
                            <button v-show="selectedBuild.sigil.note || selectedBuild.support.note" class="animate-pulse" @click="isOpen = true"><InformationCircleIcon class="w-8 h-8" /></button>
                        </div>
                        <div :class="showDetails ? 'z-30 right-0 mt-4 ml-auto bottom-0 w-full max-w-sm bg-dark-pink border border-dark-blue text-dark-blue rounded px-4 py-1' : ''">
                            <h2 class="font-semibold">
                                {{ description.name }} 
                                <div v-show="description.skill" class="text-sm">
                                    <span>{{ description.skill }} (CD: {{ description.cooldown }} sec)</span>
                                </div>
                            </h2>
                            <p>{{ description.description }}</p>
                            <p v-show="description.charging">
                                <span class="font-semibold">Charging:</span> 
                                {{ description.charging }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Setup :setup="selectedBuild.setup" :key="selectedBuild.name" />
    <Signet :signet="selectedBuild.signet" />
    <Navigation :selected="selectedIndex" @selected="selected" />
    <Modal @is-close="isOpen = false" :open="isOpen">
        <span v-show="selectedBuild.sigil.note">Sigil note: {{ selectedBuild.sigil.note }} <br /> <br /></span>
        <span v-show="selectedBuild.support.note">Support note: {{ selectedBuild.support.note }}</span>
    </Modal>
</template>
