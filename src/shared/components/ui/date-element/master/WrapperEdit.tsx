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
		<div className='min-h-[488px] w-full rounded-[25px] bg-[#E6EDE6] p-[25px] max-sm:min-h-[240px] max-sm:rounded-[15px] max-sm:p-[8px]'>
			<DisplayDate date={selectDate?.date} />
			<div className='mt-[25px] flex max-h-[600px] min-h-[270px] flex-col items-center gap-y-[25px] rounded-[25px] bg-white p-[25px] max-sm:mt-[8px] max-sm:max-h-[350px] max-sm:gap-y-[8px] max-sm:rounded-[15px] max-sm:p-[8px]'>
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
