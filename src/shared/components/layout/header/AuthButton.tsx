'use client'

import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { useLogout } from '@/shared/hooks/useLogout'

import Modal from '../../ui/Modal'

import WrapperAuth from './auth/WrapperAuth'

function AuthButton() {
	const { isAuth, isLoading } = useAuth()
	const { logout, isLogoutLoading } = useLogout()

	if (isLoading) return null

	if (isAuth)
		return (
			<div className='ml-auto flex items-center gap-x-[30px]'>
				<Link href={PUBLIC_URL.profile()} className='header__link'>
					Профиль
				</Link>
				<button
					className='header__link ml-auto'
					onClick={() => logout()}
				>
					{isLogoutLoading ? 'Загрузка' : 'Выйти'}
				</button>
			</div>
		)

	return (
		<Modal>
			<Modal.Open opens='auth' className='ml-auto'>
				<div className='header__link'>Войти</div>
			</Modal.Open>
			<Modal.Window name='auth'>
				<WrapperAuth />
			</Modal.Window>
		</Modal>
	)
}

export default AuthButton
