'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { QUERY_KEYS } from '@/shared/enums/query.keys'

import { ServiceService } from '../services/service.service'
import { IServicesWithUserData } from '../types/service.interface'

export function useGetServices() {
	const { user } = useAuth()
	const searchParams = useSearchParams()

	const sType = searchParams.get('s-master') ?? ''

	const { data: services, isLoading: isLoadingServices } = useQuery({
		queryKey: [QUERY_KEYS.GET_SERVICES_BY_SERVICE_TYPE, sType],
		//@ts-ignore
		queryFn: () => ServiceService.getByService(sType ?? 'НОГТИ'),
		enabled: !!sType,
		staleTime: 5 * 60 * 1000,
		select: data =>
			data.map(
				service =>
					({
						...service,
						user: { name: user?.name, surname: user?.surname }
					}) as IServicesWithUserData
			)
	})

	return { services, isLoadingServices }
}
