import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
			  'midnight-blue': '#1A202C',
			  'steel-gray': '#4A5568',
			  'light-gray': '#E2E8F0',
			  'teal-accent': '#008080',
			  'sky-blue': '#63B3ED',
			  'orange-data': '#ED8936',
			  'red-alert': '#E53E3E',
			  'green-success': '#48BB78',
			  },
		  },
	},

	plugins: [forms, containerQueries]
} satisfies Config;
