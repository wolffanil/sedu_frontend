'use client'

import { useGetTimes } from '@/shared/hooks/useGetTimes'

import TimeItem from './TimeItem'

interface TimesProps {
	dateId: string
}

function Times({ dateId }: TimesProps) {
	const { isLoadingTimes, times } = useGetTimes('master', dateId, undefined)

	return (
		<ul className='flex w-full flex-col items-start gap-y-[18px] overflow-y-scroll'>
			{isLoadingTimes ? (
				<p className='text-center font-cormorant_sc_regular text-[28px] text-black'>
					Загрузка...
				</p>
			) : null}
			{!isLoadingTimes ? (
				times?.length ? (
					times.map(time => (
						<TimeItem time={time} key={time.id} dateId={dateId} />
					))
				) : (
					<p className='text-center font-cormorant_sc_regular text-[28px] text-black'>
						Время на эту дату нету
					</p>
				)
			) : null}
		</ul>
	)
}

export default Times
