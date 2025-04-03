import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'
import { BookService } from '@/shared/services/book.service'
import type { IMyBook } from '@/shared/types/book.interface'
import { notification } from '@/shared/utils/notification'

export function useCancelMyBook(bookId: string) {
	const queryClient = useQueryClient()

	const { mutateAsync: cancelBook, isPending: isCancelingBook } = useMutation(
		{
			mutationKey: [MUTATION_KEYS.CANCEL_BOOK],
			mutationFn: () => BookService.delete(bookId),
			onSuccess: () => {
				queryClient.setQueryData(
					[QUERY_KEYS.AUTH, QUERY_KEYS.GET_MY_BOOKS],
					(books: IMyBook[]) =>
						books.filter(book => book.id !== bookId)
				),
					notification({
						type: 'success',
						message: 'Бронирование успешно отмененно'
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
