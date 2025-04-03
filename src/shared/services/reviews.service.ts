import { getReviewUrl } from '../config/api.config'
import { type IReviewsResponse } from '../types/review.type'

import { requestClassic } from './api/request.api'

export const ReviewService = {
	async get(isSlider: boolean) {
		const response = await requestClassic<IReviewsResponse>({
			url: getReviewUrl(''),
			method: 'GET',
			params: isSlider
				? {
						'is-slider': true
					}
				: null
		})

		return response.reviews
	}
}
