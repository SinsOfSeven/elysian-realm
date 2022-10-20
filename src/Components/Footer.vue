<template>
  <div class="w-full bg-slate-700 h-full text-sm px-8 flex flex-col md:flex-row md:space-x-6 lg:space-x-8 py-4">
    <router-link class="text-gray-400 hover:text-white hover:underline w-full md:w-auto text-center py-3 text-base" to="/about">About</router-link>
    <router-link class="text-gray-400 hover:text-white hover:underline w-full md:w-auto text-center py-3 text-base" to="/credits">Credits</router-link>
    <router-link class="text-gray-400 hover:text-white hover:underline w-full md:w-auto text-center py-3 text-base" to="/submit-build">Submit build</router-link>
  </div>
  <div class="w-full bg-slate-800 flex flex-col md:flex-row justify-center py-4 items-center space-y-4 md:space-y-0 md:space-x-4">
    <span class="text-white">Made with brain <br class="block md:hidden" /> from <a class="underline hover:text-blue-400 hover:font-semibold" target="_blank" href="https://github.com/localhousee">Localhousee</a></span>
    <a href='https://ko-fi.com/Q5Q4FFYVW' target='_blank'><img height='36' style='border:0px;height:36px;'
        src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
  </div>
</template>