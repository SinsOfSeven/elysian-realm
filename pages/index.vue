<script setup lang="ts">
import { valkyrieList } from '~~/utilities/helpers';

const valks = ref(valkyrieList);
function filter(selected: string) {
    if (selected.length > 0) {
        valks.value = valkyrieList.filter(el => el.keyword.toLowerCase().includes(selected.toLowerCase()));
    } else {
        valks.value = valkyrieList;
    }
};

useHead({
    htmlAttrs: {
        lang: "en"
    },
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
    <div>

        <Head>
            <Title>Elysian Realm Guide 6.1</Title>
            <Meta name="description" content="Recommended Signet Builds for Elysian Realm Honkai Impact 3rd" />
            <Meta name="og:url" content="https://elysian-realm.vercel.app" />
            <Meta name="og:type" content="website" />
            <Meta name="og:title" content="Elysian Realm Guide v 6.1" />
            <Meta name="og:description" content="Recommended Signet Builds for Elysian Realm Honkai Impact 3rd" />
            <Meta name="og:image" content="https://elysian-realm.vercel.app/images/opengraph.jpg" />
            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:domain" content="elysian-realm.vercel.app" />
            <Meta name="twitter:url" content="https://elysian-realm.vercel.app" />
            <Meta name="twitter:title" content="Elysian Realm Guide v6.1" />
            <Meta name="twitter:description" content="Recommended Signet Builds for Elysian Realm Honkai Impact 3rd" />
            <Meta name="twitter:image" content="https://elysian-realm.vercel.app/images/opengraph.jpg" />
        </Head>

        <Body class="flex flex-col min-h-screen bg-gradient-to-br from-dark-blue via-dark-violet to-dark-pink font-sans">
            <div :class="isSticky ? 'sticky top-0 bg-gradient-to-b from-via-dark-violet to-dark-pink z-20' : 'bg-transparent'">
                <h1 class="text-white uppercase text-center text-4xl font-bold tracking-wider pt-8 pb-4">elysian
                    realm</h1>
                <SearchBar @filter="filter" />
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-6 md:px-12 md:gap-6 gap-4 py-8"
                v-if="valks.length > 0">
                <TransitionGroup name="list">
                    <Card v-for="valkyrie in valks" :key="valkyrie.name" :valkyrie="valkyrie" />
                </TransitionGroup>
            </div>
            <div v-else class="grow flex justify-center items-center">
                <p class="text-lg font-extrabold text-white uppercase">no result</p>
            </div>
        </Body>
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