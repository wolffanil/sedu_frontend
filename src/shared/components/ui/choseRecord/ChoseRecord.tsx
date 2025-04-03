import { recordConstants } from '@/shared/libs/constants/records.constants'
import { cn } from '@/shared/utils/tw-merge'

import ChoseRecordItem from './ChoseRecordItem'

interface ChoseRecordProps {
	className?: string
	type: 'master' | 'record'
}

function ChoseRecord({ className, type }: ChoseRecordProps) {
	return (
		<ul
			className={cn(
				'flex items-start justify-start gap-x-[36px]',
				className ? className : ''
			)}
		>
			{recordConstants.map((record, i) => (
				<ChoseRecordItem record={record} key={i} type={type} />
			))}
		</ul>
	)
}

export default ChoseRecord
