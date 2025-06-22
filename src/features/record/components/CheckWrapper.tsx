'use client'

import { useQueryState } from 'nuqs'
import { type PropsWithChildren } from 'react'

function CheckWrapper({ children }: PropsWithChildren<unknown>) {
	const [serviceType] = useQueryState('s-type')
	const [procedureId] = useQueryState('p-id')

	if (!procedureId || !serviceType)
		return (
			<div className='flex w-full items-center justify-center rounded-[25px] bg-[#E6EDE6] py-[50px] max-sm:rounded-[15px] max-sm:bg-[#9FBCA0] max-sm:p-[8px]'>
				<p className='font-cormorant_regular text-[25px] text-black max-sm:text-[18px] max-sm:text-white'>
					Пожалуйста выберите процедуру и услугу
				</p>
			</div>
		)

	return children
}

export default CheckWrapper
