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
		<Tabs defaultValue='services' className='mt-[50px] w-full'>
			<TabsList className='w-full'>
				<TabsTrigger value='datepicker'>График</TabsTrigger>

				<TabsTrigger value='services'>Услуги</TabsTrigger>
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
