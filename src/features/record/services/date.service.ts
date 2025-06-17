import { getDateUrl } from '@/shared/config/api.config'
import {
	requestClassic,
	requestWithAuth
} from '@/shared/services/api/request.api'
import type {
	ICreateDate,
	IDate,
	IResponseGetDates,
	IResponseGetMasterDates,
	IUpdateDate
} from '@/shared/types/dates.interface'

export const DateSerice = {
	async getDatesByProcedureId(procedureId: string) {
		const response = await requestClassic<IResponseGetDates>({
			url: getDateUrl(`/get-by-procedure/${procedureId}`),
			method: 'GET'
		})

		return response.procedureDates
	},

	async getMasterDates() {
		const response = await requestWithAuth<IResponseGetMasterDates>({
			url: getDateUrl('/get-my'),
			method: 'GET'
		})

		return response.dates
	},

	async create(data: ICreateDate) {
		const response = await requestWithAuth<{ date: IDate }>({
			url: getDateUrl(''),
			method: 'POST',
			data
		})

		return response.date
	},

	async update(data: IUpdateDate) {
		const dateId = data.dateId

		const response = await requestWithAuth<{ date: IDate }>({
			url: getDateUrl(`/${dateId}`),
			method: 'PATCH',
			data
		})

		return response.date
	},

	async delete(dateId: string) {
		const response = await requestWithAuth<boolean>({
			url: getDateUrl(`/${dateId}`),
			method: 'DELETE'
		})

		return response
	}
}
