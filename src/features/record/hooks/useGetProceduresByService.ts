import { useQueryState } from 'nuqs'

import { useGetGoods } from '@/features/main/hooks/useGetGoods'

export const useGetProceduresByService = () => {
	const [sType] = useQueryState('s-type')

	//@ts-ignore
	const { procedures, isLoadingProcedure } = useGetGoods(sType ?? '')

	return {
		procedures,
		isLoadingProcedure,
		sType
	}
}
