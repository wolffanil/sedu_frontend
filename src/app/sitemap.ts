import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export default async function sitemap() {
	return [
		{
			url: APP_URL + PUBLIC_URL.main(),
			lastModified: new Date(),
			priority: 1
		},
		{
			url: APP_URL + PUBLIC_URL.aboutUs(),
			lastModified: new Date(),
			priority: 0.9
		},
		{
			url: APP_URL + PUBLIC_URL.reviews(),
			lastModified: new Date(),
			priority: 0.9
		},
		{
			url: APP_URL + PUBLIC_URL.record(),
			lastModified: new Date(),
			priority: 0.9
		}
	]
}
