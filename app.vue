<template>
    <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from {
    opacity: 0;
    transform: translate(50px, 0);
}

.page-leave-to {
    opacity: 0;
    transform: translate(50px, 0);
}
</style>
