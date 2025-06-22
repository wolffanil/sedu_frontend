'use client'

import { useQueryState } from 'nuqs'
import { useCallback } from 'react'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/shared/components/common/Select'

import { useGetProceduresByService } from '../hooks/useGetProceduresByService'

import SelectProcedureItem from './SelectProcedureItem'

function SelectProcedure() {
	const { sType, isLoadingProcedure, procedures } =
		useGetProceduresByService()
	const [pId, setPId] = useQueryState('p-id')

	const setProcedureId = useCallback(
		(procedureId: string) => {
			setPId(procedureId)
		},
		[pId]
	)

	return (
		<Select
			disabled={!sType || isLoadingProcedure || !procedures?.length}
			onValueChange={value => setProcedureId(value)}
			value={pId ? pId : undefined}
			key={sType}
		>
			<SelectTrigger className='mb-[25px] mt-[50px] h-[59px] min-w-[300px] rounded-[25px] border-none bg-green-dark font-cormorant_regular text-[28px] text-white focus:ring-0 max-sm:mb-[16px] max-sm:mt-[16px] max-sm:h-[40px] max-sm:min-w-full max-sm:rounded-[15px] max-sm:text-[20px]'>
				<SelectValue
					placeholder={
						!sType
							? 'Выберите сервис'
							: isLoadingProcedure
								? 'Загрузка услуг...'
								: !procedures?.length
									? 'Нет услуг'
									: 'Выберите услугу'
					}
				/>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup className='bg-white'>
					<SelectLabel className='max-sm:text-[20px]'>
						Процедуры
					</SelectLabel>
					{procedures?.map(p => (
						<SelectProcedureItem procedure={p} key={p.id} />
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default SelectProcedure
