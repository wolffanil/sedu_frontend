'use client'

import { type IDate } from '@/shared/types/dates.interface'
import { getDayAndManth, getWeek } from '@/shared/utils/get-date-and-week'
import { cn } from '@/shared/utils/tw-merge'

import { CarouselItem } from '../../common/CarouselDatePicker'

import { TDatePicker } from './type-date.type'

interface DateItemProps {
	type: TDatePicker
	date: IDate
	selectDate: IDate | undefined
	handleSelectDate: (date: IDate) => void
}

function DateItem({ date, selectDate, handleSelectDate, type }: DateItemProps) {
	const week = getWeek(date.date)
	const monthAndDay = getDayAndManth(date.date)

	const isSelect = date.id === selectDate?.id

	return (
		<CarouselItem className='basis-1/7'>
			<li>
				<button
					className={cn(
						'flex w-[150px] flex-col items-center rounded-[25px] bg-white py-1 font-cormorant_sc_medium text-[28px] text-black',
						{
							'border border-black': isSelect
						}
					)}
					onClick={() => handleSelectDate(date)}
					disabled={isSelect}
				>
					<span className='leading-[25px]'>
						{monthAndDay} <br /> {week}
					</span>
				</button>
			</li>
		</CarouselItem>
	)
}

export default DateItem
