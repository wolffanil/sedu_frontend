'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TimeSchemaType, timeSchema } from '@/shared/schemas/time/time.schema'

import Button from '../../Button'
import Field from '../../form-elements/Field'

import { useCreateTime } from './hooks/useCreateTime'

interface CreateTimeFormProps {
	dateId: string
}

function CreateTimeForm({ dateId }: CreateTimeFormProps) {
	const { control, reset, handleSubmit, setError } = useForm({
		resolver: zodResolver(timeSchema)
	})

	const { handleCreateTime, isCreatingTime } = useCreateTime(
		dateId,
		reset,
		setError
	)

	return (
		<form
			onSubmit={handleSubmit(handleCreateTime)}
			className='mr-auto flex items-start gap-x-[44px]'
		>
			<Field<TimeSchemaType>
				control={control}
				name='time'
				disabled={isCreatingTime}
				placeholder='Время'
				classNameContainer='w-[412px]'
				classNameInput='bg-[#f3f3f3] text-[28px] w-[412px] h-[59px]'
				type='time'
			/>
			<Button type='submit' disabled={isCreatingTime}>
				{isCreatingTime ? 'Загрузка...' : 'Добавить место'}
			</Button>
		</form>
	)
}

export default CreateTimeForm
