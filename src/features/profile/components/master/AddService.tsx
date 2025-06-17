import Button from '@/shared/components/ui/Button'
import Modal from '@/shared/components/ui/Modal'

import ServiceForm from './ServiceForm'

function AddService() {
	return (
		<Modal>
			<Modal.Open opens='createService' className='mx-auto'>
				<Button className='mt-[22px]'>Добавить услугу</Button>
			</Modal.Open>
			<Modal.Window name='createService'>
				<ServiceForm type='create' />
			</Modal.Window>
		</Modal>
	)
}

export default AddService
