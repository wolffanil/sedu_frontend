'use client'

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious
} from '@/shared/components/common/Carousel'

import { useGetTeam } from '../../hooks/useGetTeam'

import MasterItem from './MasterItem'

function TeamSlider() {
	const { masters, isLoadingTeam } = useGetTeam()

	if (isLoadingTeam)
		return (
			<div className='flex items-start justify-between'>
				<div className='ourTeam__skeleton max-sm:mx-auto' />
				<div className='ourTeam__skeleton max-sm:hidden' />
				<div className='ourTeam__skeleton max-sm:hidden' />
			</div>
		)

	if (!masters) return null

	return (
		<Carousel
			opts={{
				loop: true
			}}
		>
			<CarouselContent>
				{masters.map(master => (
					<MasterItem master={master} key={master.id} />
				))}
			</CarouselContent>
			<div className='gap mt-[55px] flex w-full items-start justify-center gap-x-[41px] max-sm:mt-[16px] max-sm:gap-x-[24px]'>
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	)
}

export default TeamSlider
