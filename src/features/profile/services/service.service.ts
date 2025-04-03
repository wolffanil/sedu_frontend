import { getServiceUrl } from '@/shared/config/api.config'
import { requestWithAuth } from '@/shared/services/api/request.api'
import type { serivceType } from '@/shared/types/procedure.type'

import type { ISerivceResponse } from '../types/service.interface'

export const ServiceService = {
	async getByService(serviceType: serivceType) {
		const response = await requestWithAuth<ISerivceResponse>({
			url: getServiceUrl(`/get-by-service/${serviceType}`),
			method: 'GET'
		})

		return response.services
	},

	async delete(serviceId: string) {
		const response = await requestWithAuth({
			url: getServiceUrl(`/${serviceId}`),
			method: 'DELETE'
		})

		return response
	}
}
