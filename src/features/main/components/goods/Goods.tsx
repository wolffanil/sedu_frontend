import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/shared/components/common/Tabs'

import GoodsSlider from './GoodsSlider'

function Goods() {
	return (
		<section className='mt-[300px] w-full max-sm:mt-[26px]'>
			<h2 className='mb-[16px] text-center font-cormorant_regular text-[24px] uppercase text-black md:hidden'>
				УСЛУГИ
			</h2>
			<Tabs defaultValue='nails' className='w-full'>
				<TabsList className='w-full'>
					<TabsTrigger value='nails'>Ногти</TabsTrigger>
					<TabsTrigger value='eyelashes'>Ресницы</TabsTrigger>
					<TabsTrigger value='brows'>Брови</TabsTrigger>
				</TabsList>
				<TabsContent value='nails' className='max-sm:mt-[16px]'>
					<GoodsSlider serivceType='НОГТИ' />
				</TabsContent>
				<TabsContent value='eyelashes' className='max-sm:mt-[16px]'>
					<GoodsSlider serivceType='РЕСНИЦЫ' />
				</TabsContent>
				<TabsContent value='brows' className='max-sm:mt-[16px]'>
					<GoodsSlider serivceType='БРОВИ' />
				</TabsContent>
			</Tabs>
		</section>
	)
}

export default Goods
