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
				<div className='goods__skeleton' />
				<div className='goods__skeleton' />
				<div className='goods__skeleton' />
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
			<div className='gap mt-[55px] flex w-full items-start justify-center gap-x-[41px]'>
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	)
}

export default GoodsSlider
