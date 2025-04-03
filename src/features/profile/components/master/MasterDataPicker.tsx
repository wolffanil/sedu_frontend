'use client'

import DatePicker from '@/shared/components/ui/date-element/DatePicker'

import { useGetMasterDates } from '../../hooks/useGetMasterDates'

function MasterDataPicker() {
	const { dates, isLoadingDates } = useGetMasterDates()

	if (isLoadingDates) return null

	return <DatePicker type='master' dates={dates} key='master' />
}

export default MasterDataPicker
