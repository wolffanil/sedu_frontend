import Image from 'next/image'
import Link from 'next/link'

import Button from '@/shared/components/ui/Button'
import { PUBLIC_URL } from '@/shared/config/url.config'

import ReviewsSlider from './ReviewsSlider'

function Reviews() {
	return (
		<section className='relative mt-[340px] w-full pb-[150px]' id='reviews'>
			<div className='mb-[52px] flex items-center justify-between pl-[34px] pr-[43px]'>
				<h2 className='font-cormorant_sc_regular text-[40px] uppercase text-black'>
					Что говорят клиенты о нас
				</h2>
				<Link href={PUBLIC_URL.reviews()}>
					<Button className='min-w-[295px]'>Отзывы</Button>
				</Link>
			</div>
			<ReviewsSlider />
			<Image
				src='/images/sheet.png'
				alt='sheet'
				width={689}
				height={977}
				className='absolute right-[-316px] top-[-190px] z-[-1] inline-block h-[977px] w-[689px] scale-x-[-1] transform'
			/>
		</section>
	)
}

export default Reviews
