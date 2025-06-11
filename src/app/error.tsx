'use client'

import { redirect } from 'next/navigation'

function error() {
	return redirect('/')
}

export default error
