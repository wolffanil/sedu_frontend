import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { DateSerice } from '@/features/record/services/date.service'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'

export function useDeleteDate(dateId: string) {
	const queryClient = useQueryClient()

	const { mutateAsync: deleteDate, isPending: isDeletingDate } = useMutation({
		mutationKey: [MUTATION_KEYS.DELETE_DATE],
		mutationFn: () => DateSerice.delete(dateId),
		onSuccess: () => {
			toast.success('Дата успешно удалена')
		},
		onError: (error: any) => {
			const errorMessage = getErrorMessage(error)
			toast.error(errorMessage.error as string)
		},
		onSettled: () => {
			queryClient.refetchQueries({
				queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.DATES_MASTER]
			})
			queryClient.removeQueries({
				queryKey: [QUERY_KEYS.DATES],
				exact: false
			})
		}
	})

	return useMemo(
		() => ({
			deleteDate,
			isDeletingDate
		}),
		[deleteDate, isDeletingDate]
	)
}
