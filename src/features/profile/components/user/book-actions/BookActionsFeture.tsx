'use client'

import { useCancelMyBook } from '@/features/profile/hooks/useCancelMyBook'

import Button from '@/shared/components/ui/Button'
import type { IMyBook } from '@/shared/types/book.interface'

interface BookActionsFetureProps {
	book: IMyBook
}

function BookActionsFeture({ book }: BookActionsFetureProps) {
	const { cancelBook, isCancelingBook } = useCancelMyBook(book.id)

	return (
		<Button
			className='mx-auto mt-[20px] text-[27px] max-sm:mt-[16px] max-sm:h-[40px] max-sm:min-w-[236px] max-sm:text-[20px]'
			onClick={() => cancelBook()}
			disabled={isCancelingBook}
		>
			{isCancelingBook ? 'Загрузка...' : 'Отменить запись'}
		</Button>
	)
}

export default BookActionsFeture
