'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useRef, useState } from 'react'
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
	const recaptchaRef = useRef<ReCAPTCHA>(null)
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

	async function handleRegister(value: IRegister) {
		try {
			await register({
				data: value,
				recaptcha: recaptchaValue ?? undefined
			})
		} catch {
		} finally {
			recaptchaRef?.current?.reset()
			setRecaptchaValue(null)
		}
	}

	return (
		<form
			className='flex w-full flex-col items-center gap-y-[20px] max-2xl:gap-y-[15px] max-sm:gap-y-[16px]'
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
					ref={recaptchaRef}
					onChange={setRecaptchaValue}
				/>
			</div>
			<p className='mt-[5px] text-center font-cormorant_regular text-[24px] text-black max-2xl:text-[22px] max-sm:mt-[16px] max-sm:text-[16px]'>
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
				className='max-2xl:text-[22px] max-sm:h-[40px] max-sm:min-w-[236px] max-sm:text-[20px]'
			>
				{isLoadingRegister ? 'Загрузка...' : 'Зарегистрироваться'}
			</Button>

			<div className='isCreatingService mt-[15px] flex gap-x-[12px] max-sm:mt-[2px] max-sm:gap-x-[6px]'>
				<input type='checkbox' required className='h-[30px] w-[30px]' />
				<p className='font-cormorant_sc_medium text-[18px] font-medium max-sm:text-[14px]'>
					Я подтверждаю своё согласие на обработку персональных данных
				</p>
			</div>
		</form>
	)
}

export default Register
