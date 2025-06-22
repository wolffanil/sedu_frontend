'use client'

import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { useLogout } from '@/shared/hooks/useLogout'
import { RoleUser } from '@/shared/types/user.interface'
import { cn } from '@/shared/utils/tw-merge'

import Modal from '../../ui/Modal'

import WrapperAuth from './auth/WrapperAuth'

interface AuthButtonProps {
	isModile?: boolean
	handleCloseModal?: () => void
}

function AuthButton({ isModile = false, handleCloseModal }: AuthButtonProps) {
	const { isAuth, isLoading, user } = useAuth()
	const { logout, isLogoutLoading } = useLogout()

	if (isLoading) return null

	if (isAuth)
		return (
			<div
				className={cn(
					'ml-auto flex items-center gap-x-[30px] max-sm:ml-0 max-sm:mt-[5px] max-sm:hidden max-sm:w-full max-sm:flex-col max-sm:gap-x-0 max-sm:gap-y-[14px]',
					{
						'max-sm:flex md:hidden': isModile
					}
				)}
			>
				<Link
					href={
						user?.role === RoleUser.MASTER
							? PUBLIC_URL.profile() + '?s-master=НОГТИ'
							: PUBLIC_URL.profile()
					}
					className='header__link max-sm:min-w-full max-sm:text-center'
				>
					Профиль
				</Link>
				<button
					className='header__link ml-auto max-sm:ml-0 max-sm:min-w-full max-sm:text-center'
					onClick={() => logout()}
				>
					{isLogoutLoading ? 'Загрузка' : 'Выйти'}
				</button>
			</div>
		)

	return (
		<Modal>
			<Modal.Open
				opens='auth'
				className={cn(
					'ml-auto max-sm:ml-0 max-sm:mt-[12px] max-sm:hidden max-sm:w-full max-sm:text-center',
					{
						'max-sm:flex md:hidden': isModile
					}
				)}
			>
				<div
					className='header__link max-sm:min-w-full max-sm:text-center'
					onClick={() => handleCloseModal?.()}
				>
					Войти
				</div>
			</Modal.Open>
			<Modal.Window name='auth'>
				<WrapperAuth />
			</Modal.Window>
		</Modal>
	)
}

export default AuthButton
