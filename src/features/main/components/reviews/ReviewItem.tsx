import Image from 'next/image'

import { CarouselItem } from '@/shared/components/common/Carousel'
import { type IReview } from '@/shared/types/review.type'
import { formatDate } from '@/shared/utils/get-format-date'

interface ReviewItemProps {
	review: IReview
}

function ReviewItem({ review }: ReviewItemProps) {
	return (
		<CarouselItem className='basis-1/3 max-sm:basis-full'>
			<li className='min-h-[380px] w-[415px] rounded-[25px] bg-white px-[23px] pt-[24px] max-sm:min-h-[105px] max-sm:w-full max-sm:rounded-[15px] max-sm:p-[8px]'>
				<div className='ml-[11px] flex items-center gap-x-[8px] max-sm:ml-0 max-sm:gap-x-[4px]'>
					<Image
						src={review.user.photo}
						alt='profile'
						width={75}
						height={75}
						className='max-h-[75px] max-w-[75px] rounded-[25px] object-cover max-sm:max-h-[46px] max-sm:max-w-[45px] max-sm:rounded-[15px]'
					/>
					<div className='flex flex-col items-start'>
						<p className='line-clamp-1 font-cormorant_sc_regular text-[40px] uppercase text-black max-sm:text-[20px]'>
							{review.user.name}
						</p>
						<p className='mt-[-30px] font-cormorant_sc_regular text-[36px] text-black max-sm:mt-[-10px] max-sm:text-[16px]'>
							{formatDate(review.createdAt)}
						</p>
					</div>
				</div>
				<p className='mt-[7px] line-clamp-6 w-full break-words font-cormorant_regular text-[36px] leading-tight max-sm:text-[16px] max-sm:leading-tight'>
					{review.text}
				</p>
			</li>
		</CarouselItem>
	)
}

export default ReviewItem
