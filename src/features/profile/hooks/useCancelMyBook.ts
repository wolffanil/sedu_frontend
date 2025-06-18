import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'
import { BookService } from '@/shared/services/book.service'
import type { IMyBook } from '@/shared/types/book.interface'
import type { IUser } from '@/shared/types/user.interface'
import { notification } from '@/shared/utils/notification'

export function useCancelMyBook(bookId: string) {
	const queryClient = useQueryClient()

	const { setUser } = useAuth()

	const { mutateAsync: cancelBook, isPending: isCancelingBook } = useMutation(
		{
			mutationKey: [MUTATION_KEYS.CANCEL_BOOK],
			mutationFn: () => BookService.delete(bookId),
			onSuccess: () => {
				const books = queryClient.getQueryData([
					QUERY_KEYS.AUTH,
					QUERY_KEYS.GET_MY_BOOKS
				]) as IMyBook[]

				const currentBook = books?.find(b => b.id === bookId)

				if (currentBook?.isActiveBonuses) {
					const precent =
						Number(currentBook?.time.date.service.procedure.price) *
						0.1

					setUser(
						u =>
							({
								...u,
								bonuses: (u?.bonuses || 0) + precent
							}) as IUser
					)
				}

				queryClient.setQueryData(
					[QUERY_KEYS.AUTH, QUERY_KEYS.GET_MY_BOOKS],
					(books: IMyBook[]) => {
						return books.filter(book => book.id !== bookId)
					}
				),
					notification({
						type: 'success',
						message: 'Бронирование успешно отменено'
					})
			},
			onError: (error: any) => {
				const errorMessage = getErrorMessage(error)

				notification({
					type: 'error',
					//@ts-ignore
					message: errorMessage?.error
				})
			}
		}
	)

	return useMemo(
		() => ({
			cancelBook,
			isCancelingBook
		}),
		[cancelBook, isCancelingBook]
	)
}
