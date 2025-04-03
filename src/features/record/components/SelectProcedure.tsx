'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/shared/components/common/Select'
import { useSetSearchParams } from '@/shared/hooks/useSetSearchParams'

import { useGetProceduresByService } from '../hooks/useGetProceduresByService'

import SelectProcedureItem from './SelectProcedureItem'

function SelectProcedure() {
	const { sType, isLoadingProcedure, procedures } =
		useGetProceduresByService()
	const searchParams = useSearchParams()

	const { createQueryString } = useSetSearchParams()

	const pId = searchParams.get('p-id')

	const setProcedureId = useCallback(
		(procedureId: string) => {
			createQueryString('p-id', procedureId)
		},
		[createQueryString]
	)

	return (
		<Select
			disabled={!sType || isLoadingProcedure || !procedures?.length}
			onValueChange={value => setProcedureId(value)}
			value={pId ? pId : undefined}
			key={procedures?.length || 0}
		>
			<SelectTrigger className='mb-[25px] mt-[50px] h-[59px] w-[300px] rounded-[25px] border-none bg-green-dark font-cormorant_regular text-[28px] text-white'>
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
				<SelectGroup>
					<SelectLabel>Процедуры</SelectLabel>
					{procedures?.map(p => (
						<SelectProcedureItem procedure={p} key={p.id} />
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default SelectProcedure
