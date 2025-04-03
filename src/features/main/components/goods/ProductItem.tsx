'use client'

import localFont from 'next/font/local'
import Image from 'next/image'

import { CarouselItem } from '@/shared/components/common/Carousel'
import Button from '@/shared/components/ui/Button'
import { IProcedure } from '@/shared/types/procedure.type'
import { cn } from '@/shared/utils/tw-merge'

const cormorantInfant = localFont({
	src: '../../../../../public/fonts/cormorant-infant/CormorantInfant-Regular.ttf',
	preload: false,
	variable: '--font-cormorant-infant_regular'
})

interface ProductItemProps {
	procedure: IProcedure & { search: () => void }
}

function ProductItem({ procedure }: ProductItemProps) {
	return (
		<CarouselItem className='basis-1/3'>
			<li
				className={cn(
					`relative flex w-[403px] flex-col items-center justify-center ${cormorantInfant.variable}`
				)}
			>
				<div className='absolute left-0 right-0 top-0 flex h-[113px] w-full justify-center rounded-[25px] bg-green-bright py-[32px] shadow-sm'>
					<p className='line-clamp-1 font-cormorant_regular text-[40px] text-white'>
						{procedure.title}
					</p>
				</div>
				<Image
					src={procedure.photo}
					alt={procedure.title}
					width={403}
					height={541}
					className='h-[541px] w-[403px] rounded-tl-[25px] rounded-tr-[25px] object-cover'
				/>
				<div className='w-full rounded-bl-[25px] rounded-br-[25px] bg-white px-[52px] pb-[22px] pt-[14px]'>
					<p className='text-center font-cormorant_infant_reqular text-[48px] text-black'>
						от{''} {procedure.price}₽
					</p>
					<Button onClick={procedure.search} className='min-w-full'>
						Записаться
					</Button>
				</div>
			</li>
		</CarouselItem>
	)
}

export default ProductItem
