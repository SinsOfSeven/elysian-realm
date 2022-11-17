<template>
    <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="stylesheet" href="https://fonts.googleapis.com" crossorigin="" />
        <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Arima+Madurai&display=swap" />
    </Head>
    <NuxtPage />
</template>

<style>
html {
    font-family: 'Arima Madurai', cursive;
}

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
