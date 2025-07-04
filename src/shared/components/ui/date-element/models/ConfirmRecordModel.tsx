'use client'

import { Dispatch, SetStateAction } from 'react'

import { useConfirmRecord } from '@/shared/hooks/models/useConfirmRecord'
import { type IDate } from '@/shared/types/dates.interface'
import { type ITime } from '@/shared/types/time.interface'
import { formatDate } from '@/shared/utils/get-format-date'

import Button from '../../Button'
import ModelWrapper from '../../ModelWrapper'

interface ConfirmRecordModelProps {
	selectDate: IDate
	selectTime: ITime
	setSelectTime: Dispatch<SetStateAction<ITime | undefined>>
	onCloseModal?: () => void
	isActiveBonuses: boolean
	setIsActiveBonusus: Dispatch<SetStateAction<boolean>>
}

function ConfirmRecordModel({
	selectTime,
	selectDate,
	setSelectTime,
	isActiveBonuses,
	setIsActiveBonusus,
	onCloseModal
}: ConfirmRecordModelProps) {
	const { handleCreateBook, isLoadingCreateBook } = useConfirmRecord({
		timeId: selectTime?.id ?? '',
		dateId: selectDate?.id,
		selectTime,
		setSelectTime,
		onCloseModel: onCloseModal,
		isActiveBonuses,
		setIsActiveBonusus
	})

	if (!selectDate || !selectTime) return null

	return (
		<ModelWrapper
			className='min-h-[450px] w-[700px] pb-[30px] max-sm:min-h-[316px] max-sm:w-[360px]'
			onCloseModal={onCloseModal}
		>
			<div className='flex w-full flex-col items-center'>
				<p className='text-center font-cormorant_sc_medium text-[40px] text-black max-sm:mt-[5px] max-sm:text-[20px]'>
					Подтверждение записи
				</p>
				<div className='mt-[20px] w-full gap-x-[10px] text-start font-cormorant_regular text-[32px] text-black max-sm:mt-[16px] max-sm:text-[20px]'>
					<p>Услуга: {selectTime.date.service.procedure.title}</p>
					<p>Дата: {formatDate(selectDate.date)}</p>
					<p>Время: {selectTime.time}</p>
					<p>Адрес: {selectTime.date.service.address}</p>
				</div>

				<Button
					className='mt-[77px] text-[40px] max-sm:mt-[16px] max-sm:h-[40px] max-sm:min-w-[236px]'
					onClick={handleCreateBook}
					disabled={isLoadingCreateBook}
				>
					{isLoadingCreateBook ? 'Загрузка...' : 'Подтвердить'}
				</Button>
			</div>
		</ModelWrapper>
	)
}

export default ConfirmRecordModel
