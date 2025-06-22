'use client'

import { useGetMyBooks } from '../../hooks/useGetMyBooks'

import BookItem from './BookItem'
import type { bookType } from './book.type'

interface BooksProps {
	type: bookType
}

function BookSkeleton() {
	return (
		<div className='max-sm:ronded-[15px] h-[288px] w-full rounded-[25px] bg-[#f3f3f3] max-sm:h-[260px]' />
	)
}

function Books({ type }: BooksProps) {
	const { books, isLoadingBooks } = useGetMyBooks(type)

	if (isLoadingBooks) {
		return (
			<div className='mt-[25px] flex w-full flex-col items-start gap-y-[20px] max-sm:mt-0 max-sm:gap-y-[10px]'>
				{Array.from({ length: 3 }).map((_, i) => (
					<BookSkeleton key={i} />
				))}
			</div>
		)
	}

	return (
		<ul className='mt-[25px] flex max-h-[905px] w-full flex-col items-start gap-y-[20px] overflow-y-scroll max-sm:mt-0 max-sm:max-h-[500px] max-sm:gap-y-[10px]'>
			{books?.length ? (
				books.map(book => (
					<BookItem key={book.id} type={type} book={book} />
				))
			) : (
				<p className='font-cormorant_regular text-[24px] max-sm:text-[20px]'>
					Записей нету
				</p>
			)}
		</ul>
	)
}

export default Books
