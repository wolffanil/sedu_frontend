import Image from 'next/image'

import { IReview } from '@/shared/types/review.type'
import { formatDate } from '@/shared/utils/get-format-date'
import { getMediaSource } from '@/shared/utils/get-media-source'

interface ReviewItemProps {
	review: IReview
}

function ReviewItem({ review }: ReviewItemProps) {
	return (
		<li className='min-h-[184px] w-full rounded-[25px] bg-white p-[25px] pb-[15px] max-sm:min-h-[105px] max-sm:rounded-[15px] max-sm:p-[8px]'>
			<div className='flex items-center gap-x-[25px] max-sm:gap-x-[4px]'>
				<Image
					src={getMediaSource(review.user.photo)}
					alt='profile'
					width={90}
					height={90}
					className='max-h-[90px] max-w-[90px] rounded-[25px] object-cover max-sm:max-h-[46px] max-sm:max-w-[45px] max-sm:rounded-[15px]'
				/>
				<div className='flex flex-col items-start'>
					<p className='mt-[-5px] line-clamp-1 font-cormorant_sc_regular text-[40px] uppercase text-black max-sm:mt-[-10px] max-sm:text-[20px]'>
						{review.user.name}
					</p>
					<p className='mt-[-20px] font-cormorant_sc_regular text-[32px] text-black max-sm:mt-[-10px] max-sm:text-[16px]'>
						{formatDate(review.createdAt)}
					</p>
				</div>
			</div>
			<p className='mt-[10px] w-full break-words font-cormorant_regular text-[36px] leading-[45px] max-sm:mt-[8px] max-sm:text-[16px] max-sm:leading-tight'>
				{review.text}
			</p>
		</li>
	)
}

export default ReviewItem
