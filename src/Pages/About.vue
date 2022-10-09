<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import Guest from "@/Layouts/Guest.vue";
</script>
<template>
  <Guest>
    <router-link class="absolute top-4 left-4 md:left-8 underline text-gray-300 hover:text-white" to="/">
      <div class="flex w-full items-center"> <ArrowLeftIcon class="h-4 w-4 mr-2" /> Back to home page </div>
    </router-link>
    <article class="prose prose-invert w-full mx-auto py-16 px-4 md:max-w-screen-sm lg:max-w-screen-md">
      <h1>About This Website</h1>
      <h4>Wanna read how is this beginning?</h4>
      <p>
        It all started when I saw <a class="text-gray-300 hover:text-white" target="_blank" href="https://risbi0.github.io/Elysian-Realm/">Risbi's website</a> where he made an ER guide based on the <a target="_blank" href="https://rentry.co/ElysianRealm">Medbae's website</a>. When i saw the good
        design, came the idea to make the same guide but from a different source.
      </p>
      <p>
        This website is completely filled with ER guide content created by Honkai Impact 3rd players. I only
        made designs that were completely inspired by <a class="text-gray-300 hover:text-white" target="_blank" href="https://leagueoflegends.com/">League of Legends</a> (please don't report me).
      </p>
      
      <h4>Ok that's enough, time to FAQ</h4>
      <p>
        - Where did you put the image source? <br/>
        * On every valkyrie page, there is a link pointing to the source of the images, mostly from pixiv
      </p>
      <p>
        - May i submit the ER guide here? <br/>
        * Of course. You can submit your build <router-link class="text-gray-300 hover:text-white" to="submit-build">here</router-link>, and give us time to review it first. Make sure you put details of your build in description. Otherwise, i'll leave it blank or worse, not uploaded. You can check some description examples from a existing guide
      </p>
      <p>
        - May i also submit an image with a source here? <br/>
        * Only i can update image. If your image is <i>good enough</i> then i'll update it. Just create an issue at <a class="text-gray-300 hover:text-white" target="_blank" href="https://github.com/localhousee/elysian-realm/issues">here</a> with this format: <br>
         1. Title: Update [Valkyrie name] image <br/>
         2. Description: [Image Source] <br/>
         <i>I only accept landscape images, cus it fits to desktop and mobile user</i>
      </p>
      <p>
        - I'm a developer and want to add cool features, how do I do that? <br/>
        * The boring step which is creating a new branch, making a pull request, then creating an issue and linking it with the
        pull request you made earlier
      </p>
      <p>
        - Hey i found a bug from this website! Where to report this one? <br />
        * For this one, poke me on discord only (localhousee#0765). I will patch that bug ASAP before someone notice it, thanks :D
      </p>
      <p>
        - I can't find any questions that match the FAQ <br/>
        * poke me on discord (localhousee#0765) or create an <a class="text-gray-300 hover:text-white" target="_blank" href="https://github.com/localhousee/elysian-realm/issues">issue</a> (tbh just use Github features for asking question)
      </p>
      
      <h4>
        I think this is enough for the about page. Enjoy the build from other players!
      </h4>
      
      <span class="prose-none text-sm">(psst help me out from financial crisis)</span>
    </article>
  </Guest>
</template>