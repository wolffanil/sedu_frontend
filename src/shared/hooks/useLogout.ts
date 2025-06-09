import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { deleteRefreshCookie } from '../actions/actions.cookie'
import { useAuth } from '../contexts/auth/AuthContext'
import { MUTATION_KEYS } from '../enums/mutation.keys'
import { QUERY_KEYS } from '../enums/query.keys'
import { AuthService } from '../services/auth/auth.service'

export const useLogout = () => {
	const { setUser, setIsAuth } = useAuth()

	const queryClient = useQueryClient()

	const { mutate: logout, isPending: isLogoutLoading } = useMutation({
		mutationKey: [MUTATION_KEYS.LOGOUT],
		mutationFn: () => AuthService.logout(),
		onSettled: () => {
			setUser(null)
			setIsAuth(false)
			queryClient.removeQueries({
				queryKey: [QUERY_KEYS.AUTH],
				exact: false
			})
			deleteRefreshCookie()
		}
	})

	return useMemo(
		() => ({
			logout,
			isLogoutLoading
		}),
		[logout, isLogoutLoading]
	)
}
