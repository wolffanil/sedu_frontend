import { type Metadata } from 'next'

import Profile from '@/features/profile/components/Profile'

import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Профиль',
	...NO_INDEX_PAGE
}

async function ReviewsPage() {
	return <Profile />
}

export default ReviewsPage
