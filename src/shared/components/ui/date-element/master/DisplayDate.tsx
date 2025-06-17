import Image from 'next/image'

import { formatDate } from '@/shared/utils/get-format-date'

interface DisplayDateProps {
	date: string
}

function DisplayDate({ date }: DisplayDateProps) {
	return (
		<div className='flex w-[412px] items-center gap-x-[25px] rounded-[25px] bg-white px-[15px] py-[8px]'>
			<Image
				src='/images/calendar.svg'
				alt='calendar'
				width={43}
				height={41}
				className='h-[41px] w-[43px] object-cover'
			/>

			<p className='font-cormorant_sc_regular text-[28px] text-black'>
				{formatDate(date)}г.
			</p>
		</div>
	)
}

export default DisplayDate
