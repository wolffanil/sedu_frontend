import ChoseRecord from '@/shared/components/ui/choseRecord/ChoseRecord'

import AddService from './AddService'
import Services from './Services'

function ServicesWrapper() {
	return (
		<div className='mt-[50px] flex w-full flex-col items-start rounded-[25px] bg-white p-[50px] max-sm:mt-[16px] max-sm:rounded-none max-sm:bg-transparent max-sm:p-0'>
			<ChoseRecord type='master' />
			<Services />
			<AddService />
		</div>
	)
}

export default ServicesWrapper
