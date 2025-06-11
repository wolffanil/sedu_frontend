'use client'

import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { useAuth } from '@/shared/contexts/auth/AuthContext'

interface AuthLoadingProps {}

function AuthLoading({ children }: PropsWithChildren<AuthLoadingProps>) {
	const { isLoading, isAuth } = useAuth()

	if (isLoading)
		return <div className='fixed inset-0 bg-white bg-opacity-50' />

	if (!isAuth) return redirect('/')

	return children
}

export default AuthLoading
