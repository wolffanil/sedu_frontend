import ChoseRecord from '@/shared/components/ui/choseRecord/ChoseRecord'

import AddService from './AddService'
import Services from './Services'

function ServicesWrapper() {
	return (
		<div className='mt-[50px] flex w-full flex-col items-start rounded-[25px] bg-white p-[50px]'>
			<ChoseRecord type='master' />
			<Services />
			<AddService />
		</div>
	)
}

export default ServicesWrapper
