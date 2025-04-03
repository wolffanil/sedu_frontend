import { getProcedureUrl } from '@/shared/config/api.config'
import { requestClassic } from '@/shared/services/api/request.api'
import { type serivceType } from '@/shared/types/procedure.type'

import { type IGoodsResponse } from '../types/goods.type'

export const GoodsService = {
	async getByService(serviceType: serivceType) {
		const response = await requestClassic<IGoodsResponse>({
			url: getProcedureUrl(`/get-by-service/${serviceType}`),
			method: 'GET'
		})

		return response.procuders
	}
}
