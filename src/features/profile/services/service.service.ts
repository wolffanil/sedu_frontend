import { getServiceUrl } from '@/shared/config/api.config'
import { requestWithAuth } from '@/shared/services/api/request.api'
import type { serivceType } from '@/shared/types/procedure.type'

import { ServiceSchemaType } from '../schemas/service.schema'
import type {
	ISerivceResponse,
	IService,
	IServiceUpdate
} from '../types/service.interface'

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
	},

	async create(data: IServiceUpdate) {
		console.log(data, 'data')
		const response = await requestWithAuth<{ service: IService }>({
			url: getServiceUrl(''),
			method: 'POST',
			data
		})

		return response.service
	},

	async update(data: IServiceUpdate, serviceId: string) {
		const response = await requestWithAuth<{ service: IService }>({
			url: getServiceUrl(`/${serviceId}`),
			method: 'PATCH',
			data
		})

		return response.service
	}
}
