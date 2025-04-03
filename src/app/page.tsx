import type { Metadata } from 'next'

import Main from '@/features/main/components/Main'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: {
		absolute: 'Главная'
	},
	alternates: {
		canonical: APP_URL + PUBLIC_URL.main()
	}
}

function Home() {
	return <Main />
}

export default Home
