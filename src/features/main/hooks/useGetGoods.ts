import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { type serivceType } from '@/shared/types/procedure.type'
import { getMediaSource } from '@/shared/utils/get-media-source'

import { GoodsService } from '../services/goods.service'

export function useGetGoods(serivceType?: serivceType) {
	const router = useRouter()

	const handleSetSearchParams = (procedureId: string) => {
		router.push(PUBLIC_URL.record(serivceType, procedureId))
	}

	const { data: procedures, isLoading: isLoadingProcedure } = useQuery({
		queryKey: [QUERY_KEYS.GOODS, serivceType],
		staleTime: 5 * 60 * 1000,
		queryFn: () => GoodsService.getByService(serivceType || 'НОГТИ'),
		enabled: !!serivceType,
		select: data =>
			data?.map(p => ({
				...p,
				photo: getMediaSource(p.photo),
				search: () => handleSetSearchParams(p.id)
			}))
	})

	return {
		procedures,
		isLoadingProcedure
	}
}
