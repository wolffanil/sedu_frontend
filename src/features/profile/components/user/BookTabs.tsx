import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/shared/components/common/Tabs'

import BookWrapper from './BookWrapper'

function BookTabs() {
	return (
		<Tabs
			className='mt-[50px] w-full max-sm:mt-[16px]'
			defaultValue='feture'
		>
			<TabsList className='w-full'>
				<TabsTrigger
					value='feture'
					className='max-sm:h-[45px] max-sm:w-[175px] max-sm:py-[11px] max-sm:text-[16px]'
				>
					Предстоящие записи
				</TabsTrigger>

				<TabsTrigger
					value='last'
					className='max-sm:h-[45px] max-sm:w-[175px] max-sm:py-[11px] max-sm:text-[16px]'
				>
					Прошлые посещения
				</TabsTrigger>
			</TabsList>

			<TabsContent value='feture'>
				<BookWrapper type='feture' />
			</TabsContent>

			<TabsContent value='last'>
				<BookWrapper type='last' />
			</TabsContent>
		</Tabs>
	)
}

export default BookTabs
