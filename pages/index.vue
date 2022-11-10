<template>
    <h1>elysian realm</h1>
    <SearchBar />
    <div v-for="i in 10">
        <Card :i="i" />
    </div>
</template>