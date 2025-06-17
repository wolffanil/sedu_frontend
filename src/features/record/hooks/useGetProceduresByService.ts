import { useQueryState } from 'nuqs'

import { useGetGoods } from '@/features/main/hooks/useGetGoods'

export const useGetProceduresByService = () => {
	const [sType] = useQueryState('s-type')
	const [sMaster] = useQueryState('s-master')

	console.log(sMaster)

	//@ts-ignore
	const { procedures, isLoadingProcedure } = useGetGoods(
		//@ts-ignore
		sType || sMaster || ''
	)

	return {
		procedures,
		isLoadingProcedure,
		sType
	}
}
