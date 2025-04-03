'use client'

import { type ButtonHTMLAttributes } from 'react'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { type IDate } from '@/shared/types/dates.interface'
import { ITime } from '@/shared/types/time.interface'

import Button from '../Button'

import { TDatePicker } from './type-date.type'

interface ButtonActionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	typeAction: TDatePicker
}

function ButtonActions({ typeAction, ...rest }: ButtonActionsProps) {
	const { isAuth } = useAuth()

	const isRecord = typeAction === 'record'

	return (
		<Button className='text-[40px]' {...rest} disabled={!isAuth}>
			{!isAuth
				? 'Вы не вошли в систему'
				: isRecord
					? 'Записаться'
					: 'Редактировать'}
		</Button>
	)
}

export default ButtonActions
