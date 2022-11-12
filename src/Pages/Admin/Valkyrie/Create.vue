<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon, ChevronUpDownIcon, CheckIcon, PlusIcon } from "@heroicons/vue/20/solid";
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { supabase, supabaseValkyrieDatabase, supabaseFlamechaserDatabase, supabaseExclusiveDatabase } from "@/utilities/supabase";
import Draggable from "vuedraggable";
import Loading from "@/Components/Loading.vue";
import { ValkyrieBuild, ValkyrieDetails, Flamechaser, Exclusive, SignetItem } from "@/utilities/types";
import { useTitle, useSlug, useRedirectTo, useValkyrieTypes, useEnsure } from "@/utilities/helpers";
import Admin from "@/Layouts/Admin.vue";

const types = useValkyrieTypes;

const form = ref<ValkyrieDetails>({
  name: "",
  image: "",
  slug: "",
  type: "",
  position: "",
  imageSource: "",
  builds: [],
  keywords: ""
});

const image = ref();
const changeImage = () => {
  // @ts-ignore
  form.value.image = event.target.files[0];
  // @ts-ignore
  image.value = URL.createObjectURL(form.value.image);
};

const loading = ref(true);
let exclusiveList = [] as Array<Exclusive>;
const flamechasers = ref<Array<Flamechaser>>([{ name: "", signets: [] }]);
const getFlamechasers = async () => {
  flamechasers.value = (await supabase.from(supabaseFlamechaserDatabase).select().order('name')).data as Array<Flamechaser>;

  exclusiveList = (await supabase.from(supabaseExclusiveDatabase).select()).data as Array<Exclusive>;

  loading.value = false;
};

const insert = async () => {
  loading.value = true;
  // @ts-ignore
  const extension = form.value.image.type.split("/").pop() as string;

  await supabase.from(supabaseValkyrieDatabase).insert({
    name: useTitle(form.value.name),
    image: `/valkyries/${useSlug(form.value.name)}.${extension}`,
    imageSource: form.value.imageSource,
    type: form.value.type,
    slug: useSlug(form.value.name),
    builds: JSON.stringify(form.value.builds),
    position: form.value.position,
    keywords: form.value.keywords,
  });

  useRedirectTo('/admin');
};

let exclusives = {} as Exclusive;
const name = ref("");
const addBuilds = () => {
  // For first time add build, set "exclusives" based from list with same name property
  // If object is null or name input is changed, re assign "exclusives" object
  if ((exclusives === null && typeof exclusives === "object") || name.value.toLowerCase() !== form.value.name.toLowerCase()) {
    name.value = form.value.name.toLowerCase();
    exclusives = useEnsure(exclusiveList.find(el => el.name.toLowerCase() === name.value), "Valkyrie name not found");
  }

  let obj: ValkyrieBuild = {
    name: "", ref: "", boss: "", informations: "",
    supports: [{ time: "Early", first: "", second: "" }, { time: "Mid", first: "", second: "" }, { time: "Late", first: "", second: "" }],
    sigils: [{ time: "Early", first: "", second: "" }, { time: "Mid", first: "", second: "" }, { time: "Late", first: "", second: "" }],
    signets: [{
      name: "Choose one", informations: "", lists: [{ name: "", description: "", priority: "" }]
    }],
    // @ts-ignore
    exclusives: JSON.parse(exclusives.signets)
  };

  form.value.builds.push(obj);
};

const removeAt = (index: number, idx?: number, i?: number) => {
  // Remove Build
  if (idx === undefined) {
    form.value.builds.splice(index, 1);
  }
  // Remove flamechaser
  else if (i === undefined) {
    form.value.builds[index].signets.splice(idx, 1);
  } 
  // Remove signet from flamechaser
  else {
    form.value.builds[index].signets[idx].lists.splice(i, 1);
  } 
};

