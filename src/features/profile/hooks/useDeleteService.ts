import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { notification } from '@/shared/utils/notification'

import { ServiceService } from '../services/service.service'
import { IServicesWithUserData } from '../types/service.interface'

export function useDeleteService({
	procedureId,
	serviceId
}: {
	procedureId: string
	serviceId: string
}) {
	const queryClient = useQueryClient()
	const searchParams = useSearchParams()

	const sType = searchParams.get('s-master')

	const { mutateAsync: deleteService, isPending: isDeletingService } =
		useMutation({
			mutationKey: [MUTATION_KEYS.DELETE_SERVICE_BY_ID],
			mutationFn: () => ServiceService.delete(serviceId),
			onMutate: () => {
				queryClient.setQueryData(
					[QUERY_KEYS.GET_SERVICES_BY_SERVICE_TYPE, sType],
					(services: IServicesWithUserData[]) =>
						services.filter(s => s.id !== serviceId)
				)
			},
			onSuccess: () => {
				queryClient.setQueryData([QUERY_KEYS.DATES, procedureId], [])

				notification({
					type: 'success',
					message: 'Сервис успешно удалён'
				})
			},

			onError() {
				notification({ type: 'error', message: 'Что-то пошло не так' })
			}
		})

	return useMemo(
		() => ({
			deleteService,
			isDeletingService
		}),
		[isDeletingService, deleteService]
	)
}
