import Books from './Books'
import type { bookType } from './book.type'

interface BookWrapperProps {
	type: bookType
}

function BookWrapper({ type }: BookWrapperProps) {
	const title = type === 'feture' ? 'Предстоящие записи' : 'Прошлые посещения'

	const subtitle =
		type === 'feture' ? 'Запланированные процедуры' : 'История процедур'

	return (
		<div className='flex w-full flex-col items-start gap-y-[25px] rounded-[25px] bg-white px-[50px] py-[45px] max-sm:gap-y-[8px] max-sm:rounded-[15px] max-sm:px-[8px] max-sm:py-[14px]'>
			<div className='flex flex-col items-start'>
				<h1 className='font-cormorant_sc_semibold text-[36px] font-semibold text-black max-sm:text-[20px]'>
					{title}
				</h1>
				<p className='font-cormorant_regular text-[25px] text-black max-sm:text-[16px]'>
					{subtitle}
				</p>
			</div>
			<Books type={type} />
		</div>
	)
}

export default BookWrapper
