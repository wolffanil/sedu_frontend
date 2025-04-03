'use client'

import DatePicker from '@/shared/components/ui/date-element/DatePicker'

import { useGetDates } from '../hooks/useGetDates'

function RecordDatePicker() {
	const { dates, isLoadingDates } = useGetDates()

	if (isLoadingDates) return

	return <DatePicker type='record' dates={dates} key='record' />
}

export default RecordDatePicker
