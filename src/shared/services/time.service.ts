import { getTimeUrl } from '@/shared/config/api.config'
import { requestClassic } from '@/shared/services/api/request.api'

import { IResponseGetTimes } from '../types/time.interface'

export const TimeSerice = {
	async getTimesByDateId(dateId: string) {
		const response = await requestClassic<IResponseGetTimes>({
			url: getTimeUrl(`/get-by-date/${dateId}`),
			method: 'GET'
		})

		return response.times
	},

	async getTimesByDateTime(dateTime: string) {
		const response = await requestClassic<IResponseGetTimes>({
			url: getTimeUrl(`/get-by-date-time/${dateTime}`),
			method: 'GET'
		})

		return response.times
	}
}
