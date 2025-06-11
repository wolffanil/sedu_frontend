'use client'

import dynamic from 'next/dynamic'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { RoleUser } from '@/shared/types/user.interface'

import ChoseAction from './master/ChoseAction'

const BookTabs = dynamic(() => import('./user/BookTabs'))

function ProfileActions() {
	const { user, isLoading, isAuth } = useAuth()

	if (isLoading || !isAuth) return null

	if (user?.role === RoleUser.MASTER) return <ChoseAction />

	if (user?.role === RoleUser.USER) return <BookTabs />
}

export default ProfileActions
