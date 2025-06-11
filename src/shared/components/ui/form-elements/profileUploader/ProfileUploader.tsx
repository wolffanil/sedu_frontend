'use client'

import { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import { convertFileToUrl } from '@/shared/utils/convert-file-to-url'
import { getMediaSource } from '@/shared/utils/get-media-source'

import { IProfileUploader } from './profileUploader.interface'

const ProfileUploader = ({
	fieldChange,
	mediaUrl,
	disabled
}: IProfileUploader) => {
	const [file, setFile] = useState<File[]>([])
	const [fileUrl, setFileUrl] = useState<string>(mediaUrl)

	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			setFile(acceptedFiles)
			fieldChange(acceptedFiles)
			setFileUrl(convertFileToUrl(acceptedFiles[0]))
		},
		[file]
	)

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			'image/*': ['.gif', '.jpeg', '.jpg', '.webp']
		}
	})

	return (
		<div {...getRootProps()}>
			<input
				{...getInputProps()}
				className='cursor-pointer'
				disabled={disabled}
				accept='image/gif, image/jpeg, image/webp, image/jpeg'
			/>

			<div className='flex cursor-pointer flex-col items-center gap-y-[15px]'>
				<img
					src={
						fileUrl?.split('/')?.includes('photos')
							? getMediaSource(fileUrl)
							: fileUrl
					}
					alt='image'
					className='h-[442px] w-[442px] rounded-[25px] object-cover object-top'
				/>
				{!disabled ? (
					<p className='font-cormorant_sc_medium text-[25px] text-black'>
						Изменить фотографию профиля
					</p>
				) : null}
			</div>
		</div>
	)
}

export default ProfileUploader
