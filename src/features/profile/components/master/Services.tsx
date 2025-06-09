'use client'

import { useGetServices } from '../../hooks/useGetServices'

import ServiceItem from './ServiceItem'

function ServiceSkeleton() {
	return (
		<div className='mt-[30px] flex w-full flex-col gap-y-[25px]'>
			{Array.from({ length: 2 }).map((_, i) => (
				<div
					key={i}
					className='h-[159px] w-full rounded-[25px] bg-[#f3f3f3]'
				/>
			))}
		</div>
	)
}

function Services() {
	const { services, isLoadingServices } = useGetServices()

	if (isLoadingServices) {
		return <ServiceSkeleton />
	}

	if (!services?.length) return null

	return (
		<ul className='mt-[30px] flex max-h-[345px] w-full flex-col items-start gap-y-[26px] overflow-y-scroll'>
			{services.map(service => (
				<ServiceItem service={service} key={service.id} />
			))}
		</ul>
	)
}

export default Services
