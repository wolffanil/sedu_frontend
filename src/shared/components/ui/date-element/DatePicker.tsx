'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useQueryState } from 'nuqs'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useGetTimes } from '@/shared/hooks/useGetTimes'
import { type IDate } from '@/shared/types/dates.interface'
import { type ITime } from '@/shared/types/time.interface'

import Button from '../Button'
import Modal from '../Modal'

import ButtonActions from './ButtonActions'
import DateWrapper from './DateWrapper'
import FinalPrice from './FinalPrice'
import TimeWrapper from './TimeWrapper'
import { ConfirmRecordModel } from './models'
import { type TDatePicker } from './type-date.type'

const WrapperEdit = dynamic(() => import('./master/WrapperEdit'))

interface DatePickerProps {
	type: TDatePicker
	dates: IDate[] | undefined
}

function DatePicker({ type, dates }: DatePickerProps) {
	const [dateTime, setDateTime] = useState<string | undefined>(undefined)

	const [selectDate, setSelectDate] = useState<IDate | undefined>(undefined)

	const [selectTime, setSelectTime] = useState<ITime | undefined>(undefined)

	const [isShowEdit, setIsShowEdit] = useState(false)

	const [pId] = useQueryState('p-id')
	const [sType] = useQueryState('s-type')

	useEffect(() => {
		if (type !== 'master') return
		setIsShowEdit(false)
		setSelectDate(undefined)
		setSelectTime(undefined)
		setDateTime(undefined)
	}, [pId, sType])

	const dateInputRef = useRef<HTMLInputElement>(null)

	const { isLoadingTimes, times } = useGetTimes(
		type,
		selectDate?.id,
		dateTime
	)

	const [isActiveBonuses, setIsActiveBonusus] = useState(false)

	const handleSelectDate = useCallback((date: IDate) => {
		setDateTime(undefined)
		setSelectTime(undefined)
		setSelectDate(date)
	}, [])

	const handleShowEdit = useCallback(() => {
		setIsShowEdit(true)
		setSelectTime(undefined)
		setDateTime(undefined)
	}, [])

	const handleSelectTime = useCallback((time: ITime) => {
		setSelectTime(time)
	}, [])

	const handleShowPicker = useCallback(() => {
		if (dateInputRef?.current) {
			dateInputRef.current.showPicker()
		}
	}, [])

	return (
		<div className='flex w-full flex-col items-center gap-y-[50px] max-sm:gap-y-[16px]'>
			<div
				className={`flex w-full flex-col items-start gap-y-[35px] rounded-[25px] bg-[#E6EDE6] p-[25px] max-sm:gap-y-[10px] max-sm:rounded-[15px] max-sm:p-[8px] ${isShowEdit ? 'hidden' : ''}`}
			>
				<div className='flex w-full items-start gap-x-[15px] max-sm:gap-x-[8px]'>
					<div className='relative flex h-[59px] w-[150px] items-center justify-center rounded-[25px] bg-white max-sm:ml-[6px] max-sm:h-[40px] max-sm:min-w-[62px] max-sm:rounded-[15px]'>
						<input
							ref={dateInputRef}
							type='date'
							value={dateTime ?? ''}
							onChange={e => {
								setSelectDate(undefined)
								setDateTime(e.target.value)
							}}
							className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0'
						/>
						<Image
							src='/images/calendar.svg'
							alt='calendar'
							width={43}
							height={41}
							className='absolute left-1/2 top-1/2 z-10 h-[41px] w-[43px] -translate-x-1/2 -translate-y-1/2 transform max-sm:h-[26px] max-sm:w-[28px]'
							unoptimized
							role='button'
							tabIndex={0}
							onClick={handleShowPicker}
						/>
					</div>
					<DateWrapper
						dates={dates}
						selectDate={selectDate}
						handleSelectDate={handleSelectDate}
						type={type}
					/>
				</div>
				<TimeWrapper
					isDateSelect={!!selectDate}
					type={type}
					selectTime={selectTime}
					handleSelectTime={handleSelectTime}
					times={times}
				/>
			</div>

			{type === 'record' ? (
				<>
					<FinalPrice
						isActiveBonuses={isActiveBonuses}
						selectTime={selectTime}
						setIsActiveBonusus={setIsActiveBonusus}
					/>
					<Modal>
						<Modal.Open
							opens='confirm'
							disabled={!selectDate || !selectTime}
						>
							<ButtonActions
								typeAction='record'
								disabled={!selectDate?.id || !selectTime?.id}
							/>
						</Modal.Open>
						<Modal.Window name='confirm'>
							{selectDate && selectTime ? (
								<ConfirmRecordModel
									selectDate={selectDate}
									setSelectTime={setSelectTime}
									selectTime={selectTime}
									isActiveBonuses={isActiveBonuses}
									setIsActiveBonusus={setIsActiveBonusus}
								/>
							) : (
								<></>
							)}
						</Modal.Window>
					</Modal>
				</>
			) : !isShowEdit ? (
				<Button
					disabled={!selectDate?.id}
					onClick={handleShowEdit}
					className='max-sm:h-[40px] max-sm:min-w-[236px] max-sm:text-[20px]'
				>
					{!selectDate?.id ? 'Выберите дату' : 'Редактировать'}
				</Button>
			) : (
				<WrapperEdit
					setIsShowEdit={setIsShowEdit}
					selectDate={selectDate}
					setSelectDate={setSelectDate}
				/>
			)}
		</div>
	)
}

export default DatePicker
