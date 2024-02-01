import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			// FOT-Rodin Pro
			// rodin: ["FOT-Rodin Pro", "sans-serif"],
			rodin: ["fot-rodin-pro", "fot-rodin-pron", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			dropShadow: {
				pikminShadow: [
					"-1px 0 0 rgba(0,0,0,0.65)",
					"1px 0 0 rgba(0,0,0,0.65)",
					"0 -1px 0 rgba(0,0,0,0.65)",
					"0 1px 0 rgba(0,0,0,0.65)",
				],
			},
			colors: { starting: "#a4be98", bronze: "#E4A785", silver: "#D3D3D3", gold: "EAC479" },
		},
	},
	plugins: [],
};
export default config;
