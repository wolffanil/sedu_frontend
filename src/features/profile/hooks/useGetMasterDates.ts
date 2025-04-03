import { useQuery } from '@tanstack/react-query'

import { DateSerice } from '@/features/record/services/date.service'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { RoleUser } from '@/shared/types/user.interface'

export const useGetMasterDates = () => {
	const { user } = useAuth()

	const { data: dates, isLoading: isLoadingDates } = useQuery({
		queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.DATES_MASTER],
		queryFn: () => DateSerice.getMasterDates(),
		staleTime: 5 * 60 * 1000,
		enabled: user?.role === RoleUser.MASTER
	})

	return { dates, isLoadingDates }
}
