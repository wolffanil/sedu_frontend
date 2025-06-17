import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useMemo } from 'react'
import { UseFormSetError } from 'react-hook-form'
import toast from 'react-hot-toast'

import { DateSerice } from '@/features/record/services/date.service'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'
import { IDate } from '@/shared/types/dates.interface'

import { type DateSchemaType } from '../schemas/date.schema'

export function useUpdateDate(
	dateId: string,
	setError: UseFormSetError<DateSchemaType>,
	onCloseModal?: () => void,
	setSelectDate?: Dispatch<SetStateAction<IDate | undefined>>
) {
	const queryClient = useQueryClient()

	const { mutateAsync: updateDate, isPending: isUpdatingDate } = useMutation({
		mutationKey: [MUTATION_KEYS.UPDATE_DATE],
		mutationFn: (data: DateSchemaType) =>
			DateSerice.update({ ...data, dateId }),
		onSuccess: data => {
			toast.success('Дата успешно обновлена')
			queryClient.refetchQueries({
				queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.DATES_MASTER]
			})
			queryClient.removeQueries({
				queryKey: [QUERY_KEYS.DATES],
				exact: false
			})
			setSelectDate?.({ id: data.id, date: data.date })
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

	async function handleUpdateDate(data: DateSchemaType) {
		await updateDate(data)
	}

	return useMemo(
		() => ({
			handleUpdateDate,
			isUpdatingDate
		}),
		[handleUpdateDate, isUpdatingDate]
	)
}
