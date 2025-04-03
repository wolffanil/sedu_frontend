import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/shared/components/common/Tabs'

import GoodsSlider from './GoodsSlider'

function Goods() {
	return (
		<section className='mt-[300px] w-full'>
			<Tabs defaultValue='nails' className='w-full'>
				<TabsList className='w-full'>
					<TabsTrigger value='nails'>Ногти</TabsTrigger>
					<TabsTrigger value='eyelashes'>Ресницы</TabsTrigger>
					<TabsTrigger value='brows'>Брови</TabsTrigger>
				</TabsList>
				<TabsContent value='nails'>
					<GoodsSlider serivceType='НОГТИ' />
				</TabsContent>
				<TabsContent value='eyelashes'>
					<GoodsSlider serivceType='РЕСНИЦЫ' />
				</TabsContent>
				<TabsContent value='brows'>
					<GoodsSlider serivceType='БРОВИ' />
				</TabsContent>
			</Tabs>
		</section>
	)
}

export default Goods
