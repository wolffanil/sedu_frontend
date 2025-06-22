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
		<CarouselItem className='basis-1/3 max-sm:basis-full'>
			<li
				className={cn(
					`relative flex w-[403px] flex-col items-center justify-center max-sm:mx-auto max-sm:w-[175px] ${cormorantInfant.variable}`
				)}
			>
				<div className='absolute left-0 right-0 top-0 flex h-[113px] w-full items-center justify-center rounded-[25px] bg-green-bright shadow-sm max-sm:max-h-[50px] max-sm:min-h-[39px] max-sm:rounded-[15px] max-sm:px-[1px]'>
					<p className='line-clamp-2 text-center font-cormorant_regular text-[40px] leading-tight text-white max-sm:text-[16px]'>
						{procedure.title}
					</p>
				</div>
				<Image
					src={procedure.photo}
					alt={procedure.title}
					width={403}
					height={541}
					className='h-[541px] w-[403px] rounded-tl-[25px] rounded-tr-[25px] object-cover max-sm:h-[217px] max-sm:w-[175px] max-sm:rounded-tl-[15px] max-sm:rounded-tr-[15px]'
				/>
				<div className='w-full rounded-bl-[25px] rounded-br-[25px] bg-white px-[52px] pb-[22px] pt-[14px] max-sm:rounded-bl-[15px] max-sm:rounded-br-[15px] max-sm:py-[8px] max-sm:pl-[22px] max-sm:pr-[24px]'>
					<p className='text-center font-cormorant_infant_reqular text-[48px] text-black max-sm:text-[20px]'>
						от{''} {procedure.price}₽
					</p>
					<Button
						onClick={procedure.search}
						className='min-w-full max-sm:h-[35px] max-sm:text-[16px]'
					>
						Записаться
					</Button>
				</div>
			</li>
		</CarouselItem>
	)
}

export default ProductItem
