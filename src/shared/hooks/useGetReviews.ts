import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '../enums/query.keys'
import { ReviewService } from '../services/reviews.service'
import { getMediaSource } from '../utils/get-media-source'

export function useGetReviews(isSlider: boolean) {
	const { data: reviews, isLoading: isLoadingReviews } = useQuery({
		queryKey: [QUERY_KEYS.REVIEWS],
		staleTime: 5 * 60 * 1000,
		queryFn: () => ReviewService.get(isSlider),
		select: data =>
			data?.map(review => ({
				...review,
				user: {
					...review.user,
					photo: getMediaSource(review.user.photo)
				}
			}))
	})

	return {
		reviews,
		isLoadingReviews
	}
}
