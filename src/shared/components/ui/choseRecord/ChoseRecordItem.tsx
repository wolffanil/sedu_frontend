'use client'

import { useSearchParams } from 'next/navigation'

import { useSetSearchParams } from '@/shared/hooks/useSetSearchParams'
import type { IRecord } from '@/shared/types/record.interface'

import TabItem from '../TabItem'

interface ChoseRecordItemProps {
	record: IRecord
	type: 'master' | 'record'
}

function ChoseRecordItem({ record, type }: ChoseRecordItemProps) {
	const { title, param } = record
	const { createQueryString } = useSetSearchParams(true)
	const searchParams = useSearchParams()

	const sType =
		searchParams.get(type === 'record' ? 's-type' : 's-master') ?? ''

	return (
		<TabItem
			isActive={param === sType}
			handleClick={() =>
				createQueryString(
					type === 'record' ? 's-type' : 's-master',
					param
				)
			}
			title={title}
		/>
	)
}

export default ChoseRecordItem
