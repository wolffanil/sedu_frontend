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
	const price = book.isActiveBonuses
		? book.time.date.service.procedure.price -
			Number(book.time.date.service.procedure.price) * 0.1
		: book.time.date.service.procedure.price

	const bonuses = book.time.date.service.procedure.price * 0.05

	return (
		<li className='flex w-full flex-col items-start rounded-[25px] bg-[#f3f3f3] p-[25px]'>
			<div className='flex w-full items-center justify-between'>
				<p className='text-start font-cormorant_sc_semibold text-[28px] font-semibold text-black'>
					{procedureTitle}
				</p>
				<p className='text-start font-cormorant_infant_reqular text-[28px] text-black'>
					{price}₽
				</p>
			</div>
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
			{!book?.isActiveBonuses ? (
				<div className='mx-auto mt-[16px] flex h-[35px] w-[250px] items-center justify-center rounded-[10px] bg-[#9FBCA0]'>
					<p className='font-cormorant_infant_reqular text-[20px] text-[#1D281D]'>
						+ {bonuses} БОНУСОВ
					</p>
				</div>
			) : null}

			<BookActions book={book} type={type} />
		</li>
	)
}

export default BookItem
