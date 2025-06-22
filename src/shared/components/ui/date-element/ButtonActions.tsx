'use client'

import { type ButtonHTMLAttributes } from 'react'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { RoleUser } from '@/shared/types/user.interface'

import Button from '../Button'

import { TDatePicker } from './type-date.type'

interface ButtonActionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	typeAction: TDatePicker
}

function ButtonActions({ typeAction, ...rest }: ButtonActionsProps) {
	const { isAuth, user } = useAuth()

	const isRecord = typeAction === 'record'

	const isMaster = user?.role === RoleUser.MASTER

	return (
		<Button
			className='text-[40px] max-sm:h-[40px] max-sm:text-[20px]'
			{...rest}
			disabled={!isAuth || isMaster}
		>
			{!isAuth
				? 'Вы не вошли в систему'
				: isMaster
					? 'Мастер не может записываться'
					: isRecord
						? 'Записаться'
						: 'Редактировать'}
		</Button>
	)
}

export default ButtonActions
