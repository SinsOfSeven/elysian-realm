<script setup lang="ts">
import { valkyries } from '~~/utilities/database';
import { Valkyrie } from '~~/utilities/types';

const valks = ref<Array<Valkyrie>>(valkyries);
function filter(selected: string) {
    if (selected.length > 0) {
        valks.value = valkyries.filter(el => el.keyword.toLowerCase().includes(selected.toLowerCase()));
    } else {
        valks.value = valkyries;
    }
};

useHead({
    title: "Elysian Realm Guide 6.1",
    htmlAttrs: {
        lang: "en"
    },
    meta: [
        {
            name: "description",
            content: "Recommended Signet Builds for Elysian Realm Honkai Impact 3rd"
        },
        {
            name: "og:url",
            content: "https://elysian-realm.vercel.app"
        },
        {
            name: "og:type",
            content: "website"
        },
        {
            name: "og:title",
            content: "Elysian Realm Guide v 6.1"
        },
        {
            name: "og:description",
            content: "Recommended Signet Builds for Elysian Realm Honkai Impact 3rd"
        },
        {
            name: "og:image",
            content: "https://elysian-realm.vercel.app/images/opengraph.jpg"
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
            content: "https://elysian-realm.vercel.app"
        },
        {
            name: "twitter:title",
            content: "Elysian Realm Guide v6.1"
        },
        {
            name: "twitter:description",
            content: "Recommended Signet Builds for Elysian Realm Honkai Impact 3rd"
        },
        {
            name: "twitter:image",
            content: "https://elysian-realm.vercel.app/images/opengraph.jpg"
        },
    ],
    bodyAttrs: {
        class: 'bg-gradient-to-br from-turquoise to-dark-blue'
    }
});

const isSticky = ref(false);

function scroll() {
    let y = window.scrollY;
    if (y >= 150) isSticky.value = true;
    else isSticky.value = false;
}

onMounted(() => window.addEventListener('scroll', scroll));
onUnmounted(() => window.removeEventListener('scroll', scroll));
</script>
<template>
    <div class="flex flex-col min-h-screen">
        <div :class="isSticky ? 'sticky top-0 bg-gradient-to-b from-sky-blue to-dark-blue z-20' : 'bg-transparent'">
            <h1 class="text-dark-pink uppercase text-center text-4xl font-bold tracking-wider pt-8 pb-4">elysian realm</h1>
            <SearchBar @filter="filter" />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-6 md:px-12 md:gap-6 gap-4 py-8" v-if="valks.length > 0">
            <TransitionGroup name="list">
                <Card v-for="valkyrie in valks" :key="valkyrie.name" :valkyrie="valkyrie" />
            </TransitionGroup>
        </div>
        <div v-else class="grow flex justify-center items-center">
            <p class="text-lg font-extrabold text-dark-pink uppercase">no result</p>
        </div>
    </div>
</template>
<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>