/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#2196F3',
				'secondary': {
					100: '#F29505',
					200: '#888883',
				}
			},
			fontFamily: {
				'body': ['Nunito']
			}
		},		
	},
	plugins: [],
}
