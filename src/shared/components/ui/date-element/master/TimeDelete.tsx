'use client'

import Image from 'next/image'

import { useDeleteTime } from './hooks/useDeleteTime'

interface TimeDeleteProps {
	dateId: string
	timeId: string
	isUpdatingTime: boolean
}

function TimeDelete({ dateId, timeId, isUpdatingTime }: TimeDeleteProps) {
	const { deleteTime, isDeletingTime } = useDeleteTime(dateId, timeId)

	return (
		<button
			onClick={() => deleteTime()}
			disabled={isDeletingTime || isUpdatingTime}
			type='button'
		>
			<div className='flex items-center justify-center rounded-[10px] bg-green-dark px-[8px] py-[5px]'>
				<Image
					src='/images/delete-white.svg'
					alt='delete'
					unoptimized
					width={38}
					height={34}
					className='min-h-[34px] min-w-[38px] max-sm:min-h-[26px] max-sm:min-w-[28px]'
				/>
			</div>
		</button>
	)
}

export default TimeDelete
