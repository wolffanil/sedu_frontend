import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError } from 'react-hook-form'
import toast from 'react-hot-toast'

import { DateSerice } from '@/features/record/services/date.service'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'

import { DateSchemaType } from '../schemas/date.schema'

export function useCreateDate(
	serviceId: string,
	reset: UseFormReset<DateSchemaType>,
	setError: UseFormSetError<DateSchemaType>,
	onCloseModal?: () => void
) {
	const queryClient = useQueryClient()

	const { mutateAsync: createDate, isPending: isCreatingDate } = useMutation({
		mutationKey: [MUTATION_KEYS.CREATE_DATE],
		mutationFn: (data: DateSchemaType) =>
			DateSerice.create({ ...data, serviceId }),
		onSuccess: () => {
			toast.success('Дата успешно создана')
			queryClient.refetchQueries({
				queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.DATES_MASTER]
			})
			queryClient.removeQueries({
				queryKey: [QUERY_KEYS.DATES],
				exact: false
			})
			reset()
			onCloseModal?.()
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

	async function handleCreateDate(data: DateSchemaType) {
		await createDate(data)
	}

	return useMemo(
		() => ({
			handleCreateDate,
			isCreatingDate
		}),
		[handleCreateDate, isCreatingDate]
	)
}
