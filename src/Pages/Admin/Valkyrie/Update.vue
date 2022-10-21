<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon, ChevronUpDownIcon, CheckIcon, PlusIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { supabase, supabaseValkyrieDatabase, supabaseFlamechaserDatabase, supabaseExclusiveDatabase } from "@/utilities/supabase";
import Draggable from "vuedraggable";
import Loading from "@/Components/Loading.vue";
import Admin from "@/Layouts/Admin.vue";
import { Form, Build, Flamechaser, ValkyrieDetails } from "@/utilities/types";
import { useTitle, useSlug, useRedirectToAdmin } from "@/utilities/helpers";

type Exclusive = { name: string; description: string; };
let exclusive: Exclusive[] = [];
const flamechasers = ref<Flamechaser[]>();
const form = ref<Form>({ name: "", image: "", imageSource: "", position: "", type: "", builds: [], extension: "" });
const loading = ref(true);
const valkyrie = ref<ValkyrieDetails>({ name: "", slug: "", image: "", imageSource: "", position: "", type: "", builds: [], extension: "" });
const image = ref();
const params = useRoute().params;

// @ts-ignore
const changeImage = () => { image.value = event.target.files[0]; image.value = URL.createObjectURL(form.value.image); };

const update = async (): Promise<void> => {
  loading.value = true;

  let extension: string = image.value?.type.split("/").pop();

  // Upload to Bucket
  if (image.value) {
    form.value.image = `/valkyries/${useSlug(form.value.name)}.${extension}`
  } else {
    form.value.image = valkyrie.value.image;
  }

  // Store to DB
  let { data, error } = await supabase.from(supabaseValkyrieDatabase).upsert({
    name: useTitle(form.value.name),
    image: form.value.image,
    imageSource: form.value.imageSource,
    type: form.value.type,
    slug: useSlug(form.value.name),
    builds: JSON.stringify(form.value.builds),
    extension: extension,
    position: form.value.position
  }, { onConflict: 'slug' });

  if (error) { alert(`Oops, error!\nMessage: ${error.message}\nDetails: ${error.details}`); loading.value = false; return; };
  useRedirectToAdmin();
}

const parseValkyrieData = async (): Promise<void> => {
  let { data, error } = await supabase.from(supabaseValkyrieDatabase).select().eq("slug", `${params.name}`).single();
  if (error) throw error;
  valkyrie.value = Object.assign(data, { builds: JSON.parse(data.builds) });
  exclusive = await (await supabase.from(supabaseExclusiveDatabase).select().eq("name", `${valkyrie.value.name}`).single()).body;
  loading.value = false;
  form.value = {
    name: valkyrie.value.name,
    image: "",
    imageSource: valkyrie.value.imageSource,
    position: valkyrie.value.position,
    type: valkyrie.value.type,
    builds: valkyrie.value.builds,
    extension: valkyrie.value.extension,
  };
};

const getFlamechasers = async (): Promise<void> => {
  flamechasers.value = (await supabase.from(supabaseFlamechaserDatabase).select().order("slug")).body!;
};

const addBuilds = (): void => {
  let obj: Build = {
    name: "", ref: "", boss: "", informations: "",
    supports: [{ time: "Early", first: "", second: "" }, { time: "Mid", first: "", second: "" }, { time: "Late", first: "", second: "" }],
    sigils: [{ time: "Early", first: "", second: "" }, { time: "Mid", first: "", second: "" }, { time: "Late", first: "", second: "" }],
    signets: [{
      name: "Choose one", informations: "", lists: [{ name: "", description: "", priority: "" }]
    }],
    // @ts-ignore
    exclusives: JSON.parse(exclusive.signets)
  };

  valkyrie.value.builds.push(obj);
};

const removeAt = (index: number, idx?: number, i?: number): void => {
  if (idx == undefined) valkyrie.value.builds.splice(index, 1)
  else if (i == undefined) valkyrie.value.builds[index].signets.splice(idx, 1)
  else valkyrie.value.builds[index].signets[idx].lists.splice(i, 1)
};

