'use client'

import { Controller } from 'react-hook-form'

import { cn } from '@/shared/utils/tw-merge'

import type { IFieldSelect } from './field.interface'

const SelectField = <T extends Record<string, any>>({
	control,
	name,
	className,
	classNameInput,
	classNameInputError,
	classNameContainer,
	titleEmpty,
	values,
	...rest
}: IFieldSelect<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<div
					className={cn(
						'flex w-full flex-col items-start',
						classNameContainer
					)}
				>
					<select
						onBlur={onBlur}
						onChange={onChange}
						value={value ?? ''}
						className={cn('input', classNameInput)}
						{...rest}
					>
						<option value='' disabled>
							{titleEmpty}
						</option>
						{values.map((item, i) => (
							<option key={i} value={item.value}>
								{item.title}
							</option>
						))}
					</select>
					{error && (
						<p
							className={cn(
								'input__message_error mt-[8px]',
								classNameInputError
							)}
						>
							{error.message}
						</p>
					)}
				</div>
			)}
		/>
	)
}

export default SelectField
