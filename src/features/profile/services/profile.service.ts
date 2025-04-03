import { getProfileUrl } from '@/shared/config/api.config'
import { requestWithAuth } from '@/shared/services/api/request.api'

import { IProfileEdit } from '../schemas/profile.schema'
import type { IProfileEditResponse } from '../types/profile-edit.type'

export const ProfileService = {
	async updateProfile(data: IProfileEdit) {
		const response = await requestWithAuth<IProfileEditResponse>({
			url: getProfileUrl('/change-info'),
			method: 'PATCH',
			data
		})

		return response.profile
	}
}
