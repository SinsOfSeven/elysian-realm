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
	},
	vite: {
		build: {
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes("node_modules")) {
							return id
								.toString()
								.split("node_modules/")[1]
								.split("/")[0]
								.toString();
						}
					}
				}
			}
		}
	}
});
