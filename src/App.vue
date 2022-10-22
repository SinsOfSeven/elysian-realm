<script setup lang="ts">
import { onMounted } from "vue";
import { supabase } from "@/utilities/supabase";
import { auth } from "@/utilities/auth";
import Loading from "./Components/Loading.vue";
import Admin from "./Layouts/Admin.vue";

onMounted(() => {
	// @ts-ignore
	auth.user = supabase.auth.user();
});

supabase.auth.onAuthStateChange((_, session) => {
	// @ts-ignore
	auth.user = session?.user
});
</script>

<template>
	<Suspense>
		<div class="flex flex-column m-h-screen">
			<template v-if="auth.user"><Admin><router-view /></Admin></template>
			<template v-else><router-view /></template>
		</div>
		<template #fallback><Loading/></template>
	</Suspense>
</template>
