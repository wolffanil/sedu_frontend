'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ReactNode, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import AuthProvider from '../contexts/auth/AuthContext'

const Provider = ({ children }: { children: ReactNode }) => {
	const [queryClient] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<QueryClientProvider client={queryClient}>
			<NuqsAdapter>
				<AuthProvider>{children}</AuthProvider>
				<Toaster position='top-center' />
				<ReactQueryDevtools initialIsOpen={false} />
			</NuqsAdapter>
		</QueryClientProvider>
	)
}

export default Provider
