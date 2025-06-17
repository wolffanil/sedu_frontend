import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useMemo } from 'react'
import { type UseFormSetError } from 'react-hook-form'
import toast from 'react-hot-toast'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { type TimeSchemaType } from '@/shared/schemas/time/time.schema'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'
import { TimeSerice } from '@/shared/services/time.service'

export function useUpdateTime(
	dateId: string,
	timeId: string,
	setIsEdit: Dispatch<SetStateAction<boolean>>,
	setError: UseFormSetError<TimeSchemaType>
) {
	const queryClient = useQueryClient()

	const { mutateAsync: updateTime, isPending: isUpdatingTime } = useMutation({
		mutationKey: [MUTATION_KEYS.UPDATE_TIME],
		mutationFn: (data: TimeSchemaType) => TimeSerice.update(timeId, data),
		onSuccess: () => {
			toast.success('Время успешно обновлено')
			setIsEdit(false)
			queryClient.refetchQueries({
				queryKey: [QUERY_KEYS.GET_TIMES_BY_DATE_ID, dateId]
			})
		},
		onError: (error: any) => {
			const errorMessage = getErrorMessage(error)
			if (
				errorMessage.type === 'message' &&
				typeof errorMessage.error === 'string'
			) {
				toast.error(errorMessage.error)
				return
			}

			if (
				errorMessage.type === 'form' &&
				Array.isArray(errorMessage.error)
			) {
				errorMessage.error.forEach(obj => {
					//@ts-ignore
					setError(obj.field, {
						message: obj.message
					})
				})
				return
			}
		}
	})

	async function handleUpdateTime(data: TimeSchemaType) {
		await updateTime(data)
	}

	return useMemo(
		() => ({
			handleUpdateTime,
			isUpdatingTime
		}),
		[handleUpdateTime, isUpdatingTime]
	)
}
