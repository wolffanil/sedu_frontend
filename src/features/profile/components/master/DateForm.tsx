'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { type Dispatch, type SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/shared/components/ui/Button'
import ModelWrapper from '@/shared/components/ui/ModelWrapper'
import Field from '@/shared/components/ui/form-elements/Field'
import { IDate } from '@/shared/types/dates.interface'

import { useCreateDate } from '../../hooks/useCreateDate'
import { useUpdateDate } from '../../hooks/useUpdateDate'
import { dateSchema } from '../../schemas/date.schema'

interface DateFormProps {
	onCloseModal?: () => void
	date?: IDate
	serviceId?: string
	type: 'create' | 'update'
	setSelectDate?: Dispatch<SetStateAction<IDate | undefined>>
}

function DateForm({
	onCloseModal,
	date,
	type,
	serviceId,
	setSelectDate
}: DateFormProps) {
	const { control, handleSubmit, setError, reset } = useForm({
		resolver: zodResolver(dateSchema),
		defaultValues: {
			//@ts-ignore
			date: date?.date ? date.date.split('T')[0] : ''
		}
	})

	const { handleCreateDate, isCreatingDate } = useCreateDate(
		serviceId || '',
		reset,
		setError,
		onCloseModal
	)

	const { handleUpdateDate, isUpdatingDate } = useUpdateDate(
		date?.id || '',
		setError,
		onCloseModal,
		setSelectDate
	)

	const isLoading = isCreatingDate || isUpdatingDate

	return (
		<ModelWrapper
			onCloseModal={onCloseModal}
			className='min-h-[400px] max-2xl:w-[723px] max-sm:min-h-[200px] max-sm:w-[359px]'
		>
			<form
				onSubmit={handleSubmit(
					type === 'create' ? handleCreateDate : handleUpdateDate
				)}
				className='mt-[21px] flex w-full flex-col items-center max-sm:mt-[1px]'
			>
				<h2 className='text-center font-cormorant_regular text-[48px] text-black max-sm:text-[20px]'>
					{type === 'create' ? 'Добавление' : 'Редактирование'} даты
				</h2>
				<div className='mt-[50px] flex w-full flex-col items-start gap-y-[20px] max-sm:mt-[16px] max-sm:gap-y-[16px]'>
					<Field
						control={control}
						name='date'
						disabled={isLoading}
						placeholder='Дата'
						classNameInput='input__service'
						type='date'
					/>
				</div>

				<Button
					type='submit'
					className='mt-[50px] max-sm:mt-[16px] max-sm:h-[40px] max-sm:min-w-[236px] max-sm:text-[20px]'
					disabled={isLoading}
				>
					{isLoading
						? 'Загрузка...'
						: type === 'create'
							? 'Создать'
							: 'Сохранить'}
				</Button>
			</form>
		</ModelWrapper>
	)
}

export default DateForm
