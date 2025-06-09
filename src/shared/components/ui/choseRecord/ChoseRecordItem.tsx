'use client'

import { useQueryState } from 'nuqs'

import type { IRecord } from '@/shared/types/record.interface'

import TabItem from '../TabItem'

interface ChoseRecordItemProps {
	record: IRecord
	type: 'master' | 'record'
}

function ChoseRecordItem({ record, type }: ChoseRecordItemProps) {
	const { title, param } = record
	const [sType, setSType] = useQueryState('s-type')
	const [sMaster, setSMaster] = useQueryState('s-master')
	const [_, setPId] = useQueryState('p-id')

	const sTypeQ = type === 'record' ? sType : sMaster

	return (
		<TabItem
			isActive={param === sTypeQ}
			handleClick={() => {
				if (type === 'record') {
					setPId(null)
					setSMaster(null)
					setSType(param)
				} else {
					setPId(null)
					setSType(null)
					setSMaster(param)
				}
			}}
			title={title}
		/>
	)
}

export default ChoseRecordItem
