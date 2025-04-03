'use client'

import Button from '@/shared/components/ui/Button'
import type { IMyBook } from '@/shared/types/book.interface'

interface BookActionsLastProps {
	book: IMyBook
}

function BookActionsLast({ book }: BookActionsLastProps) {
	return (
		<div className='mt-[20px] flex w-full items-start justify-center gap-x-[25px]'>
			<Button className='text-[28px]'>Оставить отзыв</Button>
			<Button className='text-[28px]' onClick={book?.record}>
				Записаться снова
			</Button>
		</div>
	)
}

export default BookActionsLast
