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
			<Image
				src='/images/delete.svg'
				alt='delete'
				unoptimized
				width={38}
				height={34}
			/>
		</button>
	)
}

export default TimeDelete
