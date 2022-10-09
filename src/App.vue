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
		<div>
			<div v-if="auth.user"><Admin><router-view /></Admin></div>
			<div v-else><router-view /></div>
		</div>
		<template #fallback><Loading/></template>
	</Suspense>
</template>
