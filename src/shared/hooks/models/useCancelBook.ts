import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'
import { BookService } from '@/shared/services/book.service'
import type { IDate } from '@/shared/types/dates.interface'
import type { ITime } from '@/shared/types/time.interface'
import { notification } from '@/shared/utils/notification'

export function useCancelBook(
	bookId: string,
	timeId: string,
	dateId: Pick<IDate, 'id'> | undefined,
	onCloseModal?: () => void
) {
	const queryClient = useQueryClient()

	const { mutateAsync: cancelBook, isPending: isCancelingBook } = useMutation(
		{
			mutationKey: [MUTATION_KEYS.CANCEL_BOOK],
			mutationFn: () => BookService.delete(bookId),
			onSuccess: () => {
				queryClient.setQueryData(
					[QUERY_KEYS.GET_TIMES_BY_DATE_ID, dateId],
					(times: ITime[]) =>
						times?.map(time =>
							time.id === timeId
								? { ...time, isBusy: false }
								: time
						)
				),
					onCloseModal?.()
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
