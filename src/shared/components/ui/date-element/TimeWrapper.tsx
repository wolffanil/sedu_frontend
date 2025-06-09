'use client'

import { type ITime } from '@/shared/types/time.interface'

import {
	CarouselContent,
	CarouselDatePicker,
	CarouselNext,
	CarouselPrevious
} from '../../common/CarouselDatePicker'

import TimeItem from './TimeItem'
import { TDatePicker } from './type-date.type'

interface TimeWrapperProps {
	times: ITime[] | undefined
	type: TDatePicker
	selectTime: ITime | undefined
	handleSelectTime: (time: ITime) => void
	isDateSelect: boolean
}

function TimeWrapper({
	times,
	type,
	selectTime,
	handleSelectTime,
	isDateSelect
}: TimeWrapperProps) {
	return (
		<CarouselDatePicker>
			<div className='flex w-full items-start gap-x-[15px]'>
				<CarouselPrevious />
				<CarouselContent className='w-full'>
					{times?.length ? (
						times.map(time => (
							<TimeItem
								key={time.id}
								time={time}
								type={type}
								selectTime={selectTime}
								handleSelectTime={handleSelectTime}
							/>
						))
					) : (
						<div className='w-full text-center font-cormorant_regular text-[25px] text-black'>
							{isDateSelect
								? 'Нету время на эту дату'
								: 'Выберите дату'}
						</div>
					)}
				</CarouselContent>
				<CarouselNext />
			</div>
		</CarouselDatePicker>
	)
}

export default TimeWrapper
