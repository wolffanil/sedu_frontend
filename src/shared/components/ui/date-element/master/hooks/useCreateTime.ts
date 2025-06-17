import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { type UseFormReset, type UseFormSetError } from 'react-hook-form'
import toast from 'react-hot-toast'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { type TimeSchemaType } from '@/shared/schemas/time/time.schema'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'
import { TimeSerice } from '@/shared/services/time.service'

export function useCreateTime(
	dateId: string,
	reset: UseFormReset<TimeSchemaType>,
	setError: UseFormSetError<TimeSchemaType>
) {
	const queryClient = useQueryClient()

	const { mutateAsync: createTime, isPending: isCreatingTime } = useMutation({
		mutationKey: [MUTATION_KEYS.CREATE_TIME],
		mutationFn: (data: TimeSchemaType) =>
			TimeSerice.create({ ...data, dateId }),
		onSuccess: () => {
			toast.success('Время успешно создана')
			queryClient.refetchQueries({
				queryKey: [QUERY_KEYS.GET_TIMES_BY_DATE_ID, dateId]
			})
			reset()
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

	async function handleCreateTime(data: TimeSchemaType) {
		await createTime(data)
	}

	return useMemo(
		() => ({
			handleCreateTime,
			isCreatingTime
		}),
		[handleCreateTime, isCreatingTime]
	)
}
