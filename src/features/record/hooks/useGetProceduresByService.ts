import { useSearchParams } from 'next/navigation'

import { useGetGoods } from '@/features/main/hooks/useGetGoods'

export const useGetProceduresByService = () => {
	const searchParams = useSearchParams()

	const sType = searchParams.get('s-type')?.toString() || ''

	//@ts-ignore
	const { procedures, isLoadingProcedure } = useGetGoods(sType)

	return {
		procedures,
		isLoadingProcedure,
		sType
	}
}
