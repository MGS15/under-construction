/** @type {import('tailwindcss').Config} */
export default {
  content: [
	'./src/**/*.{html,js,ts,jsx,tsx}',
	'./index.html',
  ],
  theme: {
    extend: {
		animation: {
			typewriter: "typewriter 2s steps(11) forwards"
		},
		fontFamily : {
			'nova-square': ['Nova Square', 'sans-serif'],
		},
		keyframes: {
			typewriter: {
				to: {
				left: "100%"
				}
			}
		}	
	},
  },
  plugins: [],
}

