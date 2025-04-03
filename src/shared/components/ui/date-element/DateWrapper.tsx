'use client'

import { type IDate } from '@/shared/types/dates.interface'

import {
	CarouselContent,
	CarouselDatePicker,
	CarouselNext,
	CarouselPrevious
} from '../../common/CarouselDatePicker'

import DateItem from './DateItem'
import { TDatePicker } from './type-date.type'

interface DateWrapperProps {
	dates: IDate[] | undefined
	type: TDatePicker
	selectDate: IDate | undefined
	handleSelectDate: (time: IDate) => void
}

function DateWrapper({
	dates,
	type,
	selectDate,
	handleSelectDate
}: DateWrapperProps) {
	return (
		<CarouselDatePicker>
			<div className='flex w-[1157px] items-start gap-x-[15px]'>
				<CarouselPrevious />
				<CarouselContent className='w-full'>
					{dates?.length ? (
						dates.map(date => (
							<DateItem
								key={date.id}
								date={date}
								type={type}
								selectDate={selectDate}
								handleSelectDate={handleSelectDate}
							/>
						))
					) : (
						<div className='w-full text-center font-cormorant_regular text-[25px] text-black'>
							Нету дат
						</div>
					)}
				</CarouselContent>
				<CarouselNext />
			</div>
		</CarouselDatePicker>
	)
}

export default DateWrapper
