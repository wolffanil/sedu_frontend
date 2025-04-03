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
			<div className='flex w-full items-start justify-between'>
				<div className='ourTeam__skeleton' />
				<div className='ourTeam__skeleton' />
				<div className='ourTeam__skeleton' />
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
			<div className='gap mt-[55px] flex w-full items-start justify-center gap-x-[41px]'>
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	)
}

export default TeamSlider
