'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import Button from '@/shared/components/ui/Button'
import Field from '@/shared/components/ui/form-elements/Field'
import { loginSchema } from '@/shared/schemas/auth/login.schema'
import type { ILogin } from '@/shared/types/auth.interface'

import { useLogin } from './useLogin'

interface LoginProps {
	setIsRegister: (val: boolean) => void
	onCloseModal?: () => void
}

function Login({ setIsRegister, onCloseModal }: LoginProps) {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const { control, handleSubmit, reset, setError } = useForm<ILogin>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const { login, isLoadingLogin } = useLogin(setError, reset, onCloseModal)

	const handleSwitchToLogin = useCallback(() => {
		setIsRegister(true)
	}, [])

	function handleLogin(value: ILogin) {
		login({ data: value, recaptcha: recaptchaValue ?? undefined })
	}

	return (
		<form
			className='flex w-full flex-col items-center gap-y-[20px] max-2xl:gap-y-[15px]'
			onSubmit={handleSubmit(handleLogin)}
		>
			<Field<ILogin>
				control={control}
				name='email'
				placeholder='Электронная почта'
				disabled={isLoadingLogin}
			/>

			<Field<ILogin>
				control={control}
				name='password'
				placeholder='Пароль'
				type='password'
				disabled={isLoadingLogin}
			/>

			<div className='flex justify-center'>
				<ReCAPTCHA
					sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
					onChange={setRecaptchaValue}
				/>
			</div>
			<p className='mt-[5px] text-center font-cormorant_regular text-[24px] text-black max-2xl:text-[22px]'>
				Нет аккаунта?{' '}
				<span
					className='cursor-pointer underline'
					onClick={handleSwitchToLogin}
				>
					Зарегистироваться
				</span>
			</p>
			<Button
				type='submit'
				disabled={isLoadingLogin || !recaptchaValue}
				className='max-2xl:text-[22px]'
			>
				{isLoadingLogin ? 'Загрузка...' : 'Войти'}
			</Button>
		</form>
	)
}

export default Login
