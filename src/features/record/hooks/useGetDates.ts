import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { QUERY_KEYS } from '@/shared/enums/query.keys'

import { DateSerice } from '../services/date.service'

export const useGetDates = () => {
	const [pId] = useQueryState('p-id')

	const { data: dates, isLoading: isLoadingDates } = useQuery({
		queryKey: [QUERY_KEYS.DATES, pId],
		queryFn: () => DateSerice.getDatesByProcedureId(pId ?? ''),
		staleTime: 5 * 60 * 1000,
		enabled: !!pId
	})

	return {
		dates,
		isLoadingDates
	}
}
