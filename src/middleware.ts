import {
	type MiddlewareConfig,
	type NextRequest,
	NextResponse
} from 'next/server'

export default function middleware(request: NextRequest) {
	const { url, cookies, nextUrl } = request

	const refreshToken = cookies.get('refreshToken_salon')?.value

	const isProfile = nextUrl.pathname.startsWith('/profile')

	if (!refreshToken?.length && isProfile) {
		return NextResponse.redirect(new URL('/', url))
	}

	return NextResponse.next()
}

export const config: MiddlewareConfig = {
	matcher: ['/profile']
}
