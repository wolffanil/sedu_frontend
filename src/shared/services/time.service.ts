import { getTimeUrl } from '@/shared/config/api.config'
import {
	requestClassic,
	requestWithAuth
} from '@/shared/services/api/request.api'

import type {
	IResponseGetTimes,
	ITime,
	ITimeCreate,
	ITimeUpdate
} from '../types/time.interface'

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
	},

	async create(data: ITimeCreate) {
		const response = await requestWithAuth<{ time: ITime }>({
			url: getTimeUrl(''),
			method: 'POST',
			data
		})

		return response.time
	},

	async update(timeId: string, data: ITimeUpdate) {
		const response = await requestWithAuth<{ time: ITime }>({
			url: getTimeUrl(`/${timeId}`),
			method: 'PATCH',
			data
		})

		return response.time
	},

	async delete(timeId: string) {
		const response = await requestWithAuth<boolean>({
			url: getTimeUrl(`/${timeId}`),
			method: 'DELETE'
		})

		return response
	}
}
