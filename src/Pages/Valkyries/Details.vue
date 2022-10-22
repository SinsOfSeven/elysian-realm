<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { supabase } from "@/utilities/supabase";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ArrowDownIcon, HomeIcon } from "@heroicons/vue/24/outline";
import ValkyrieType from "@/Components/ValkyrieType.vue";
import ImageSource from "@/Components/ImageSource.vue";
import Loading from "@/Components/Loading.vue";
import Guest from "@/Layouts/Guest.vue";
import { Data, SignetObject, SigilBuild, ValkyrieDetails } from "@/utilities/types";

type Exclusive = { name: string; description: string; priority: string }
const route = useRoute();
const data = ref<Data>();
const selectedBuild = ref(0);
const indexTab = ref(0);
const signets = ref<SignetObject[]>();
const sigils = ref<SigilBuild[]>();
const supports = ref<SigilBuild[]>();
const exclusives = ref<Exclusive[]>();
const loading = ref(true);
const loadingImage = ref(true);
const valkyrie = ref<ValkyrieDetails>({
  name: "",
  image: "",
  extension: "",
  slug: "",
  type: "",
  position: "",
  imageSource: "",
  builds: [],
  keywords: "",
});
const isOnBottom = ref(false);
const currentView = ref(0);

const scroll = () => {
  const id = ["header", "builds", "signets", "footer"];
  if (id.length - 1 === currentView.value) {
    document.getElementById("header")!.scrollIntoView();
    currentView.value = 0;
  } else {
    document.getElementById(id[currentView.value += 1])!.scrollIntoView();
  }
};

window.onscroll = function (ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    isOnBottom.value = true;
  } else {
    isOnBottom.value = false;
  }
};

const loaded = () => loadingImage.value = false;

const isSupportWebp = (): boolean => {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}

const getData = async (): Promise<void> => {
  try {
    data.value = await supabase.from("valkyries").select().eq('slug', route.params.name).single().then(el => el = el.data);
    let builds = JSON.parse(data.value!.builds);
    valkyrie.value = Object.assign(data.value!, { builds: builds });
    loading.value = false;
    getSignets(0);
    valkyrie.value.builds.forEach(el => {
      if (el.ref.includes("youtube")) {
        const key = el.ref.split("?v=").pop();
        el.ref = `https://youtube.com/embed/${key}`;
      }
    });

    if (isSupportWebp()) {
      const image = valkyrie.value.image.split(".");
      valkyrie.value.image = `${image[0]}.webp`;
    }
    
  } catch (error) { alert(error) }
}

const getSignets = (index: number) => {
  selectedBuild.value = index;
  signets.value = valkyrie.value.builds[selectedBuild.value].signets;
  supports.value = valkyrie.value.builds[selectedBuild.value].supports;
  sigils.value = valkyrie.value.builds[selectedBuild.value].sigils;
  exclusives.value = valkyrie.value!.builds[selectedBuild.value].exclusives;
  document.getElementById("exclusive")?.click();
};

const reference = computed(() => valkyrie.value.builds[selectedBuild.value].ref);

onMounted(() => getData());
</script>

