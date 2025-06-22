import dynamic from 'next/dynamic'

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/shared/components/common/Tabs'

import ServicesWrapper from './ServicesWrapper'

const MasterDataPicker = dynamic(() => import('./MasterDataPicker'))

function ChoseAction() {
	return (
		<Tabs
			defaultValue='services'
			className='mt-[50px] w-full max-sm:mt-[16px]'
		>
			<TabsList className='w-full'>
				<TabsTrigger
					value='datepicker'
					className='max-sm:w-[175px] max-sm:rounded-[15px] max-sm:py-[11px] max-sm:text-[16px]'
				>
					График
				</TabsTrigger>

				<TabsTrigger
					value='services'
					className='max-sm:w-[175px] max-sm:rounded-[15px] max-sm:py-[11px] max-sm:text-[16px]'
				>
					Услуги
				</TabsTrigger>
			</TabsList>

			<TabsContent value='datepicker'>
				<MasterDataPicker />
			</TabsContent>

			<TabsContent value='services'>
				<ServicesWrapper />
			</TabsContent>
		</Tabs>
	)
}

export default ChoseAction
