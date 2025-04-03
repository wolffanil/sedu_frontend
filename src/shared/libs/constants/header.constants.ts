import { PUBLIC_URL } from '@/shared/config/url.config'

export const HEADER_LINKS = [
	{
		title: 'О нас',
		link: PUBLIC_URL.aboutUs()
	},
	{
		title: 'Услуги',
		link: PUBLIC_URL.record()
	},
	{
		title: 'Отзывы',
		link: PUBLIC_URL.reviews()
	}
]
