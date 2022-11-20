// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: {
		shim: false,
		strict: true,
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image-edge"
	],
	app: {
		pageTransition: { name: "page", mode: "out-in" }
	}
});
