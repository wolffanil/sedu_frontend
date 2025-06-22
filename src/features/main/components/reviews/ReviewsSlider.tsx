'use client'

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious
} from '@/shared/components/common/Carousel'
import { useGetReviews } from '@/shared/hooks/useGetReviews'

import ReviewItem from './ReviewItem'

function ReviewsSlider() {
	const { reviews, isLoadingReviews } = useGetReviews(true)

	if (isLoadingReviews) {
		return (
			<div className='flex w-full items-start justify-between'>
				<div className='reviews__skeleton max-sm:mx-auto max-sm:h-[124px] max-sm:w-full max-sm:rounded-[15px]' />
				<div className='reviews__skeleton max-sm:hidden' />
				<div className='reviews__skeleton max-sm:hidden' />
			</div>
		)
	}

	if (!reviews?.length) return null

	return (
		<Carousel
			opts={{
				loop: true
			}}
		>
			<CarouselContent>
				{reviews.map(review => (
					<ReviewItem review={review} key={review.id} />
				))}
			</CarouselContent>
			<div className='gap mt-[55px] flex w-full items-start justify-center gap-x-[41px] max-sm:mt-[16px] max-sm:gap-x-[24px]'>
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	)
}

export default ReviewsSlider
