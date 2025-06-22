'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'

import Button from '@/shared/components/ui/Button'
import Modal from '@/shared/components/ui/Modal'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

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

	const isModile = useMediaQuery('(max-width: 640px)')

	if (isModile)
		return (
			<div className='mx-auto mt-[6px] flex items-center gap-x-[8px]'>
				<Button
					onClick={() => deleteService()}
					disabled={isDeletingService}
					className='h-[40px] min-w-[120px] px-0 text-[20px]'
				>
					Удалить
				</Button>

				<Modal>
					<Modal.Open
						opens='createService'
						disabled={isDeletingService}
					>
						<Button
							disabled={isDeletingService}
							className='h-[40px] min-w-[120px] px-0 text-[20px]'
						>
							Редактировать
						</Button>
					</Modal.Open>
					<Modal.Window name='createService'>
						<ServiceForm type='update' service={service} />
					</Modal.Window>
				</Modal>
				<Modal>
					<Modal.Open opens='addDate' disabled={isDeletingService}>
						<button disabled={isDeletingService}>
							<div className='flex items-center justify-center rounded-[10px] bg-green-dark px-[8px] py-[5px]'>
								<Image
									src='/images/calendar-white.svg'
									alt='delete'
									unoptimized
									width={28}
									height={26}
									className='object-cover'
								/>
							</div>
						</button>
					</Modal.Open>
					<Modal.Window name='addDate'>
						<DateForm type='create' serviceId={service.id} />
					</Modal.Window>
				</Modal>
			</div>
		)

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
