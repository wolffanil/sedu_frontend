import ChoseRecord from '@/shared/components/ui/choseRecord/ChoseRecord'

import CheckWrapper from './CheckWrapper'
import RecordDatePicker from './RecordDatePicker'
import SelectProcedure from './SelectProcedure'

function Record() {
	return (
		<section className='mt-[50px] min-h-[100vh] w-full'>
			<ChoseRecord type='record' />
			<SelectProcedure />
			<CheckWrapper>
				<RecordDatePicker />
			</CheckWrapper>
		</section>
	)
}

export default Record