const resetSignets = (index: number, idx: number) => {
  const flamechaser = JSON.stringify(useEnsure(flamechasers.value.find(item => item.name === form.value.builds[index].signets[idx].name)).signets);
  const signets = [] as Array<SignetItem>;
  const selected = JSON.parse(JSON.parse(flamechaser));
    
    for (const key in selected) {
    for (const iterator of selected[key]) {
      signets.push(Object.assign(iterator, { priority: key }));
    }
  }

  form.value.builds[index].signets[idx].lists = signets;
};

const addSignet = (index: number) => form.value.builds[index].signets.push({ name: "Choose one", informations: "", lists: [] });

onMounted(() => getFlamechasers());
</script>
<template>
  <Loading v-if="loading" />
  <Admin v-else>
    <form @submit.prevent="insert" class="px-8 w-full">
      <div class="flex w-full space-x-4">
        <div class="flex flex-col w-2/3">
          <div class="mt-4 flex flex-col w-full">
            <label for="name" class="text-sm">Valkyrie Name</label>
            <input id="name" type="text" class="text-gray-900 rounded-lg" v-model="form.name">
          </div>
          <div class="mt-4 w-full flex flex-col">
            <label for="imageSource" class="text-sm">Source Image</label>
            <input id="imageSource" type="text" class="text-gray-900 rounded-lg" v-model="form.imageSource">
          </div>
          <div class="mt-4 flex flex-col w-full">
            <label for="type" class="text-sm">Valkyrie Type</label>
            <select id="type" v-model="form.type" class="rounded-lg text-gray-900">
              <option v-for="(type, index) in types" :key="index" :value="type">{{ type }}</option>
            </select>
          </div>
          <div class="mt-4 flex flex-col w-full">
            <label for="image" class="text-sm">Image</label>
            <input id="image" type="file"
              class="bg-white text-gray-900 rounded-lg hover:cursor-pointer file:border file:border-solid file:px-4 file:py-2 file:text-white file:bg-slate-600 file:rounded-full"
              @input="changeImage()">
          </div>
          <div class="mt-4 flex flex-col w-full">
            <label for="position" class="text-sm">Image position</label>
            <select v-model="form.position" id="position" class="text-gray-900 rounded-lg">
              <option value="object-center" selected>Center</option>
              <option value="object-top">Top</option>
              <option value="object-left">Left</option>
              <option value="object-right">Right</option>
              <option value="object-bottom">Bottom</option>
              <option value="object-left-bottom">Left Bottom</option>
              <option value="object-left-top">Left Top</option>
              <option value="object-right-bottom">Right Bottom</option>
              <option value="object-right-top">Right Top</option>
            </select>
          </div>
          <div class="mt-4 w-full flex flex-col">
            <label for="keywords" class="text-sm">Keywords</label>
            <input id="keywords" type="text" class="text-gray-900 rounded-lg" v-model="form.keywords">
          </div>
        </div>
        <div class="relative w-1/3 mt-4">
          <span class="tex-sm">Preview image</span>
          <div
            class="aspect-w-1 aspect-h-1 min-h-24 lg:h-24 w-full flex-col items-center overflow-hidden bg-transparent rounded-xl">
            <img v-if="image"
              class="object-center h-full w-full scale-105 object-cover group-hover:scale-100 lg:h-full lg:w-full"
              :class="form.position" :src="image" />
            <div v-else class="h-full w-full bg-slate-600"></div>
          </div>
        </div>
      </div>

      <button type="button"
        class="my-2 rounded px-4 text-sm bg-slate-700 hover:bg-slate-500 py-2 disabled:bg-slate-300 disabled:text-slate-700 disabled:cursor-not-allowed"
        @click="addBuilds()" :disabled="!form.name">Add Builds</button>
      <div v-for="(build, key) in form.builds" :key="key" class="flex w-full space-x-2 space-y-1">
        <Disclosure as="div" class="mt-2 w-full" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-slate-800 px-4 py-2 text-left text-sm font-medium hover:bg-slate-600 focus:outline-none">
            <span>{{ build.name }}</span>
            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-white" />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm bg-slate-700 space-y-4">
            <div class="flex w-full space-x-4">
              <div class="flex flex-col w-full">
                <label for="name">Build name</label>
                <input id="name" type="text" class="text-gray-900 rounded" v-model="build.name" />
              </div>
              <div class="flex flex-col w-full">
                <label for="ref">Video Embed Link (youtube, bilibili, etc)</label>
                <input id="ref" type="text" class="text-gray-900 rounded" v-model="build.ref"
                  placeholder="Example: https://youtube.com/embed/random" />
              </div>
              <div class="flex flex-col w-full">
                <label for="boss">Boss Path</label>
                <input id="boss" type="text" class="text-gray-900 rounded" v-model="build.boss"
                  placeholder="Example: Husk, then Elysia" />
              </div>
            </div>
            <div class="flex flex-col w-full py-2">
              <label for="informations">Useful Information about this build</label>
              <textarea class="text-gray-900 rounded resize-none" v-model="build.informations" />
            </div>
            <div class="flex space-x-4 w-full">
              <table class="w-full table border-collapse border border-slate-100">
                <tr>
                  <td class="border border-slate-100 text-center px-4 py-2">Time</td>
                  <td class="border border-slate-100 text-center px-4 py-2">Remembrance Sigil</td>
                  <td class="border border-slate-100 text-center px-4 py-2">Flamechaser Support Sigil</td>
                </tr>
                <tr v-for="sigil in build.sigils" :key="sigil.time">
                  <td class="border border-slate-100 text-center px-4 py-2">{{ sigil.time }}</td>
                  <td class="border border-slate-100">
                    <input type="text" class="text-gray-900 w-full" v-model="sigil.first" />
                  </td>
                  <td class="border border-slate-100">
                    <input type="text" class="text-gray-900 w-full" v-model="sigil.second" />
                  </td>
                </tr>
              </table>
              <table class="w-full table border-collapse border border-slate-100">
                <tr>
                  <td class="border border-slate-100 text-center px-4 py-2">Time</td>
                  <td class="border border-slate-100 text-center px-4 py-2">First Support</td>
                  <td class="border border-slate-100 text-center px-4 py-2">Second Support</td>
                </tr>
                <tr v-for="support in build.supports" :key="support.time">
                  <td class="border border-slate-100 text-center px-4 py-2">{{ support.time }}</td>
                  <td class="border border-slate-100">
                    <input type="text" class="text-gray-900 w-full" v-model="support.first" />
                  </td>
                  <td class="border border-slate-100">
                    <input type="text" class="text-gray-900 w-full" v-model="support.second" />
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <div>
                <div class="flex w-full items-center space-x-4">
                  <div class="flex flex-col space-y-2">
                    <span>Exclusive signet</span>
                  </div>
                </div>
                <div class="pt-2 pb-4">
                  <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-slate-800 px-4 py-2 text-left text-sm font-medium hover:bg-slate-600 focus:outline-none">
                      {{ open ? "Hide table" : "Show table" }}
                      <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-white" />
                    </DisclosureButton>
                    <DisclosurePanel>
                      <table class="table w-full border border-slate-100 border-collapse">
                        <thead>
                          <tr>
                            <th colspan="2" class="border border-slate-100 text-center py-2">Name</th>
                            <th class="border border-slate-100 text-center py-2">Priority</th>
                          </tr>
                        </thead>
                        <Draggable tag="tbody" :list="build.exclusives" handle=".exclusives" item-key="name"
                          class="border border-green-500">
                          <template #item="{ element }">
                            <tr>
                              <td class="exclusives border border-slate-100 p-3">
                                <Bars3Icon class="w-6 h-6 text-white" />
                              </td>
                              <td class="border border-slate-100">
                                <div class="flex flex-col w-full space-y-1 px-2 py-1">
                                  <span class="text-md font-semibold underline">{{ element.name }}</span>
                                  <span>{{ element.description }}</span>
                                </div>
                              </td>
                              <td class="border border-slate-100">
                                <input type="text" class="text-gray-900 h-full" v-model="element.priority" />
                              </td>
                            </tr>
                          </template>
                        </Draggable>
                      </table>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
              <div v-for="(signet, idx) in build.signets" :key="idx">
                <div class="flex w-full items-center space-x-4">
                  <div class="flex flex-col space-y-2">
                    <span>Signet</span>
                    <Listbox v-model="signet.name" class="w-72">
                      <div class="relative mt-1">
                        <ListboxButton
                          class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span class="block truncate text-gray-900">{{ signet.name }}</span>
                          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </ListboxButton>

                        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                          leave-to-class="opacity-0">
                          <ListboxOptions
                            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-40">
                            <ListboxOption v-slot="{ active, selected }" v-for="flamechaser in flamechasers"
                              :key="flamechaser.name" :value="flamechaser.name" as="template">
                              <li :class="[
                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-10 pr-4',
                              ]">
                                <span :class="[
                                  selected ? 'font-medium' : 'font-normal',
                                  'block truncate',
                                ]">{{ flamechaser.name }}</span>
                                <span v-if="selected"
                                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                    <div class="flex w-full">
                      <button type="button" @click="removeAt(key, idx)"
                        class="bg-red-500 rounded-l-lg w-full py-2 px-4 hover:bg-red-400">Remove
                        Signet</button>
                      <button type="button" class="rounded-r-lg w-full bg-blue-600 py-2 px-4 hover:bg-blue-500"
                        @click="resetSignets(key, idx)">Refresh Signet</button>
                    </div>
                  </div>
                  <div class="flex flex-col w-full">
                    <span>Useful information (Optional)</span>
                    <textarea class="text-gray-900 w-full resize-none" v-model="signet.informations" />
                  </div>
                </div>
                <div class="pt-2 pb-4">
                  <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                      class="flex w-full justify-between rounded-lg bg-slate-800 px-4 py-2 text-left text-sm font-medium hover:bg-slate-600 focus:outline-none">
                      {{ open ? "Hide table" : "Show table" }}
                      <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-white" />
                    </DisclosureButton>
                    <DisclosurePanel>
                      <table class="table w-full border border-slate-100 border-collapse">
                        <thead>
                          <tr>
                            <th colspan="2" class="border border-slate-100 text-center py-2">Name</th>
                            <th colspan="2" class="border border-slate-100 text-center py-2">Priority</th>
                          </tr>
                        </thead>
                        <Draggable tag="tbody" :list="signet.lists" handle=".handle" item-key="name"
                          class="border border-green-500">
                          <template #item="{ element, index }">
                            <tr>
                              <td class="handle border border-slate-100 p-3">
                                <Bars3Icon class="w-6 h-6 text-white" />
                              </td>
                              <td class="border border-slate-100">
                                <div class="flex flex-col w-full space-y-1 px-2 py-1">
                                  <span class="text-md font-semibold underline">{{ element.name }}</span>
                                  <span>{{ element.description }}</span>
                                </div>
                              </td>
                              <td class="border border-slate-100">
                                <input type="text" class="text-gray-900 h-full" v-model="element.priority" />
                              </td>
                              <td class="border border-slate-100">
                                <button class="p-2" type="button" @click="removeAt(key, idx, index)">
                                  <XMarkIcon class="w-6 h-6" />
                                </button>
                              </td>
                            </tr>
                          </template>
                        </Draggable>
                      </table>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
              <button @click="addSignet(key)" type="button"
                class="bg-blue-500 rounded flex pl-2 pr-4 py-2 items-center">
                <PlusIcon class="w-6 h-6" /> Add Signets
              </button>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <button @click="removeAt(key)" class="rounded px-4 text-sm bg-slate-700 hover:bg-slate-500"
          type="button">Remove</button>
      </div>
      <button type="submit" class="px-4 py-2 rounded bg-slate-700 hover:bg-slate-500 mt-4">Submit</button>
    </form>
  </Admin>
</template>