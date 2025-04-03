import { getBookUrl } from '../config/api.config'
import {
	IBookInfoResponse,
	IMyBooksResponse,
	type IResponseCreateBook
} from '../types/book.interface'

import { requestWithAuth } from './api/request.api'

export const BookService = {
	async create(timeId: string) {
		const response = await requestWithAuth<IResponseCreateBook>({
			url: getBookUrl(''),
			method: 'POST',
			data: { timeId }
		})

		return response.book
	},

	async delete(bookId: string) {
		const response = await requestWithAuth({
			url: getBookUrl(`/${bookId}`),
			method: 'DELETE'
		})

		return response
	},

	async getBookForMaster(timeId: string) {
		const response = await requestWithAuth<IBookInfoResponse>({
			url: getBookUrl(`/get-by-time/${timeId}`),
			method: 'GET'
		})

		return response.book
	},

	async getMy() {
		const response = await requestWithAuth<IMyBooksResponse>({
			url: getBookUrl('/get-my'),
			method: 'GET'
		})

		return response.books
	},

	async getMyLast() {
		const response = await requestWithAuth<IMyBooksResponse>({
			url: getBookUrl('/get-my-last'),
			method: 'GET'
		})

		return response.books
	}
}
