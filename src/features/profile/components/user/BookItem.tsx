import Image from 'next/image'

import type { IMyBook } from '@/shared/types/book.interface'
import { formatDate } from '@/shared/utils/get-format-date'

import BookActions from './BookActions'
import type { bookType } from './book.type'

interface BookItemProps {
	type: bookType
	book: IMyBook
}

function BookItem({ type, book }: BookItemProps) {
	const procedureTitle =
		book.time.date.service.procedure.title ?? 'Нет информации'

	const time = book.time.time
	const address = book.time.date.service.address
	const date = formatDate(book.time.date.date)

	return (
		<li className='flex w-full flex-col items-start rounded-[25px] bg-[#f3f3f3] p-[25px]'>
			<p className='text-start font-cormorant_sc_semibold text-[28px] font-semibold text-black'>
				{procedureTitle}
			</p>
			<ul className='mt-[15px] flex flex-col items-start gap-y-[10px] font-cormorant_infant_reqular text-[25px] text-black'>
				<li className='flex items-center gap-x-[15px]'>
					<Image
						src='/images/calendar-mini.svg'
						alt='calendar'
						width={21}
						height={20}
						unoptimized
					/>
					<p>{date}</p>
				</li>
				<li className='flex items-center gap-x-[15px]'>
					<Image
						src='/images/time.svg'
						alt='time'
						width={21}
						height={20}
						unoptimized
					/>
					<p>{time}</p>
				</li>
				<li className='flex items-center gap-x-[15px]'>
					<Image
						src='/images/location.svg'
						alt='location'
						width={20}
						height={20}
						unoptimized
					/>
					<p>{address}</p>
				</li>
			</ul>
			<BookActions book={book} type={type} />
		</li>
	)
}

export default BookItem
