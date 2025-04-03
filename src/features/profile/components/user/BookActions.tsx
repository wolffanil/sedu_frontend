import type { IMyBook } from '@/shared/types/book.interface'

import BookActionsFeture from './book-actions/BookActionsFeture'
import BookActionsLast from './book-actions/BookActionsLast'
import type { bookType } from './book.type'

interface BookActionsProps {
	book: IMyBook
	type: bookType
}

function BookActions({ type, book }: BookActionsProps) {
	const isLast = type === 'last'

	return isLast ? (
		<BookActionsLast book={book} />
	) : (
		<BookActionsFeture book={book} />
	)
}

export default BookActions