<template>
  <Loading v-if="loading" />
  <div v-else class="relative">
    <Guest>
      <div class="h-[36rem] md:h-[40rem] lg:h-screen w-full relative" id="header">
        <div class="w-full h-full">
          <img v-show="!loadingImage" :src="valkyrie.image" :alt="valkyrie.name"
            class="w-full h-full md:w-full md:h-full blur-sm object-cover opacity-60 absolute top-0" @load="loaded" />
          <div class="w-full h-full relative">
            <div class="flex flex-col">
              <img v-if="loadingImage" class="mx-auto" src="/assets/loading.gif" alt="loading.." />
              <div class="flex flex-col justify-center items-center w-full h-full">
                <img v-show="!loadingImage" :src="valkyrie.image" :alt="valkyrie.name"
                  class="w-full h-auto sm:w-1/6 sm:h-1/6 md:w-full md:h-full lg:w-7/12 lg:h-7/12" />
                <div class="mt-4 mx-auto flex flex-col">
                  <span
                    class="text-2xl font-bold lg:text-xl lg:font-semibold xl:text-3xl text-center drop-shadow-md shadow-black tracking-widest">
                    {{ valkyrie.name }}
                  </span>
                  <div class="flex w-full justify-between items-center mt-6">
                    <ValkyrieType :type="valkyrie.type" />
                    <ImageSource :imageSrc="valkyrie.imageSource" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-8 px-6 flex flex-col lg:flex-row-reverse w-full h-screen items-center space-y-4" id="builds">
        <h2 class="font-bold text-xl md:text-2xl lg:hidden">Signet Builds</h2>
        <div class="w-full py-6">
          <iframe class="w-[300px] h-[169px] md:w-[600px] md:h-[338px] border border-red-500 relative mx-auto"
            allow-fullscreen="true" :src="reference" />
        </div>
        <div class="h-96 w-full">
          <div class="w-full pt-12 lg:pt-0 px-2 sm:px-0">
            <h2 class="hidden font-bold text-xl md:text-2xl lg:block">Signet Builds</h2>
            <TabGroup @change="indexTab = 0">
              <div class="flex w-full">
                <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 lg:p-1 w-full overflow-x-auto">
                  <Tab v-for="(build, idx) in valkyrie.builds" as="template" :key="idx" v-slot="{selected}">
                    <button @click="getSignets(idx)" :class="[
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 focus:outline-none',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                    ]">
                      {{ build.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels class="mt-2 flex flex-col w-full">
                <TabPanel v-for="build in valkyrie.builds" :key="build.name" class="focus:outline-none">
                  <div class="flex flex-col w-full lg:flex-row h-80 overflow-y-auto bg-slate-800 rounded-xl">
                    <p class="py-2 px-8 whitespace-pre-line" v-text="build.informations" />
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
      <div class="w-full px-6 h-[40rem] overflow-y-hidden py-8" id="signets">
        <TabGroup>
          <div class="flex flex-col lg:flex-row h-full">
            <TabList
              class="flex flex-row lg:flex-col w-full items-center lg:w-1/5 rounded-xl bg-blue-900/20 lg:p-1 lg:space-y-4 lg:h-full lg:overflow-y-auto overflow-x-auto overflow-y-hidden">
              <Tab v-slot="{selected}" as="div" class="w-full h-full">
                <button id="exclusive" :class="[
                  'px-6 py-4 uppercase w-full rounded-lg lg:py-8 font-semibold leading-5 text-blue-700',
                    selected
                      ? 'bg-white shadow ring-transparent outline-none ring-0 border-0'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                ]">
                  Setup
                </button>
              </Tab>
              <Tab v-slot="{selected}" as="div" class="w-full h-full">
                <button :class="[
                  'px-6 py-4 uppercase w-full rounded-lg lg:py-8 font-semibold leading-5 text-blue-700 focus:outline-none border-0',
                    selected
                      ? 'bg-white shadow ring-transparent outline-none ring-0 border-0'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                ]">
                  Elysia
                </button>
              </Tab>
              <Tab v-for="(signet,idx) in signets" as="div" class="w-full h-full" :key="idx" v-slot="{selected}">
                <button :class="[
                  'px-6 py-4 uppercase w-full rounded-lg lg:py-8 font-semibold leading-5 text-blue-700 focus:outline-none border-0',
                  selected
                    ? 'bg-white shadow ring-transparent outline-none ring-0 border-0'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                ]">
                  {{ signet.name }}
                </button>
              </Tab>
            </TabList>

            <TabPanels class="w-full lg:w-4/5 h-full bg-slate-800 rounded-xl overflow-y-auto">
              <TabPanel class="rounded-xl bg-transparent px-8 py-6 space-y-6">
                <p class="w-full bg-slate-500 px-4 py-3 rounded font-semibold"
                  v-text="`Boss path: ${valkyrie.builds[selectedBuild].boss}`"></p>
                <table class="table w-full h-full">
                  <thead>
                    <tr class="border border-white">
                      <th class="border border-white py-3">Time</th>
                      <th class="border border-white py-3">Remembrance Sigil</th>
                      <th class="border border-white py-3">FC Support Skill</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border border-white" v-for="(sigil, index) in sigils" :key="index">
                      <td class="border border-white text-center py-2">{{ sigil.time }}</td>
                      <td class="border border-white text-center py-2">{{ sigil.first }}</td>
                      <td class="border border-white text-center py-2">{{ sigil.second }}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table w-full h-full">
                  <thead>
                    <tr class="border border-white">
                      <th class="border border-white py-3">Time</th>
                      <th class="border border-white py-3">First Support</th>
                      <th class="border border-white py-3">Second Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border border-white" v-for="(support, index) in supports" :key="index">
                      <td class="border border-white text-center py-2">{{ support.time }}</td>
                      <td class="border border-white text-center py-2">{{ support.first }}</td>
                      <td class="border border-white text-center py-2">{{ support.second }}</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel class="rounded-xl bg-transparent px-8 py-6 space-y-6">
                <table class="table w-full h-full">
                  <thead>
                    <tr class="border border-white">
                      <th class="border border-white py-2 px-4">No</th>
                      <th class="border border-white py-2 px-4">Name</th>
                      <th class="border border-white py-2 px-4">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border border-white" v-for="(exclusive, index) in exclusives" :key="index">
                      <td class="border border-white text-center">{{ index + 1 }}</td>
                      <td class="border border-white p-2">
                        <div class="flex flex-col">
                          <span class="font-semibold underline">{{ exclusive.name }}</span>
                          <span class="text-sm text-gray-300">{{ exclusive.description }}</span>
                        </div>
                      </td>
                      <td class="border border-white text-center">{{ exclusive.priority }}</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel v-for="(signet, idx) in signets" :key="idx" class="rounded-xl bg-transparent px-8 py-6">
                <div class="w-full bg-slate-500 px-4 py-2 rounded mb-4 font-semibold" v-if="signet.informations">
                  <p v-text="signet.informations" class="whitespace-pre-line" />
                </div>
                <table class="table w-full">
                  <thead>
                    <tr class="border border-white">
                      <th class="border border-white py-2 px-4">No</th>
                      <th class="border border-white py-2 px-4">Name</th>
                      <th class="border border-white py-2 px-4">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border border-white" v-for="(sign, index) in signet.lists" :key="index">
                      <td class="border border-white text-center">{{ index + 1 }}</td>
                      <td class="border border-white p-2">
                        <div class="flex flex-col">
                          <span class="font-semibold underline">{{ sign.name }}</span>
                          <span class="text-sm text-gray-300">{{ sign.description }}</span>
                        </div>
                      </td>
                      <td class="border border-white text-center">{{ sign.priority }}</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
            </TabPanels>
          </div>
        </TabGroup>
      </div>
    </Guest>
    <router-link to="/" class="rounded-full h-12 w-12 bg-gray-800 border border-white fixed bottom-10 left-10">
      <div class="flex items-center justify-center w-full h-full">
        <HomeIcon class="w-8 h-8 text-white" />
      </div>
    </router-link>
    <button @click="scroll()" class="rounded-full h-12 w-12 bg-gray-800 border border-white fixed bottom-10 right-10 animate-bounce">
      <div class="flex items-center justify-center w-full h-full">
        <ArrowDownIcon :class="['w-8 h-8 text-white', isOnBottom ? 'rotate-180' : '']" />
      </div>
    </button>
  </div>
</template>