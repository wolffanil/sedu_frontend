import Button from '@/shared/components/ui/Button'
import Modal from '@/shared/components/ui/Modal'

import ServiceForm from './ServiceForm'

function AddService() {
	return (
		<Modal>
			<Modal.Open opens='createService' className='mx-auto'>
				<Button className='mt-[22px] max-sm:mt-[16px] max-sm:h-[40px] max-sm:min-w-[236px] max-sm:text-[20px]'>
					Добавить услугу
				</Button>
			</Modal.Open>
			<Modal.Window name='createService'>
				<ServiceForm type='create' />
			</Modal.Window>
		</Modal>
	)
}

export default AddService
