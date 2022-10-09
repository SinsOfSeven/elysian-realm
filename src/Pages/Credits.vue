<script setup lang="ts">
import Guest from '@/Layouts/Guest.vue';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
</script>
<template>
  <Guest>
    <router-link class="absolute top-4 left-8 underline text-gray-300 hover:text-white" to="/">
      <div class="flex w-full items-center">
        <ArrowLeftIcon class="h-4 w-4 mr-2" /> Back to home page
      </div>
    </router-link>
    <article class="prose prose-invert w-full mx-auto max-w-screen-md py-16">
      <h1>Credits</h1>
      <p>Basically, all of builds is from <a class="text-gray-300 hover:text-white" target="_blank"
          href="https://butteryrafa.github.io/hi3er">this website</a>. Make sure to check that page for details who
        contribute this and that</p>
      <p>This page contains a lot of links (i mean <b>A LOT</b>) of resource for building this website</p>
      <ul>
        <li>Frontend: <a class="text-gray-300 hover:text-white" href="https://vuejs.org" target="_blank"
            rel="noopener noreferrer">VueJS</a> (found it easier than React)</li>
        <li>CSS Framework: <a class="text-gray-300 hover:text-white" href="https://tailwindcss.com" target="_blank"
            rel="noopener noreferrer">Tailwind CSS</a> (design with freedom and won't back to Bootstrap)</li>
        <li>Backend: <a class="text-gray-300 hover:text-white" href="https://supabase.com" target="_blank"
            rel="noopener noreferrer">Supabase</a> (Firebase alternative which also has Auth, Database, Cloud Storage,
          and many more)</li>
        <li>Valkyrie image: <a class="text-gray-300 hover:text-white" href="https://pixiv.net" target="_blank"
            rel="noopener noreferrer">Pixiv</a>, Honkai impact Official <a class="text-gray-300 hover:text-white" href="https://honkaiimpact3.hoyoverse.com/global/en-us/news" target="_blank"
              rel="noopener noreferrer">News</a>, <a class="text-gray-300 hover:text-white" href="https://twitter.com/HonkaiImpact3rd" target="_blank"
                rel="noopener noreferrer">Twitter</a>, <a class="text-gray-300 hover:text-white" href="https://www.facebook.com/HonkaiImpact3rd" target="_blank"
                  rel="noopener noreferrer">Facebook</a>, and <a class="text-gray-300 hover:text-white" href="https://www.bilibili.com" target="_blank"
                    rel="noopener noreferrer">Bilibili</a></li>
        <li>Web Design: <a class="text-gray-300 hover:text-white" href="https://leagueoflegends.com" target="_blank"
            rel="noopener noreferrer">League of Legends</a> (fun fact i played once and quit this game)</li>
        <li>Valkyrie type image: <a class="text-gray-300 hover:text-white"
            href="https://honkaiimpact3.hoyoverse.com/global/en-us/news/13843" target="_blank"
            rel="noopener noreferrer">Honkai Impact Official News</a></li>
        <li>Video platform: <a class="text-gray-300 hover:text-white" href="https://youtube.com" target="_blank"
            rel="noopener noreferrer">Youtube</a> (Yeah, this website again)</li>
        <li>Hosting service: <a class="text-gray-300 hover:text-white" href="https://vercel.com" target="_blank"
            rel="noopener noreferrer">Vercel</a> (Good for Serverless App)</li>
        <li>Code base: <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a> (website
          repository <a href="https://github.com/localhousee/elysian-realm" target="_blank"
            rel="noopener noreferrer">here</a>)</li>
      </ul>
    </article>
  </Guest>
</template>