/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				herobg: "url('/herobg.jpeg')",
				pizza: "url('/pizza.jpeg')",
				burger: "url('/burger1.jpeg')",
				drink: "url('/drink.jpeg')",
				taco: "url('/taco.jpeg')",
			},
		},
	},
	plugins: [],
};
