import type { MetadataRoute } from 'next'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: [
				PUBLIC_URL.main(),
				PUBLIC_URL.aboutUs(),
				PUBLIC_URL.reviews(),
				PUBLIC_URL.record()
			],
			disallow: []
		},
		sitemap: APP_URL + '/sitemap.xml'
	}
}
