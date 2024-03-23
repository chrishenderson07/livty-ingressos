import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'pink-gradient': 'linear-gradient(180deg, #EB0171 0%, #C5005E 100%)',
				'new-image': 'url("/public/image/background.webp")',
			},

			fontFamily: {
				archivo: 'Archivo',
			},
			fontSize: {
				xs: '0.75rem',
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.5rem',
				'2xl': '2rem',
				'3xl': '2.5rem',
				'4xl': '3rem',
				'5xl': '4rem',
			},
		},
	},
	plugins: [],
}
export default config
