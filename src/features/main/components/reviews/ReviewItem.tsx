import Image from 'next/image'

import { CarouselItem } from '@/shared/components/common/Carousel'
import { type IReview } from '@/shared/types/review.type'
import { formatDate } from '@/shared/utils/get-format-date'

interface ReviewItemProps {
	review: IReview
}

function ReviewItem({ review }: ReviewItemProps) {
	return (
		<CarouselItem className='basis-1/3'>
			<li className='min-h-[380px] w-[415px] rounded-[25px] bg-white px-[23px] pt-[24px]'>
				<div className='ml-[11px] flex items-center gap-x-[8px]'>
					<Image
						src={review.user.photo}
						alt='profile'
						width={75}
						height={75}
						className='max-h-[75px] max-w-[75px] rounded-[25px] object-cover'
					/>
					<div className='flex flex-col items-start'>
						<p className='line-clamp-1 font-cormorant_sc_regular text-[40px] uppercase text-black'>
							{review.user.name}
						</p>
						<p className='mt-[-30px] font-cormorant_sc_regular text-[36px] text-black'>
							{formatDate(review.createdAt)}
						</p>
					</div>
				</div>
				<p className='mt-[7px] line-clamp-6 w-full break-words font-cormorant_regular text-[36px] leading-tight'>
					{review.text}
				</p>
			</li>
		</CarouselItem>
	)
}

export default ReviewItem
