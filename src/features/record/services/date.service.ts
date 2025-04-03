import { getDateUrl } from '@/shared/config/api.config'
import {
	requestClassic,
	requestWithAuth
} from '@/shared/services/api/request.api'
import type {
	IResponseGetDates,
	IResponseGetMasterDates
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
	}
}
