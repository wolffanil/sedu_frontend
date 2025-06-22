'use client'

import { type ITime } from '@/shared/types/time.interface'
import { cn } from '@/shared/utils/tw-merge'

import { CarouselItem } from '../../common/CarouselDatePicker'
import Modal from '../Modal'

import { CancelBookModal } from './models'
import type { TDatePicker } from './type-date.type'

interface TimeItemProps {
	type: TDatePicker
	time: ITime
	selectTime: ITime | undefined
	handleSelectTime: (time: ITime) => void
}

function TimeItem({ type, time, selectTime, handleSelectTime }: TimeItemProps) {
	const isRecord = type !== 'master'

	const isSelect = time.id === selectTime?.id

	const isDisabledRecord = isRecord && time.isBusy

	return (
		<CarouselItem className='basis-1/8 max-sm:mx-[8px] max-sm:basis-1/6'>
			<Modal>
				<Modal.Open
					disabled={isRecord || !time?.isBusy}
					opens='bookInfo'
				>
					<li>
						<button
							className={cn(
								'h-[59px] w-[150px] rounded-[25px] bg-white font-cormorant_sc_regular text-[28px] text-black max-sm:h-[40px] max-sm:w-[62px] max-sm:rounded-[15px] max-sm:text-[20px]',
								{
									'border border-black':
										isSelect || (!isRecord && time.isBusy),
									'bg-green-bright': time.isBusy
								}
							)}
							onClick={() => handleSelectTime(time)}
							disabled={isSelect || isDisabledRecord}
						>
							{time.time}
						</button>
					</li>
				</Modal.Open>
				<Modal.Window name='bookInfo'>
					<CancelBookModal time={time} />
				</Modal.Window>
			</Modal>
		</CarouselItem>
	)
}

export default TimeItem
