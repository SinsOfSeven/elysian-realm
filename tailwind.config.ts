import type { Config } from "tailwindcss";
import tailwindForms from "@tailwindcss/forms";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				"light-yellow": "#F7F6CF",
				turquoise: "#B6D8F2",
				"dark-pink": "#F4CFDF",
				"dark-blue": "#5784BA",
				"sky-blue": "#9AC8EB"
			}
		}
	},
	content: [
		"./components/**/*.{vue,js}",
		"./pages/**/*.vue",
		"./nuxt.config.{js,ts}",
	],
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		tailwindForms, tailwindAspectRatio
	]
};
