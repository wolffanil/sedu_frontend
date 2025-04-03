import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/shared/enums/query.keys'

import { TeamService } from '../services/team.service'

export const useGetTeam = () => {
	const { data: masters, isLoading: isLoadingTeam } = useQuery({
		queryKey: [QUERY_KEYS.TEAM],
		queryFn: () => TeamService.getTeam(),
		staleTime: 5 * 60 * 1000,
		select: data => data.users
	})

	return { masters, isLoadingTeam }
}
