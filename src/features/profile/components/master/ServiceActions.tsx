import Image from 'next/image'

import { useDeleteService } from '../../hooks/useDeleteService'
import { IServicesWithUserData } from '../../types/service.interface'

interface ServiceActionsProps {
	service: IServicesWithUserData
}

function ServiceActions({ service }: ServiceActionsProps) {
	const { deleteService, isDeletingService } = useDeleteService({
		procedureId: service.procedureId,
		serviceId: service.id
	})

	return (
		<div className='flex items-center gap-x-[25px]'>
			<button
				onClick={() => deleteService()}
				disabled={isDeletingService}
			>
				<Image
					src='/images/delete.svg'
					alt='delete'
					unoptimized
					width={38}
					height={34}
				/>
			</button>

			<button>
				<Image
					src='/images/edit-pen.svg'
					alt='delete'
					unoptimized
					width={33}
					height={33}
				/>
			</button>
		</div>
	)
}

export default ServiceActions
