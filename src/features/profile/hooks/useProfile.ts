import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormSetError, UseFormSetValue } from 'react-hook-form'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { MUTATION_KEYS } from '@/shared/enums/mutation.keys'
import { usePhoto } from '@/shared/hooks/usePhoto'
import { getErrorMessage } from '@/shared/services/api/getErrorMessage.api'
import { notification } from '@/shared/utils/notification'

import { IProfileEdit } from '../schemas/profile.schema'
import { ProfileService } from '../services/profile.service'

export const useProfile = (
	setError: UseFormSetError<IProfileEdit>,
	setValue: UseFormSetValue<IProfileEdit>
) => {
	const { uploadProfile, isLoadingPhoto } = usePhoto()
	const { setUser, user } = useAuth()

	const { mutateAsync: updateProfile, isPending: isUpdatingProfile } =
		useMutation({
			mutationKey: [MUTATION_KEYS.PROFILE_EDIT],
			mutationFn: (data: IProfileEdit) =>
				ProfileService.updateProfile(data),
			onSuccess: async data => {
				setUser({ ...data })
				await notification({
					type: 'success',
					message: 'Профиль успешно обновился'
				})
			},
			onError: async (error: any) => {
				const errorMessage = getErrorMessage(error)
				if (
					errorMessage?.type === 'message' &&
					typeof errorMessage?.error === 'string'
				) {
					await notification({
						type: 'error',
						message: errorMessage.error
					})
					return
				}

				if (
					errorMessage?.type === 'form' &&
					Array.isArray(errorMessage?.error)
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

	async function handleUpdateProfile(data: IProfileEdit) {
		if (isUpdatingProfile) return

		if (data?.file?.length) {
			const photo = await uploadProfile(data?.file)

			if (!photo) return
			//@ts-ignore
			setUser({ ...user, photo })
			setValue('file', [])
		}

		await updateProfile(data)
	}

	return useMemo(
		() => ({
			handleUpdateProfile,
			isUpdatingProfile: isUpdatingProfile || isLoadingPhoto
		}),
		[handleUpdateProfile, isUpdatingProfile, isLoadingPhoto]
	)
}
