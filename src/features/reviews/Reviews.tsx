import Image from 'next/image'

import { IReview } from '@/shared/types/review.type'

import ReviewItem from './ReviewItem'

interface ReviwesProps {
	reviews: IReview[]
}

function Reviews({ reviews }: ReviwesProps) {
	return (
		<section className='relative mt-[45px] min-h-[100vh] w-full pb-[150px]'>
			<h1 className='text-center font-raleway_regular text-[64px] text-[#1D281D]'>
				Отзывы
			</h1>
			<div className='mt-[40px] flex w-full flex-col items-start gap-y-[30px]'>
				{reviews?.length
					? reviews.map(review => (
							<ReviewItem review={review} key={review.id} />
						))
					: null}
			</div>
			<Image
				src='/images/sheet.png'
				alt='sheet'
				width={395}
				height={561}
				className='absolute left-[-285px] top-[-109px] h-[561px] w-[395px]'
				priority
			/>
			<Image
				src='/images/sheet.png'
				alt='sheet'
				width={287}
				height={407}
				className='absolute bottom-[14px] right-[-276px] h-[407px] w-[287px] rotate-180'
				priority
			/>
			<Image
				src='/images/line.png'
				alt='line'
				className='absolute left-[-290px] top-[-360px] z-[-1] h-[1504px] min-w-[1940px] rotate-[-5deg]'
				width={1900}
				height={1504}
				priority
			/>
		</section>
	)
}

export default Reviews
