import Image from 'next/image'
import Link from 'next/link'

import Button from '@/shared/components/ui/Button'
import { PUBLIC_URL } from '@/shared/config/url.config'

import ReviewsSlider from './ReviewsSlider'

function Reviews() {
	return (
		<section
			className='relative mt-[340px] w-full pb-[150px] max-sm:mt-[25px] max-sm:pb-[24px]'
			id='reviews'
		>
			<div className='mb-[52px] flex items-center justify-between pl-[34px] pr-[43px] max-sm:mb-[27px] max-sm:pl-[29px] max-sm:pr-0'>
				<h2 className='font-cormorant_sc_regular text-[40px] uppercase text-black max-sm:text-[20px]'>
					Что говорят клиенты о нас
				</h2>
				<Link href={PUBLIC_URL.reviews()} className='max-sm:hidden'>
					<Button className='min-w-[295px]'>Отзывы</Button>
				</Link>
			</div>
			<ReviewsSlider />
			<Image
				src='/images/sheet.png'
				alt='sheet'
				width={689}
				height={977}
				className='absolute right-[-316px] top-[-190px] z-[-1] inline-block h-[977px] w-[689px] scale-x-[-1] transform max-sm:hidden'
			/>
			<Link href={PUBLIC_URL.reviews()} className='md:hidden'>
				<Button className='mx-auto mt-[16px] h-[35px] min-w-[129px] max-sm:text-[16px]'>
					Отзывы
				</Button>
			</Link>
		</section>
	)
}

export default Reviews
