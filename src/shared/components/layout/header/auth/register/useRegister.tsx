import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset, UseFormSetError } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { QUERY_KEYS } from '@/shared/enums/query.keys'
import {
	type IErrorObj,
	getErrorMessage
} from '@/shared/services/api/getErrorMessage.api'
import { AuthService } from '@/shared/services/auth/auth.service'
import type { IRegister } from '@/shared/types/auth.interface'

export function useRegister(
	reset: UseFormReset<IRegister>,
	setError: UseFormSetError<IRegister>,
	onCloseModal?: () => void
) {
	const { setUser, setIsAuth } = useAuth()

	const { mutate: register, isPending: isLoadingRegister } = useMutation({
		mutationKey: [QUERY_KEYS.REGISTER],
		mutationFn: ({
			data,
			recaptcha
		}: {
			data: IRegister
			recaptcha?: string
		}) => AuthService.register(data, recaptcha),
		onSuccess: data => {
			reset()
			setUser(data.user)
			setIsAuth(true)
			onCloseModal?.()
			toast.success('Вы успешно зарегистрировались')
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
			register,
			isLoadingRegister
		}),
		[register, isLoadingRegister]
	)
}
