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
		extend: {},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio")
	]
};
