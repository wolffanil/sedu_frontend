import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { BookService } from '@/shared/services/book.service'
import { IMyBook } from '@/shared/types/book.interface'
import type { serivceType } from '@/shared/types/procedure.type'

import type { bookType } from '../components/user/book.type'

export function useGetMyBooks(type: bookType) {
	const { isAuth } = useAuth()
	const router = useRouter()

	const handleSetSearchParams = (
		procedureId: string,
		serviceType: serivceType
	) => {
		router.push(PUBLIC_URL.record(serviceType, procedureId))
	}

	const { data: booksFeture, isLoading: isLoadingBooksFeture } = useQuery({
		queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_MY_BOOKS],
		queryFn: () => BookService.getMy(),
		staleTime: 5 * 60 * 1000,
		enabled: isAuth && type === 'feture'
	})

	const { data: booksLast, isLoading: isLoadingBooksLast } = useQuery({
		queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_MY_LAST_BOOKS],
		queryFn: () => BookService.getMyLast(),
		staleTime: 5 * 60 * 1000,
		enabled: isAuth && type === 'last',
		select: data =>
			data.map(book => ({
				...book,
				record: () =>
					handleSetSearchParams(
						book.time.date.service.procedure.id,
						book.time.date.service.procedure.service
					)
			}))
	})

	if (type === 'feture') {
		return {
			books: booksFeture,
			isLoadingBooks: isLoadingBooksFeture
		}
	}

	return {
		books: booksLast,
		isLoadingBooks: isLoadingBooksLast
	}
}
