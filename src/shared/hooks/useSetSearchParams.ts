'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'

export const useSetSearchParams = (isOne?: boolean) => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)

			if (isOne) {
				router.push(pathname + '?' + `${name}=${value}`, {
					scroll: false
				})
			} else {
				router.push(pathname + '?' + params.toString(), {
					scroll: false
				})
			}
		},
		[searchParams]
	)

	return useMemo(
		() => ({
			createQueryString
		}),
		[createQueryString]
	)
}
