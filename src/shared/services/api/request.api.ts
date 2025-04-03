import { AxiosRequestConfig, AxiosResponse } from 'axios'

import { axiosClassic, axiosWithAuth } from './interceptors.api'

export const requestClassic = async <T>(config: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse<T>) => response.data

	return axiosClassic(config).then(onSuccess)
}
export const requestWithAuth = async <T>(config: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse<T>) => response.data

	return axiosWithAuth(config).then(onSuccess)
}
