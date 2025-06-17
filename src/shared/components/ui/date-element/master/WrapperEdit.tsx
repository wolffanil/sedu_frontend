import { Dispatch, SetStateAction } from 'react'

import type { IDate } from '@/shared/types/dates.interface'

import CreateTimeForm from './CreateTimeForm'
import DisplayDate from './DisplayDate'
import ExtraActions from './ExtraActions'
import Times from './Times'

interface WrapperEditProps {
	selectDate: IDate | undefined
	setIsShowEdit: Dispatch<SetStateAction<boolean>>
	setSelectDate: Dispatch<SetStateAction<IDate | undefined>>
}

function WrapperEdit({
	selectDate,
	setIsShowEdit,
	setSelectDate
}: WrapperEditProps) {
	if (!selectDate?.date) return null
	return (
		<div className='min-h-[488px] w-full rounded-[25px] bg-[#E6EDE6] p-[25px]'>
			<DisplayDate date={selectDate?.date} />
			<div className='mt-[25px] flex max-h-[540px] min-h-[270px] flex-col items-center gap-y-[25px] rounded-[25px] bg-white p-[25px]'>
				<CreateTimeForm dateId={selectDate.id} />
				<Times dateId={selectDate.id} />
			</div>
			<ExtraActions
				setIsEdit={setIsShowEdit}
				selectDate={selectDate}
				setSelectDate={setSelectDate}
			/>
		</div>
	)
}

export default WrapperEdit
