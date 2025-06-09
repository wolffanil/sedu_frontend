'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

import { useGetTimes } from '@/shared/hooks/useGetTimes'
import { type IDate } from '@/shared/types/dates.interface'
import { type ITime } from '@/shared/types/time.interface'

import Modal from '../Modal'
import ModelWrapper from '../ModelWrapper'

import ButtonActions from './ButtonActions'
import DateWrapper from './DateWrapper'
import TimeWrapper from './TimeWrapper'
import { ConfirmRecordModel } from './models'
import { type TDatePicker } from './type-date.type'

interface DatePickerProps {
	type: TDatePicker
	dates: IDate[] | undefined
}

function DatePicker({ type, dates }: DatePickerProps) {
	const [dateTime, setDateTime] = useState<string | undefined>(undefined)

	const [selectDate, setSelectDate] = useState<IDate | undefined>(undefined)

	const [selectTime, setSelectTime] = useState<ITime | undefined>(undefined)

	const dateInputRef = useRef<HTMLInputElement>(null)

	const { isLoadingTimes, times } = useGetTimes(
		type,
		selectDate?.id,
		dateTime
	)

	const handleSelectDate = useCallback((date: IDate) => {
		setDateTime(undefined)
		setSelectDate(date)
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
		<div className='flex w-full flex-col items-center gap-y-[50px]'>
			<div className='flex w-full flex-col items-start gap-y-[35px] rounded-[25px] bg-[#E6EDE6] p-[25px]'>
				<div className='flex w-full items-start gap-x-[15px]'>
					<div className='relative flex h-[59px] w-[150px] items-center justify-center rounded-[25px] bg-white'>
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
							className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform'
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
				<Modal>
					<Modal.Open
						opens='confirm'
						disabled={!selectDate || !selectTime}
					>
						<ButtonActions
							typeAction='record'
							disabled={!selectDate || !selectTime}
						/>
					</Modal.Open>
					<Modal.Window name='confirm'>
						{selectDate && selectTime ? (
							<ConfirmRecordModel
								selectDate={selectDate}
								setSelectTime={setSelectTime}
								selectTime={selectTime}
							/>
						) : (
							<></>
						)}
					</Modal.Window>
				</Modal>
			) : (
				<></>
			)}
		</div>
	)
}

export default DatePicker
