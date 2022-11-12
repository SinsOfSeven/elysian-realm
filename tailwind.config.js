/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extends: {
			// color: {
			// 	"bio-50": "#f97316",
			// 	"bio-100": "#ea580c",
			// 	"mech-50": "#3b82f6",
			// 	"mech-100": "#2563eb",
			// 	"phy-50": "#ec4899",
			// 	"phy-100": "#db2777",
			// 	"qua-50": "#8b5cf6",
			// 	"qua-100": "#7c3aed",
			// 	"img-50": "#b37c72",
			// 	"img-100": "#8d6057",
			// },
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
	],
};
