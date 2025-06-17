'use client'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { RoleUser } from '@/shared/types/user.interface'

function ProfileBonus() {
	const { user, isLoading } = useAuth()

	if (isLoading) return null

	if (user?.role === RoleUser.MASTER || user?.role === RoleUser.MASTER)
		return null

	return (
		<div className='mt-[25px] flex h-[139px] w-full items-center justify-between rounded-[25px] bg-white px-[50px] font-cormorant_infant_reqular text-[32px] text-black'>
			<p>Ваши бонусы: {user?.bonuses}</p>
			<p>1 бонус = 1 рубль</p>
		</div>
	)
}

export default ProfileBonus
