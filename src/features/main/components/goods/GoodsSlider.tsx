'use client'

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious
} from '@/shared/components/common/Carousel'
import type { serivceType } from '@/shared/types/procedure.type'

import { useGetGoods } from '../../hooks/useGetGoods'

import ProductItem from './ProductItem'

interface GoodsSliderProps {
	serivceType: serivceType
}

function GoodsSlider({ serivceType }: GoodsSliderProps) {
	const { procedures, isLoadingProcedure } = useGetGoods(serivceType)

	if (isLoadingProcedure)
		return (
			<div className='flex w-full items-start justify-between'>
				<div className='goods__skeleton max-sm:mx-auto' />
				<div className='goods__skeleton max-sm:hidden' />
				<div className='goods__skeleton max-sm:hidden' />
			</div>
		)

	if (!procedures) return null

	return (
		<Carousel
			opts={{
				loop: true
			}}
		>
			<CarouselContent>
				{procedures.map(procudure => (
					<ProductItem procedure={procudure} key={procudure.id} />
				))}
			</CarouselContent>
			<div className='gap mt-[55px] flex w-full items-start justify-center gap-x-[41px] max-sm:mt-[16px] max-sm:gap-x-[24px]'>
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	)
}

export default GoodsSlider
