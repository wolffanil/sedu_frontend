'use client'

import { useState } from 'react'

import ModelWrapper from '@/shared/components/ui/ModelWrapper'

import Login from './login/Login'
import Register from './register/Register'

interface WrapperAuthProps {
	onCloseModal?: () => void
}

function WrapperAuth({ onCloseModal }: WrapperAuthProps) {
	const [isRegister, setIsRegister] = useState(false)

	return (
		<ModelWrapper onCloseModal={onCloseModal}>
			<p className='mt-[21px] pb-[20px] text-center font-cormorant_regular text-[44px] text-black max-2xl:text-[40px]'>
				{isRegister ? 'Регистрация' : 'Авторизация'}
			</p>
			{isRegister ? (
				<Register
					setIsRegister={setIsRegister}
					onCloseModal={onCloseModal}
				/>
			) : (
				<Login
					setIsRegister={setIsRegister}
					onCloseModal={onCloseModal}
				/>
			)}
		</ModelWrapper>
	)
}

export default WrapperAuth
