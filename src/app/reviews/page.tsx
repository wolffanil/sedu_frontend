import { type Metadata } from 'next'

import Reviews from '@/features/reviews/Reviews'

import { API_URL, getReviewUrl } from '@/shared/config/api.config'
import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

async function getReviews() {
	const response = await fetch(API_URL + getReviewUrl(''), {
		next: { revalidate: 300 }
	})
	if (!response.ok) {
		throw new Error('Failed to fetch reviews')
	}

	return response.json()
}

export const metadata: Metadata = {
	title: 'Отзывы',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.reviews()
	}
}

async function ReviewsPage() {
	const data = await getReviews()

	return <Reviews reviews={data?.reviews} />
}

export default ReviewsPage
