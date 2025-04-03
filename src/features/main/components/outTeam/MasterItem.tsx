import Image from 'next/image'
import Link from 'next/link'

import { CarouselItem } from '@/shared/components/common/Carousel'
import { PUBLIC_URL } from '@/shared/config/url.config'
import { getMediaSource } from '@/shared/utils/get-media-source'

import type { IMaster } from '../../types/team.type'

interface MasterItemProps {
	master: IMaster
}

function MasterItem({ master }: MasterItemProps) {
	return (
		<CarouselItem className='basis-1/3'>
			<li className='relative h-[587px] w-[404px] list-none'>
				<Image
					src={getMediaSource(master.photo)}
					alt={master.name}
					width={404}
					height={587}
					className='h-full w-full rounded-[25px] object-cover'
				/>
				<div className='absolute bottom-[17px] left-1/2 min-h-[113px] w-[370px] -translate-x-1/2 transform rounded-[25px] bg-green-dark px-[10px] py-[5px]'>
					<p className='line-clamp-1 w-full font-cormorant_regular text-[40px] text-[#E6F2E6]'>
						{master.surname} {master.name}
					</p>
					<p className='w-full break-words font-cormorant_regular text-[28px] lowercase leading-8 text-[#E6F2E6]'>
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