const resetSignets = (index: number, idx: number) => {
  let selectedFlamechaser = flamechasers.value!.find(item => item.name === valkyrie.value?.builds[index].signets[idx].name);
  const signets = [];
  //@ts-ignore
  let selected = JSON.parse(selectedFlamechaser.signets);

  for (const key in selected) {
    for (const iterator of selected[key]) {
      signets.push(Object.assign(iterator, { priority: key }));
    }
  }

  valkyrie.value!.builds[index].signets[idx].lists = signets;
};

const addSignet = (index: number) => valkyrie.value.builds[index].signets.push({ name: "Choose one", informations: "", lists: [] });

onMounted(() => {
  parseValkyrieData();
  getFlamechasers();
});
</script>
<template>
  <Loading v-if="loading" />
  <Admin v-else>
    <form @submit.prevent="update" class="px-8 w-full">
      <div class="flex w-full space-x-4">
        <div class="flex flex-col w-2/3">
          <div class="mt-4 flex flex-col w-full">
            <label for="name" class="text-sm">Valkyrie Name</label>
            <input id="name" type="text" class="text-gray-900 rounded-lg" v-model="form.name">
          </div>
          <div class="mt-4 flex flex-col w-full">
            <label for="imageSource" class="text-sm">Source Image</label>
            <input id="imageSource" type="text" class="text-gray-900 rounded-lg" v-model="form.imageSource">
          </div>
          <div class="mt-4 flex flex-col w-full">
            <label for="type" class="text-sm">Valkyrie Type</label>
            <input id="type" type="text" class="text-gray-900 rounded-lg" v-model="form.type">
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
              <option value="object-center" :selected="form.position === 'object-center'">Center</option>
              <option value="object-top" :selected="form.position === 'object-top'">Top</option>
              <option value="object-left" :selected="form.position === 'object-left'">Left</option>
              <option value="object-right" :selected="form.position === 'object-right'">Right</option>
              <option value="object-bottom" :selected="form.position === 'object-bottom'">Bottom</option>
              <option value="object-left-bottom" :selected="form.position === 'object-left-bottom'">Left Bottom</option>
              <option value="object-left-top" :selected="form.position === 'object-left-top'">Left Top</option>
              <option value="object-right-bottom" :selected="form.position === 'object-right-bottom'">Right Bottom
              </option>
              <option value="object-right-top" :selected="form.position === 'object-right-top'">Right Top</option>
            </select>
          </div>
        </div>
        <div class="relative w-1/3 mt-4">
          <span class="tex-sm">Preview image</span>
          <div
            class="aspect-w-1 aspect-h-1 min-h-12 lg:h-12 w-full flex-col items-center overflow-hidden bg-transparent rounded-xl">
            <img v-if="image"
              class="object-center h-full w-full scale-105 object-cover group-hover:scale-100 lg:h-full lg:w-full"
              :class="form.position" :src="image" />
            <img v-else
              class="object-center h-full w-full scale-105 object-cover group-hover:scale-100 lg:h-full lg:w-full"
              :class="form.position" :src="valkyrie.image" />
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div v-for="(build, key) in valkyrie.builds" :key="key" class="flex w-full space-x-2 space-y-1">
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
                    placeholder="Example: https://youtube.com/watch?v=random" />
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

                          <transition leave-active-class="transition duration-100 ease-in"
                            leave-from-class="opacity-100" leave-to-class="opacity-0">
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
                          <Draggable tag="tbody" :list="signet.lists" handle=".handle" item-key="name" class="border border-green-500">
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
        <div class="flex mt-4 space-x-3">
          <button type="button" class="rounded px-4 py-2 text-sm bg-slate-700 hover:bg-slate-500"
            @click="addBuilds()">Add
            Builds</button>
          <button type="submit" class="px-4 py-2 rounded bg-slate-700 hover:bg-slate-500">Submit</button>
        </div>
      </div>
    </form>
  </Admin>
</template>