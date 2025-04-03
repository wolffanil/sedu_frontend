import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'
import { AuthService } from '@/shared/services/auth/auth.service'
import type { ILogin } from '@/shared/types/auth.interface'

export function useLogin(
	setError: UseFormSetError<ILogin>,
	reset: UseFormReset<ILogin>,
	onCloseModal?: () => void
) {
	const { setUser, setIsAuth } = useAuth()

	const { mutateAsync: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: [QUERY_KEYS.LOGIN],
		mutationFn: ({
			data,
			recaptcha
		}: {
			data: ILogin
			recaptcha?: string
		}) => AuthService.login(data, recaptcha),
		onSuccess: data => {
			setUser(data.user)
			setIsAuth(true)
			reset()
			onCloseModal?.()
			toast.success(`Добро пожаловать обратно ${data.user.name}`)
		},
		onError: (error: any) => {
			const errorMessage = getErrorMessage(error)
			if (
				errorMessage.type === 'message' &&
				typeof errorMessage.error === 'string'
			) {
				toast.error(errorMessage.error)
				return
			}

			if (
				errorMessage.type === 'form' &&
				Array.isArray(errorMessage.error)
			) {
				errorMessage.error.forEach(obj => {
					//@ts-ignore
					setError(obj.field, {
						message: obj.message
					})
				})
				return
			}
		}
	})

	return useMemo(
		() => ({
			login,
			isLoadingLogin
		}),
		[login, isLoadingLogin]
	)
}
