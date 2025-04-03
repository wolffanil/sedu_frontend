import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	env: {
		GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
		NEXT_PUBILC_SERVER_URL: process.env.NEXT_PUBILC_SERVER_URL,
		NEXT_PUBLIC_MEDIA_URL: process.env.NEXT_PUBLIC_MEDIA_URL,
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '2fa11176-bfe2-4695-91fb-209246073e58.selstorage.ru'
			}
		]
	}
}

export default nextConfig
