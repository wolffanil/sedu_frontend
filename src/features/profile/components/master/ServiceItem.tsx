import { IServicesWithUserData } from '../../types/service.interface'

import ServiceActions from './ServiceActions'

interface ServiceItemProps {
	service: IServicesWithUserData
}

function ServiceItem({ service }: ServiceItemProps) {
	return (
		<li className='flex h-[159px] w-full items-start justify-between rounded-[25px] bg-[#f3f3f3] p-[25px]'>
			<div className='flex flex-col items-start justify-between'>
				<p className='service__text'>
					Процедура: {service.procedure.title}
				</p>
				<p className='service__text'>
					Продолжительность: {service.duration}
				</p>
				<p className='service__text'>
					Мастер: {service.user.surname + ' ' + service.user.name}
				</p>
			</div>
			<ServiceActions service={service} />
		</li>
	)
}

export default ServiceItem
