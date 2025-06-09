'use server'

import { cookies } from 'next/headers'

export const deleteRefreshCookie = async () => {
	try {
		const cookiesState = await cookies()

		cookiesState.delete('refreshToken_salon')
	} catch {}
}
