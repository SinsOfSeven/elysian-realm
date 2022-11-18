<script setup lang="ts">
import { Valkyrie, Description } from "~~/utilities/types";
import { valkyries } from "~~/utilities/database";
import { slug, ensure } from "~~/utilities/helpers";

const name = useRoute().params.name;
const valkyrie: Valkyrie = ensure(valkyries.find((el: Valkyrie) => slug(el.name) === name));

useHead({
    title: valkyrie.name,
    htmlAttrs: {
        lang: "en"
    },
    bodyAttrs: {
        class: "bg-gradient-to-br from-sky-blue to-dark-blue"
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
    <div class="flex flex-col min-h-screen">
        <div class="grow">
            <div class="px-2 md:px-6 pt-8 bg-gradient-to-br from-dark-blue to-sky-blue text-light-yellow relative z-0">
                <NuxtLink to="/" class="hover:animate-pulse absolute top-8 right-8 rounded rounded-full border border-light-yellow p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 lg:w-8 lg:h-8 text-light-yellow">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </NuxtLink>
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
                                    <button @click="changeTime"
                                        class="tracking-tight border border-dark-blue text-xs bg-dark-pink font-semibold text-dark-blue rounded-full w-16 h-16">
                                        {{ timeline[time].toUpperCase() }}
                                    </button>
                                    <Sigil :sigil="sigil" :key="time" @is-hover="fetchDescription" />
                                    <Support :support="support" :key="time" @is-hover="fetchDescription" />
                                    <button v-show="selectedBuild.sigil.note || selectedBuild.support.note"
                                        class="animate-pulse" @click="isOpen = true">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    :class="showDetails ? 'z-30 right-0 mt-4 ml-auto bottom-0 w-full max-w-sm bg-dark-pink border border-dark-blue text-dark-blue rounded px-4 py-1' : ''">
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
            <Modal @is-close="isOpen = false" :open="isOpen">
                <div class="space-y-3">
                    <div v-show="selectedBuild.sigil.note">
                        <span class="underline">Sigil Note</span>
                        <p class="font-thin">{{ selectedBuild.sigil.note }}</p>
                    </div>
                    <div v-show="selectedBuild.support.note">
                        <span class="underline">Support Note</span>
                        <p class="font-thin">{{ selectedBuild.support.note }}</p>
                    </div>
                </div>
            </Modal>
        </div>
        <Navigation :selected="selectedIndex" @selected="selected" />
    </div>
</template>
