/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				pizza: "url('/pizza.jpeg')",
				burger: "url('/burger.jpeg')",
				drink: "url('/drink.jpeg')",
				pancake: "url('/pancake.jpeg')",
			},
		},
	},
	plugins: [],
};
