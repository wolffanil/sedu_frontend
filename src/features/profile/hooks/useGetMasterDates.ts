import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { DateSerice } from '@/features/record/services/date.service'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { RoleUser } from '@/shared/types/user.interface'

export const useGetMasterDates = () => {
	const { user } = useAuth()
	const [sType] = useQueryState('s-type')
	const [pId] = useQueryState('p-id')

	const { data, isLoading: isLoadingDates } = useQuery({
		queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.DATES_MASTER],
		queryFn: () => DateSerice.getMasterDates(),
		staleTime: 5 * 60 * 1000,
		enabled: user?.role === RoleUser.MASTER
	})

	let dates = data

	if (sType) {
		dates = dates?.filter(date => date?.service?.serviceType === sType)
	}

	if (pId) {
		dates = dates?.filter(date => date?.service?.procedureId === pId)
	}

	return { dates, isLoadingDates }
}
