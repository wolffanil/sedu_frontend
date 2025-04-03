import { type Metadata } from 'next'

import Record from '@/features/record/components/Record'

import { PUBLIC_URL } from '@/shared/config/url.config'
import { APP_URL } from '@/shared/libs/constants/url.constants'

export const metadata: Metadata = {
	title: 'Запись',
	alternates: {
		canonical: APP_URL + PUBLIC_URL.record()
	}
}

function RecordPage() {
	return <Record />
}

export default RecordPage
