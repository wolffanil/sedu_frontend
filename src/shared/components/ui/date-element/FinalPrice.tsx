'use client'

import { type Dispatch, type SetStateAction } from 'react'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import type { ITime } from '@/shared/types/time.interface'

interface FinalPriceProps {
	selectTime: ITime | undefined
	setIsActiveBonusus: Dispatch<SetStateAction<boolean>>
	isActiveBonuses: boolean
}

function FinalPrice({
	selectTime,
	setIsActiveBonusus,
	isActiveBonuses
}: FinalPriceProps) {
	const { user } = useAuth()

	if (!user?.id) return null

	if (!selectTime?.id) return null

	const price = selectTime.date.service.procedure.price
	const percent = price * 0.1

	const isCan = Number(user.bonuses) >= percent
	return (
		<div className='flex w-full flex-col items-start rounded-[15px] bg-[#E6EDE6] p-[16px] max-sm:p-[8px]'>
			<p className='font-cormorant_regular text-[28px] text-[#1D281D] max-sm:text-[20px]'>
				Стоимость: {selectTime.date.service.procedure.price}₽
			</p>
			{isCan ? (
				<>
					<p className='font-cormorant_regular text-[28px] text-[#1D281D] max-sm:text-[20px]'>
						Можно списать бонусов: {percent}₽
					</p>
					<div className='flex items-center gap-x-[10px]'>
						<div className='flex items-center gap-x-[6px] max-sm:gap-x-[2px]'>
							<input
								type='checkbox'
								checked={isActiveBonuses}
								onChange={e =>
									setIsActiveBonusus(e.target.checked)
								}
								className='size-[17px]'
							/>
							<p className='font-cormorant_regular text-[28px] text-[#1D281D] max-sm:text-[20px]'>
								Списываем
							</p>
						</div>
						<div className='flex items-center gap-x-[6px] max-sm:gap-x-[2px]'>
							<input
								type='checkbox'
								checked={!isActiveBonuses ? true : false}
								onChange={() => setIsActiveBonusus(false)}
								className='size-[17px]'
							/>
							<p className='font-cormorant_regular text-[28px] text-[#1D281D] max-sm:text-[20px]'>
								Копим
							</p>
						</div>
					</div>
					<p className='font-cormorant_regular text-[28px] text-[#1D281D] max-sm:text-[20px]'>
						К оплате:{' '}
						{isActiveBonuses ? price - percent + '₽' : price + '₽'}
					</p>
				</>
			) : null}
		</div>
	)
}

export default FinalPrice
