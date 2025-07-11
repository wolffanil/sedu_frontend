'use client'

import Image from 'next/image'

import { useCancelBook } from '@/shared/hooks/models/useCancelBook'
import { useGetBookInfo } from '@/shared/hooks/models/useGetBookInfo'
import type { IModal } from '@/shared/types/model.interface'
import type { ITime } from '@/shared/types/time.interface'
import { formatDate } from '@/shared/utils/get-format-date'

import Button from '../../Button'
import ModelWrapper from '../../ModelWrapper'

interface CancelBookModelProps extends IModal {
	time: ITime
}

function CancelBookModel({ time, onCloseModal }: CancelBookModelProps) {
	const { book, isLoadingBook } = useGetBookInfo(time?.id)

	const { cancelBook, isCancelingBook } = useCancelBook(
		book?.id ?? '',
		time.id,
		book?.time?.date?.id,
		onCloseModal
	)

	if (isLoadingBook) return null

	const procedureTitle =
		book?.time?.date?.service?.procedure?.title ??
		'Название процедуры не найденно'

	const date = formatDate(book?.time?.date?.date ?? '')

	const timeBook = book?.time?.time ?? 'Нет данных'

	const userData = book?.user?.surname + ' ' + book?.user?.name
	const phone = book?.user?.phone ?? '-'

	return (
		<ModelWrapper
			className='min-h-[288px] w-[1272px] p-[25px] max-sm:w-[359px]'
			onCloseModal={onCloseModal}
		>
			<div className='flex w-full flex-col items-start'>
				<h2 className='text-start font-cormorant_sc_semibold text-[28px] font-semibold text-black max-sm:w-full max-sm:text-center max-sm:text-[20px]'>
					{procedureTitle}
				</h2>
				<div className='mt-[15px] flex flex-col items-start gap-y-[10px] max-sm:gap-y-[8px]'>
					<div className='flex items-center gap-x-[15px] max-sm:gap-x-[4px]'>
						<Image
							src='/images/calendar-mini.svg'
							alt='calender'
							width={21}
							height={20}
							unoptimized
						/>
						<p className='font-cormorant_regular text-[25px] text-black max-sm:text-[20px]'>
							{date}
						</p>
					</div>

					<div className='flex items-center gap-x-[15px] max-sm:gap-x-[4px]'>
						<Image
							src='/images/time.svg'
							alt='time'
							width={21}
							height={20}
							unoptimized
						/>
						<p className='font-cormorant_regular text-[25px] text-black max-sm:text-[20px]'>
							{timeBook}
						</p>
					</div>
				</div>
				<div className='mt-[10px] flex items-center gap-x-[20px] text-[25px] text-black max-sm:mt-[7px] max-sm:gap-x-[15px] max-sm:text-[20px]'>
					<p className='font-cormorant_regular'>{userData}</p>
					<p className='font-cormorant_regular'>{phone}</p>
				</div>

				<Button
					disabled={isCancelingBook}
					onClick={() => cancelBook()}
					className='mx-auto mt-[20px] text-[28px] max-sm:mt-[17px] max-sm:h-[40px] max-sm:w-[236px] max-sm:text-[20px]'
				>
					{isCancelingBook ? 'Загрузка...' : 'Отменить запись'}
				</Button>
			</div>
		</ModelWrapper>
	)
}

export default CancelBookModel
