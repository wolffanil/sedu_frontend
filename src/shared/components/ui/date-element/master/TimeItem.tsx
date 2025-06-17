'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { timeSchema } from '@/shared/schemas/time/time.schema'
import type { ITime } from '@/shared/types/time.interface'

import Button from '../../Button'
import Field from '../../form-elements/Field'

import TimeDelete from './TimeDelete'
import { useUpdateTime } from './hooks/useUpdateTime'

interface TimeItemProps {
	time: ITime
	dateId: string
}

function TimeItem({ time, dateId }: TimeItemProps) {
	const [isEdit, setIsEdit] = useState(false)

	const { handleSubmit, control, setError, setValue } = useForm({
		resolver: zodResolver(timeSchema),
		defaultValues: {
			time: time.time
		}
	})

	useEffect(() => {
		setValue('time', time.time)
	}, [isEdit])

	const { handleUpdateTime, isUpdatingTime } = useUpdateTime(
		dateId,
		time.id,
		setIsEdit,
		setError
	)

	const disabled = isUpdatingTime || !isEdit

	return (
		<li className='min-h-[59px] w-full rounded-[25px] bg-[#f3f3f3] px-[20px] py-[8px]'>
			<form
				onSubmit={handleSubmit(handleUpdateTime)}
				className='flex h-full w-full items-center justify-between gap-x-[10px]'
			>
				<Field
					control={control}
					name='time'
					disabled={disabled}
					classNameInput='text-[28px] bg-[#f3f3f3] px-[30px] outline-[#4F6550]'
					type='time'
				/>
				<div
					className={`flex items-center gap-x-[25px] ${isEdit ? 'gap-x-0' : ''}`}
				>
					{!isEdit ? (
						<button
							disabled={isEdit}
							type='button'
							onClick={() => setIsEdit(true)}
						>
							<Image
								src='/images/edit-pen.svg'
								alt='delete'
								unoptimized
								width={33}
								height={33}
							/>
						</button>
					) : (
						<div className='flex items-center gap-x-[15px]'>
							<Button
								type='submit'
								disabled={isUpdatingTime}
								className='h-[40px] min-w-[150px]'
							>
								{isUpdatingTime ? 'Загрузка...' : 'Сохранить'}
							</Button>
							<Button
								type='button'
								disabled={isUpdatingTime}
								onClick={() => setIsEdit(false)}
								className='h-[40px] min-w-[150px]'
							>
								{isUpdatingTime ? 'Загрузка...' : 'Отменить'}
							</Button>
						</div>
					)}
					<TimeDelete
						dateId={dateId}
						timeId={time.id}
						isUpdatingTime={isUpdatingTime}
					/>
				</div>
			</form>
		</li>
	)
}

export default TimeItem
