import Image from 'next/image'

import { IReview } from '@/shared/types/review.type'
import { formatDate } from '@/shared/utils/get-format-date'
import { getMediaSource } from '@/shared/utils/get-media-source'

interface ReviewItemProps {
	review: IReview
}

function ReviewItem({ review }: ReviewItemProps) {
	return (
		<li className='min-h-[184px] w-full rounded-[25px] bg-white p-[25px] pb-[15px]'>
			<div className='flex items-center gap-x-[25px]'>
				<Image
					src={getMediaSource(review.user.photo)}
					alt='profile'
					width={90}
					height={90}
					className='rounded-[25px] object-cover'
				/>
				<div className='flex flex-col items-start'>
					<p className='mt-[-5px] line-clamp-1 font-cormorant_sc_regular text-[40px] uppercase text-black'>
						{review.user.name}
					</p>
					<p className='mt-[-20px] font-cormorant_sc_regular text-[32px] text-black'>
						{formatDate(review.createdAt)}
					</p>
				</div>
			</div>
			<p className='mt-[10px] w-full break-words font-cormorant_regular text-[36px] leading-[45px]'>
				{review.text}
			</p>
		</li>
	)
}

export default ReviewItem
