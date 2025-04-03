import { PUBLIC_URL } from '@/shared/config/url.config'

export const links = [
	{
		title: 'О нас',
		link: PUBLIC_URL.aboutUs()
	},
	{
		title: 'наша команда',
		link: '#outTeam'
	},
	{
		title: 'Услуги',
		link: PUBLIC_URL.record()
	},
	{
		title: 'отзывы',
		link: PUBLIC_URL.reviews()
	}
]

export const details = [
	{
		title: 'Г.АСТРАХАНЬ, УЛ. САВУШКИНА 6К6',
		icon: '/images/footer/location.svg'
	},
	{
		title: 'РЕЖИМ РАБОТЫ: 10:00 - 21:00',
		icon: '/images/footer/time.svg'
	}
]

export const social = [
	{
		icon: '/images/footer/vk.svg',
		href: ''
	},
	{
		icon: '/images/footer/whatsapp.svg',
		href: ''
	},
	{
		icon: '/images/footer/telegram.svg',
		href: ''
	}
]
