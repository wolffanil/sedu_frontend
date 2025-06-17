import dynamic from 'next/dynamic'
import Image from 'next/image'

import Modal from '@/shared/components/ui/Modal'

import { useDeleteService } from '../../hooks/useDeleteService'
import { IServicesWithUserData } from '../../types/service.interface'

import ServiceForm from './ServiceForm'

const DateForm = dynamic(() => import('./DateForm'))

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

			<Modal>
				<Modal.Open opens='createService' disabled={isDeletingService}>
					<button disabled={isDeletingService}>
						<Image
							src='/images/edit-pen.svg'
							alt='delete'
							unoptimized
							width={33}
							height={33}
						/>
					</button>
				</Modal.Open>
				<Modal.Window name='createService'>
					<ServiceForm type='update' service={service} />
				</Modal.Window>
			</Modal>
			<Modal>
				<Modal.Open opens='addDate' disabled={isDeletingService}>
					<button disabled={isDeletingService}>
						<Image
							src='/images/calendar.svg'
							alt='delete'
							unoptimized
							width={33}
							height={33}
						/>
					</button>
				</Modal.Open>
				<Modal.Window name='addDate'>
					<DateForm type='create' serviceId={service.id} />
				</Modal.Window>
			</Modal>
		</div>
	)
}

export default ServiceActions
