import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			// backgroundImage: {
			// 	'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			// 	'gradient-conic':
			// 		'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			// 	'pink-gradient': 'linear-gradient(180deg, #EB0171 0%, #C5005E 100%)',
			// 	'new-image': 'url("../public/image/background.webp")',
			// 	'maquininha-image': 'url("../public/image/maquininha.webp")',
			// 	'event-image': 'url("../public/image/events.webp")',
			// },

			backgroundImage: () => ({
				'new-image': "url('../public/image/background.webp')",
				'maquininha-image': "url('../public/image/maquininha.webp')",
				'event-image': "url('../public/image/events.webp')",
			}),

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

			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
