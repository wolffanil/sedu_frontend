import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { TimeSerice } from '@/shared/services/time.service'
import type { ITime } from '@/shared/types/time.interface'

export function useDeleteTime(dateId: string, timeId: string) {
	const queryClient = useQueryClient()

	const { mutateAsync: deleteTime, isPending: isDeletingTime } = useMutation({
		mutationKey: [MUTATION_KEYS.DELETE_TIME],
		mutationFn: () => TimeSerice.delete(timeId),
		onSuccess: () => {
			toast.success('Время успешно удаленно')
			queryClient.setQueryData(
				[QUERY_KEYS.GET_TIMES_BY_DATE_ID, dateId],
				(times: ITime[]) => times.filter(time => time.id !== timeId)
			)
		}
	})

	return useMemo(
		() => ({
			deleteTime,
			isDeletingTime
		}),
		[deleteTime, isDeletingTime]
	)
}
