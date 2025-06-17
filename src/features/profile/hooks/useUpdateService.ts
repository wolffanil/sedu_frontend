import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import { useMemo } from 'react'
import { type UseFormSetError } from 'react-hook-form'
import toast from 'react-hot-toast'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'

import { type ServiceSchemaType } from '../schemas/service.schema'
import { ServiceService } from '../services/service.service'

export function useUpdateService(
	setError: UseFormSetError<ServiceSchemaType>,
	serviceId: string,
	onCloseModal?: () => void
) {
	const [sMaster] = useQueryState('s-master')

	const queryClient = useQueryClient()

	const { mutateAsync: updateService, isPending: isUpdatingService } =
		useMutation({
			mutationKey: [MUTATION_KEYS.UPDATE_SERVICE],
			mutationFn: (data: ServiceSchemaType) =>
				ServiceService.update(
					{
						...data,
						service: sMaster || '',
						duration: data.duration + ' ч'
					},
					serviceId
				),
			onSuccess: () => {
				toast.success('Услуга успешно обновлена')
				queryClient.refetchQueries({
					queryKey: [QUERY_KEYS.GET_SERVICES_BY_SERVICE_TYPE, sMaster]
				})
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

	const handleUpdateService = async (data: ServiceSchemaType) => {
		await updateService(data)
	}

	return useMemo(
		() => ({ handleUpdateService, isUpdatingService }),
		[handleUpdateService, isUpdatingService]
	)
}
