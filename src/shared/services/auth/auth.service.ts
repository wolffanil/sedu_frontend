import { url } from 'inspector'

import { getAuthUrl } from '@/shared/config/api.config'
import type {
	IAuthResponse,
	ILogin,
	IRegister
} from '@/shared/types/auth.interface'

import { axiosClassic } from '../api/interceptors.api'

import { deleteAccessToken, saveAccessToken } from './auth.helper'

export const AuthService = {
	async register(data: IRegister, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await axiosClassic<IAuthResponse>({
			url: getAuthUrl('/register'),
			method: 'POST',
			headers,
			data
		})

		if (response?.data.accessToken) {
			saveAccessToken({ accessToken: response.data.accessToken })
		}

		return response.data
	},

	async login(data: ILogin, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined
		const response = await axiosClassic<IAuthResponse>({
			url: getAuthUrl('/login'),
			method: 'POST',
			headers,
			data
		})

		if (response?.data.accessToken) {
			saveAccessToken({ accessToken: response.data.accessToken })
		}

		return response.data
	},

	async logout() {
		await axiosClassic({
			url: getAuthUrl('/logout'),
			method: 'POST'
		})
		deleteAccessToken()
	}
}
