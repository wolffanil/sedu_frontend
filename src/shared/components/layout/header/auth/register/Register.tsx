'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import Button from '@/shared/components/ui/Button'
import Field from '@/shared/components/ui/form-elements/Field'
import Phone from '@/shared/components/ui/form-elements/Phone'
import { GOOGLE_RECAPTCHA_SITE_KEY } from '@/shared/libs/constants/url.constants'
import { registerSchema } from '@/shared/schemas/auth/register.schema'
import { IRegister } from '@/shared/types/auth.interface'

import { useRegister } from './useRegister'

interface RegisterProps {
	setIsRegister: (val: boolean) => void
	onCloseModal?: () => void
}

function Register({ setIsRegister, onCloseModal }: RegisterProps) {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const { control, handleSubmit, reset, setError } = useForm<IRegister>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const { register, isLoadingRegister } = useRegister(
		reset,
		setError,
		onCloseModal
	)

	const handleSwitchToLogin = useCallback(() => {
		setIsRegister(false)
	}, [])

	function handleRegister(value: IRegister) {
		register({ data: value, recaptcha: recaptchaValue ?? undefined })
	}

	return (
		<form
			className='flex w-full flex-col items-center gap-y-[20px] max-2xl:gap-y-[15px]'
			onSubmit={handleSubmit(handleRegister)}
		>
			<Field<IRegister> control={control} name='name' placeholder='Имя' />
			<Field<IRegister>
				control={control}
				name='surname'
				disabled={isLoadingRegister}
				placeholder='Фамилия'
			/>
			<Phone<IRegister> control={control} name='phone' />

			<Field<IRegister>
				control={control}
				name='email'
				type='email'
				disabled={isLoadingRegister}
				placeholder='Электронная почта'
			/>
			<Field<IRegister>
				control={control}
				name='password'
				placeholder='Пароль'
				disabled={isLoadingRegister}
				type='password'
			/>
			<div className='flex justify-center'>
				<ReCAPTCHA
					sitekey={GOOGLE_RECAPTCHA_SITE_KEY as string}
					onChange={setRecaptchaValue}
				/>
			</div>
			<p className='mt-[5px] text-center font-cormorant_regular text-[24px] text-black max-2xl:text-[22px]'>
				Есть аккаунта?{' '}
				<span
					className='cursor-pointer underline'
					onClick={handleSwitchToLogin}
				>
					Войти
				</span>
			</p>
			<Button
				type='submit'
				disabled={isLoadingRegister || !recaptchaValue}
				className='max-2xl:text-[22px]'
			>
				Зарегистрироваться
			</Button>
		</form>
	)
}

export default Register
