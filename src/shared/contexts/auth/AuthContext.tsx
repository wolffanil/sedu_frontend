'use client'

import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState
} from 'react'

import { getNewTokens } from '@/shared/services/api/helper.api'
import {
	deleteAccessToken,
	getAccessToken
} from '@/shared/services/auth/auth.helper'
import type { IUser } from '@/shared/types/user.interface'

import { IContext, TypeUserState } from './auth-context.interface'

export const AuthContext = createContext({} as IContext)

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<TypeUserState>({} as IUser)
	const [isLoading, setIsLoading] = useState(true)
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		const checkAuthCheck = async () => {
			try {
				setIsLoading(true)
				const accessToken = getAccessToken()

				if (accessToken) {
					const userData = await getNewTokens()

					if (!userData?.data?.user?.id) return

					setUser(userData?.data.user || null)
					setIsAuth(true)
				}
			} catch (error) {
			} finally {
				setIsLoading(false)
			}
		}

		if (isAuth) return

		checkAuthCheck?.()
	}, [])

	const logout = useCallback(() => {
		setUser(null)
		setIsAuth(false)
		deleteAccessToken()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				isLoading,
				setIsLoading,
				isAuth,
				setIsAuth,
				logout
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) throw new Error('you use context outside the wrapper')

	return context
}
