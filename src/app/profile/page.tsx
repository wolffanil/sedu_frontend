import { type Metadata } from 'next'

import Profile from '@/features/profile/components/Profile'

import AuthLoading from '@/shared/components/ui/AuthLoading'
import { NO_INDEX_PAGE } from '@/shared/libs/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Профиль',
	...NO_INDEX_PAGE
}

async function ReviewsPage() {
	return (
		<AuthLoading>
			<Profile />
		</AuthLoading>
	)
}

export default ReviewsPage
