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
			<div className='max-sm:w- flex w-[1157px] items-start gap-x-[15px] max-sm:min-w-full'>
				<CarouselPrevious className='max-sm:h-[40px] max-sm:w-[62px] max-sm:rounded-[15px]' />
				<CarouselContent>
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
						<div className='w-full text-center font-cormorant_regular text-[25px] text-black max-sm:text-[20px]'>
							Нету дат
						</div>
					)}
				</CarouselContent>
				<CarouselNext className='max-sm:h-[40px] max-sm:w-[62px] max-sm:rounded-[15px]' />
			</div>
		</CarouselDatePicker>
	)
}

export default DateWrapper
