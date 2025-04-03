import { Controller } from 'react-hook-form'

import { cn } from '@/shared/utils/tw-merge'

import type { IField } from './field.interface'

const Field = <T extends Record<string, any>>({
	control,
	name,
	className,
	classNameInput,
	classNameInputError,
	classNameContainer,
	...rest
}: IField<T>): JSX.Element => {
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
					<input
						onBlur={onBlur}
						onChange={onChange}
						value={value || ''}
						className={cn('input', classNameInput)}
						{...rest}
					/>
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

export default Field
