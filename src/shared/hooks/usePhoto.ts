import { useMemo, useState } from 'react'

import { getErrorMessage } from '../services/api/getErrorMessage.api'
import { PhotoService } from '../services/photo.service'

export const usePhoto = () => {
	const [isLoadingPhoto, setIsLoadingPhoto] = useState(false)

	const uploadProfile = async (file: File[]) => {
		if (!file) return

		const formData = new FormData()
		formData.append('photo', file[0])

		setIsLoadingPhoto(true)

		try {
			const { photo } = await PhotoService.uploadProfile(formData)

			return photo
		} catch (error) {
			const { toast } = await import('react-hot-toast')

			const errorMessage = getErrorMessage(error)

			toast.error(errorMessage.error as string)
		} finally {
			setIsLoadingPhoto(false)
		}

		return
	}

	return useMemo(
		() => ({
			uploadProfile,
			isLoadingPhoto
		}),
		[uploadProfile, isLoadingPhoto]
	)
}
