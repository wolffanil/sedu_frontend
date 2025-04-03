import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/shared/components/common/Tabs'

import BookWrapper from './BookWrapper'

function BookTabs() {
	return (
		<Tabs className='mt-[50px] w-full' defaultValue='feture'>
			<TabsList className='w-full'>
				<TabsTrigger value='feture'>Предстоящие записи</TabsTrigger>

				<TabsTrigger value='last'>Прошлые посещения</TabsTrigger>
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
