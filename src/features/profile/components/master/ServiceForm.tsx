'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useGetProceduresByService } from '@/features/record/hooks/useGetProceduresByService'

import Button from '@/shared/components/ui/Button'
import ModelWrapper from '@/shared/components/ui/ModelWrapper'
import Field from '@/shared/components/ui/form-elements/Field'
import SelectField from '@/shared/components/ui/form-elements/SelectField'

import { useCreateService } from '../../hooks/useCreateService'
import { useUpdateService } from '../../hooks/useUpdateService'
import { ServiceSchemaType, serviceSchema } from '../../schemas/service.schema'
import type { IService } from '../../types/service.interface'

interface ServiceFormProps {
	onCloseModal?: () => void
	service?: IService
	type: 'create' | 'update'
}

function ServiceForm({ onCloseModal, type, service }: ServiceFormProps) {
	const { control, reset, setError, handleSubmit } = useForm({
		resolver: zodResolver(serviceSchema),
		defaultValues: {
			address: service?.address ? service.address : '',
			procedureId: service?.procedureId ? service.procedureId : '',
			duration: service?.duration
				? service.duration?.replace(/ч/g, '')?.trim()
				: ''
		}
	})

	const { procedures, isLoadingProcedure } = useGetProceduresByService()

	const selectProcudure = procedures?.map(p => ({
		title: p.title,
		value: p.id
	}))

	const { handleCreateService, isCreatingService } = useCreateService(
		reset,
		setError,
		onCloseModal
	)

	const { handleUpdateService, isUpdatingService } = useUpdateService(
		setError,
		service?.id || '',
		onCloseModal
	)

	const isLoading =
		isUpdatingService || isCreatingService || isLoadingProcedure

	return (
		<ModelWrapper
			onCloseModal={onCloseModal}
			className='max-2xl:w-[723px] max-sm:w-[359px]'
		>
			<form
				onSubmit={handleSubmit(
					type === 'create'
						? handleCreateService
						: handleUpdateService
				)}
				className='mt-[21px] flex w-full flex-col items-center max-sm:mt-[2px]'
			>
				<h2 className='text-center font-cormorant_regular text-[48px] text-black max-sm:text-[20px]'>
					{type === 'create' ? 'Добавление' : 'Редактирование'} услуги
				</h2>
				<div className='mt-[50px] flex w-full flex-col items-start gap-y-[20px] max-sm:mt-[16px] max-sm:gap-y-[16px]'>
					<Field<ServiceSchemaType>
						control={control}
						name='address'
						disabled={isLoading}
						placeholder='Адрес'
						classNameInput='input__service'
					/>
					<SelectField
						control={control}
						name='procedureId'
						titleEmpty={
							isLoadingProcedure ? 'Загрузка...' : 'Процедура'
						}
						disabled={isLoading}
						values={selectProcudure || []}
						classNameInput='input__service'
					/>
					<Field
						control={control}
						name='duration'
						disabled={isLoading}
						placeholder='Продолжительность в часах'
						classNameInput='input__service'
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

export default ServiceForm
