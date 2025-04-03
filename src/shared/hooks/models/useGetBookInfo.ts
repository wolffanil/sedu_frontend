import { useQuery } from '@tanstack/react-query'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { BookService } from '@/shared/services/book.service'
import { RoleUser } from '@/shared/types/user.interface'

export function useGetBookInfo(timeId: string) {
	const { user, isAuth } = useAuth()

	const { data: book, isLoading: isLoadingBook } = useQuery({
		queryKey: [QUERY_KEYS.GET_BOOK_INFO_BY_TIME_ID, timeId],
		queryFn: () => BookService.getBookForMaster(timeId),
		enabled: isAuth && user?.role === RoleUser.MASTER && !!timeId
	})

	return {
		book,
		isLoadingBook
	}
}
