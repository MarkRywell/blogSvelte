import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'primary': '#53a7d6',
				'lightPrimary': '#a3d7f6',
				'secondary': '#9bcbad'
			}
		},
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
