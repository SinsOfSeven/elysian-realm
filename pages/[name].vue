<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Valkyrie, Description } from "~~/utilities/types";
import { valkyries } from "~~/utilities/database";
import { slug, ensure } from "~~/utilities/helpers";

const name = useRoute().params.name;
const valkyrie: Valkyrie = ensure(valkyries.find((el: Valkyrie) => slug(el.name) === name));

useHead({
    htmlAttrs: {
        lang: "en"
    },
});

const selectedIndex = ref(0);
const selectedBuild = ref(valkyrie.builds[selectedIndex.value]);
const buildCounter = ref(Number.MIN_SAFE_INTEGER);
function selected(index: number) {
    selectedIndex.value = index;
    selectedBuild.value = valkyrie.builds[selectedIndex.value];
    buildCounter.value++;
};

const timeline = ["Early", "Mid", "Late"];
const time = ref(0);
const timeCounter = ref(Number.MIN_SAFE_INTEGER);
const timeText = ref(timeline[0]);
const sigil = ref(selectedBuild.value.sigil.lists[time.value]);
const support = ref(selectedBuild.value.support.lists[time.value]);

function changeTime() {
    time.value = (time.value + 1) % timeline.length;
    timeText.value = timeline[time.value];

    sigil.value = selectedBuild.value.sigil.lists[time.value];
    support.value = selectedBuild.value.support.lists[time.value];
    timeCounter.value++;
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
    <div>

        <Head>
            <Title>{{ valkyrie.name }}</Title>
            <Meta name="description"
                :content="`Recommended Signet Builds for ${valkyrie.name} Elysian Realm Honkai Impact 3rd`" />
            <Meta name="og:url" :content="`https://elysian-realm.vercel.app/valkyrie/${slug(valkyrie.name)}`" />
            <Meta name="og:type" content="website" />
            <Meta name="og:title" :content="`Elysian Realm: ${valkyrie.name} Guide`" />
            <Meta name="og:description"
                :content="`Recommended Signet Builds for ${valkyrie.name} Elysian Realm Honkai Impact 3rd`" />
            <Meta name="og:image" :content="`https://elysian-realm.vercel.app/valkyries/${slug(valkyrie.name)}.webp`" />
            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:domain" content="elysian-realm.vercel.app" />
            <Meta name="twitter:url" :content="`https://elysian-realm.vercel.app/valkyrie/${slug(valkyrie.name)}`" />
            <Meta name="twitter:title" :content="`Elysian Realm: ${valkyrie.name} Guide`" />
            <Meta name="twitter:description" :content="`Recommended Signet Builds for ${valkyrie.name} Elysian Realm Honkai Impact
            3rd`" />
            <Meta name="twitter:image"
                :content="`https://elysian-realm.vercel.app/valkyries/${slug(valkyrie.name)}.webp`" />
        </Head>

        <Body class="flex flex-col min-h-screen bg-dark-blue">
            <div class="grow" :key="buildCounter">
                <div class="px-2 md:px-6 pt-8 bg-dark-blue text-white z-0">
                    <div class="flex justify-between items-center">
                        <div class="flex flex-col">
                            <p class="text-xs uppercase">{{ valkyrie.name }}</p>
                            <p class="text-xl font-bold uppercase">{{ selectedBuild.name }}</p>
                        </div>
                        <NuxtLink to="/" class="hover:animate-pulse rounded rounded-full border border-white p-3 w-12 lg:w-14"
                            aria-label="Homepage">
                            <!-- HomeIcon -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 lg:w-8 lg:h-8 text-white" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-col w-full relative">
                        <Information :note="selectedBuild.note" :danger="selectedBuild.danger"
                            :key="selectedBuild.name" />
                        <Boss :boss="selectedBuild.boss" class="py-4" />
                        <Buff :buff="selectedBuild.buff" class="py-4" />
                        <div class="flex w-full mt-6">
                            <button @click="changeTime"
                                class="text-sm bg-white text-dark-blue rounded-full text-center w-16 h-14">
                                {{ timeline[time].toUpperCase() }}
                            </button>
                            <div class="flex flex-col md:flex-row w-full md:w-fit md:max-w-sm relative"
                                :key="timeCounter">
                                <Sigil :sigil="sigil" :note="selectedBuild.sigil.note" :key="time"
                                    @is-hover="fetchDescription" />
                                <Support :support="support" :note="selectedBuild.support.note"
                                    :danger="selectedBuild.support.danger" :key="time" @is-hover="fetchDescription" />
                                <div class="flex w-full">
                                    <Popover>
                                        <PopoverButton
                                            v-show="selectedBuild.sigil.note || selectedBuild.support.note || selectedBuild.support.danger"
                                            @click="isOpen = true" aria-label="More info" class="ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-12 h-12"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                        </PopoverButton>
                                        <Transition name="slide-fade">
                                            <PopoverPanel
                                                class="absolute left-0 z-10 h-fit max-h-64 overflow-y-auto bg-gradient-to-b from-dark-pink via-dark-violet to-dark-blue border border-white rounded text-base px-4 py-2">
                                                <div class="space-y-3">
                                                    <div v-show="selectedBuild.sigil.note">
                                                        <span class="underline">Sigil Note</span>
                                                        <p class="text-sm">{{ selectedBuild.sigil.note }}</p>
                                                    </div>
                                                    <div v-show="selectedBuild.support.note">
                                                        <span class="underline">Support Note</span>
                                                        <p class="text-sm">{{ selectedBuild.support.note }}</p>
                                                    </div>
                                                    <div v-show="selectedBuild.support.danger">
                                                        <span class="underline font-semibold">Warning!</span>
                                                        <p class="text-sm">{{ selectedBuild.support.note }}</p>
                                                    </div>
                                                </div>
                                            </PopoverPanel>
                                        </Transition>
                                    </Popover>
                                    <div
                                        :class="{ 'z-30 left-0 mt-4 top-20 w-full max-w-sm bg-dark-pink border border-white text-white rounded px-4 py-1 absolute' : showDetails }">
                                        <h2 class="font-semibold">
                                            {{ description.name }}
                                            <div v-show="description.skill" class="text-sm">
                                                <span>{{ description.skill }} (CD: {{ description.cooldown }} sec)</span>
                                            </div>
                                        </h2>
                                        <p class="font-thin" v-text="description.description" />
                                        <p v-show="description.charging">
                                            <span class="font-semibold">Charging:</span>
                                            <span v-text="description.charging" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Setup :setup="selectedBuild.setup" :key="selectedBuild.name" />
                <Signet :signet="selectedBuild.signet" />
            </div>
            <Navigation :selected="selectedIndex" @selected="selected" />
        </Body>
    </div>
</template>
<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
