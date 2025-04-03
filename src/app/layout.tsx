import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'

import Header from '@/shared/components/layout/header/Header'
import {
	SITE_DESCRIPTION,
	SITE_NAME
} from '@/shared/libs/constants/seo.constants'
import Provider from '@/shared/providers/Provider'
import '@/shared/styles/global.css'

const cormorantSc_medium = localFont({
	src: '../../public/fonts/cormorant-sc/CormorantSC-Medium.ttf',
	variable: '--font-cormorantSc-medium'
})

const cormorantSc_regular = localFont({
	src: '../../public/fonts/cormorant-sc/CormorantSC-Regular.ttf',
	variable: '--font-cormorantSc-regular',
	preload: false
})

const cormorant_regular = localFont({
	src: '../../public/fonts/cormorant/Cormorant-Regular.ttf',
	variable: '--font-cormorant-regular'
})

const raleway_regular = localFont({
	src: '../../public/fonts/raleway/Raleway-Regular.ttf',
	variable: '--font-raleway-regular',
	preload: false
})

const Footer = dynamic(() => import('@/shared/components/layout/footer/Footer'))

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${cormorantSc_medium.variable} ${cormorant_regular.variable} ${raleway_regular.variable} ${cormorantSc_regular.variable} bg-gradient-to-b from-white to-[#B2ACA5] pt-[60px] antialiased`}
			>
				<Provider>
					<Header />
					<main className='container min-h-[100vh] w-full'>
						{children}
					</main>
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
