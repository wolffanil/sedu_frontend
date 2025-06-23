'use client'

import SelectProcedure from '@/features/record/components/SelectProcedure'

import ChoseRecord from '@/shared/components/ui/choseRecord/ChoseRecord'
import DatePicker from '@/shared/components/ui/date-element/DatePicker'

import { useGetMasterDates } from '../../hooks/useGetMasterDates'

function MasterDataPicker() {
	const { dates, isLoadingDates } = useGetMasterDates()

	if (isLoadingDates) return null

	return (
		<div className='w-full'>
			<ChoseRecord type='record' />
			<SelectProcedure />
			<DatePicker type='master' dates={dates} key='master' />
		</div>
	)
}

export default MasterDataPicker
