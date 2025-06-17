'use clients'

import dynamic from 'next/dynamic'
import { type Dispatch, type SetStateAction } from 'react'

import { useDeleteDate } from '@/features/profile/hooks/useDeleteDate'

import { IDate } from '@/shared/types/dates.interface'

import Button from '../../Button'
import Modal from '../../Modal'

const DateForm = dynamic(
	() => import('@/features/profile/components/master/DateForm')
)

interface ExtraActionsProps {
	setIsEdit: Dispatch<SetStateAction<boolean>>
	selectDate: IDate
	setSelectDate: Dispatch<SetStateAction<IDate | undefined>>
}

function ExtraActions({
	setIsEdit,
	selectDate,
	setSelectDate
}: ExtraActionsProps) {
	const { deleteDate, isDeletingDate } = useDeleteDate(selectDate.id)

	return (
		<div className='mx-auto mt-[25px] flex items-center justify-center gap-x-[15px]'>
			<Button onClick={() => setIsEdit(false)} disabled={isDeletingDate}>
				Сохранить
			</Button>
			<Modal>
				<Modal.Open opens='updateDate' disabled={isDeletingDate}>
					<Button disabled={isDeletingDate}>Обновить дату</Button>
				</Modal.Open>
				<Modal.Window name='updateDate'>
					<DateForm
						type='update'
						date={selectDate}
						setSelectDate={setSelectDate}
					/>
				</Modal.Window>
			</Modal>
			<Button
				onClick={async () => {
					await deleteDate()
					setSelectDate(undefined)
					setIsEdit(false)
				}}
			>
				{isDeletingDate ? 'Загрузка...' : 'Удалить дату'}
			</Button>
		</div>
	)
}

export default ExtraActions
