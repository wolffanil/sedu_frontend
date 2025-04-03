import { getUserUrl } from '@/shared/config/api.config'
import { requestClassic } from '@/shared/services/api/request.api'

import type { IMasterResponse } from '../types/team.type'

export const TeamService = {
	async getTeam() {
		const response = await requestClassic<IMasterResponse>({
			url: getUserUrl('/get-masters'),
			method: 'GET'
		})

		return response
	}
}
