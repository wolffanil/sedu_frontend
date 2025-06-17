import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError } from 'react-hook-form'
import toast from 'react-hot-toast'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'

import { type ServiceSchemaType } from '../schemas/service.schema'
import { ServiceService } from '../services/service.service'

export function useCreateService(
	reset: UseFormReset<ServiceSchemaType>,
	setError: UseFormSetError<ServiceSchemaType>,
	onCloseModal?: () => void
) {
	const queryClient = useQueryClient()
	const [sMaster] = useQueryState('s-master')

	console.log(sMaster)

	const { mutateAsync: createService, isPending: isCreatingService } =
		useMutation({
			mutationKey: [MUTATION_KEYS.CREATE_SERVICE],
			mutationFn: (data: ServiceSchemaType) =>
				ServiceService.create({
					...data,
					service: sMaster || '',
					duration: data.duration + ' ч'
				}),
			onSuccess: () => {
				toast.success('Услуга успешно создана')
				queryClient.refetchQueries({
					queryKey: [QUERY_KEYS.GET_SERVICES_BY_SERVICE_TYPE, sMaster]
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

	const handleCreateService = async (data: ServiceSchemaType) => {
		await createService(data)
	}

	return useMemo(
		() => ({
			handleCreateService,
			isCreatingService
		}),
		[handleCreateService, isCreatingService]
	)
}
