import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				cormorant_sc_medium: 'var(--font-cormorantSc-medium)',
				cormorant_regular: 'var(--font-cormorant-regular)',
				raleway_regular: 'var(--font-raleway-regular)',
				cormorant_sc_regular: 'var(--font-cormorantSc-regular)',
				cormorant_infant_reqular:
					'var(--font-cormorant-infant_regular)',
				cormorant_sc_semibold: 'var(--font-cormorant-sc_semibold)'
			},
			colors: {
				green: {
					white: 'var(--white-green)',
					bright: 'var(--bright-green)',
					dark: 'var(--dark-green)'
				}
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
} satisfies Config
