import { getProfileUrl } from '../config/api.config'

import { requestWithAuth } from './api/request.api'

export const PhotoService = {
	async uploadProfile(file: FormData) {
		return requestWithAuth<{ photo: string }>({
			url: getProfileUrl('/change-photo'),
			method: 'POST',
			data: file,
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}
}
