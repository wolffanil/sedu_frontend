import Image from 'next/image'

import { CarouselItem } from '@/shared/components/common/Carousel'
import { getMediaSource } from '@/shared/utils/get-media-source'

import type { IMaster } from '../../types/team.type'

interface MasterItemProps {
	master: IMaster
}

function MasterItem({ master }: MasterItemProps) {
	return (
		<CarouselItem className='basis-1/3 max-sm:basis-full'>
			<li className='relative h-[587px] w-[404px] list-none max-sm:mx-auto max-sm:h-[254px] max-sm:w-[175px]'>
				<Image
					src={getMediaSource(master.photo)}
					alt={master.name}
					width={404}
					height={587}
					className='h-full w-full rounded-[25px] object-cover max-sm:rounded-[15px]'
				/>
				<div className='absolute bottom-[17px] left-1/2 min-h-[113px] w-[370px] -translate-x-1/2 transform rounded-[25px] bg-green-dark px-[10px] py-[5px] max-sm:bottom-[5px] max-sm:min-h-[54px] max-sm:w-[171px] max-sm:rounded-[15px] max-sm:px-[5px] max-sm:py-[4px]'>
					<p className='line-clamp-1 w-full font-cormorant_regular text-[40px] text-[#E6F2E6] max-sm:text-[17px]'>
						{master.surname} {master.name}
					</p>
					<p className='line-clamp-3 w-full break-words font-cormorant_regular text-[28px] lowercase leading-8 text-[#E6F2E6] max-sm:text-[13px] max-sm:leading-tight'>
						Мастер{' '}
						{master.services?.map((p, i) =>
							i !== 0
								? `${` `}и ${p.procedure.title} `
								: p.procedure.title
						)}
					</p>
				</div>
			</li>
		</CarouselItem>
	)
}

export default MasterItem
