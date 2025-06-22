'use client'

import Button from '@/shared/components/ui/Button'
import type { IMyBook } from '@/shared/types/book.interface'

interface BookActionsLastProps {
	book: IMyBook
}

function BookActionsLast({ book }: BookActionsLastProps) {
	return (
		<div className='mt-[20px] flex w-full flex-row items-start justify-center gap-x-[25px] max-sm:mt-[16px] max-sm:flex-col max-sm:items-center max-sm:gap-x-0 max-sm:gap-y-[10px]'>
			<Button className='text-[28px] max-sm:h-[40px] max-sm:min-w-[236px] max-sm:text-[20px]'>
				Оставить отзыв
			</Button>
			<Button
				className='text-[28px] max-sm:h-[40px] max-sm:min-w-[236px] max-sm:text-[20px]'
				onClick={book?.record}
			>
				Записаться снова
			</Button>
		</div>
	)
}

export default BookActionsLast
