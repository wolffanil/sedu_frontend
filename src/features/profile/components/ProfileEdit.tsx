'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/shared/components/ui/Button'
import FieldProfile from '@/shared/components/ui/form-elements/FieldProfile'
import ProfileUploader from '@/shared/components/ui/form-elements/profileUploader/ProfileUploader'
import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { cn } from '@/shared/utils/tw-merge'

import { useProfile } from '../hooks/useProfile'
import { IProfileEdit, ProfileSchema } from '../schemas/profile.schema'

function ProfileEdit() {
	const { user } = useAuth()

	const [isEdit, setIsEdit] = useState(false)

	const { control, setError, handleSubmit, setValue } = useForm<IProfileEdit>(
		{
			resolver: zodResolver(ProfileSchema),
			defaultValues: {
				name: user?.name,
				surname: user?.surname,
				phone: user?.phone,
				email: user?.email,
				birthday: user?.birthday ? user.birthday?.split('T')[0] : '',
				file: []
			}
		}
	)

	const { handleUpdateProfile, isUpdatingProfile } = useProfile(
		setError,
		setValue
	)

	const disabledEdit = isUpdatingProfile || !isEdit

	return (
		<form
			onSubmit={handleSubmit(handleUpdateProfile)}
			className='flex w-full flex-col items-start gap-y-[40px] rounded-[25px] bg-white px-[75px] py-[75px]'
		>
			<div className='flex w-full items-start'>
				<Controller
					control={control}
					name='file'
					render={({
						field: { onChange },
						formState: { errors }
					}) => (
						<>
							<ProfileUploader
								fieldChange={onChange}
								mediaUrl={user?.photo || ''}
								disabled={disabledEdit}
							/>
							{errors?.file && errors.file?.message && (
								<p
									className={cn(
										'input__message_error mt-[8px]'
									)}
								>
									{errors.file.message}
								</p>
							)}
						</>
					)}
				/>

				<div className='ml-[57px] flex w-[659px] flex-col items-start gap-y-[18px]'>
					<FieldProfile<IProfileEdit>
						control={control}
						name='name'
						disabled={disabledEdit}
					/>
					<FieldProfile<IProfileEdit>
						control={control}
						name='surname'
						disabled={disabledEdit}
					/>
					<FieldProfile<IProfileEdit>
						control={control}
						name='phone'
						disabled={disabledEdit}
					/>
					<FieldProfile<IProfileEdit>
						control={control}
						name='birthday'
						disabled={disabledEdit}
						type='date'
					/>
					<FieldProfile<IProfileEdit>
						control={control}
						name='email'
						disabled={disabledEdit}
						type='email'
					/>
				</div>
				{!isEdit ? (
					<Image
						src='/images/edit-pen.svg'
						unoptimized
						alt='edit'
						className='ml-[31px] block h-[33px] w-[33px]'
						role='button'
						tabIndex={1}
						onClick={() => setIsEdit(true)}
						priority
						width={33}
						height={33}
					/>
				) : null}
			</div>
			{isEdit ? (
				<div className='mx-auto flex items-start gap-x-[30px]'>
					<Button type='submit' disabled={disabledEdit}>
						Сохранить
					</Button>
					<Button
						type='reset'
						disabled={disabledEdit}
						onClick={() => setIsEdit(false)}
					>
						Отмена
					</Button>
				</div>
			) : null}
		</form>
	)
}

export default ProfileEdit
