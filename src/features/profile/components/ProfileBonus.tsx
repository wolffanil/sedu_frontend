'use client'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { RoleUser } from '@/shared/types/user.interface'

function ProfileBonus() {
	const { user, isLoading } = useAuth()

	if (isLoading) return null

	if (user?.role === RoleUser.MASTER || user?.role === RoleUser.MASTER)
		return null

	return (
		<div className='mt-[25px] flex h-[139px] w-full flex-row items-center justify-between rounded-[25px] bg-white px-[50px] font-cormorant_infant_reqular text-[32px] text-black max-sm:mt-[16px] max-sm:h-[66px] max-sm:flex-col max-sm:items-start max-sm:rounded-[15px] max-sm:px-[22px] max-sm:py-[8px] max-sm:text-[20px]'>
			<p>Ваши бонусы: {user?.bonuses}</p>
			<p className='max-sm:text-[16px]'>1 бонус = 1 рубль</p>
		</div>
	)
}

export default ProfileBonus
