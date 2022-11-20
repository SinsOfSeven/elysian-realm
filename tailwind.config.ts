import type { Config } from "tailwindcss";
import tailwindForms from "@tailwindcss/forms";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				"dark-blue": "#1C17E2",
				"dark-violet": "#7214E2",
				"dark-pink": "#AF0EE2",
			},
		},
	},
	content: [
		"./components/**/*.{vue,js}",
		"./pages/**/*.vue",
		"./nuxt.config.{js,ts}",
	],
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [tailwindForms, tailwindAspectRatio],
};
