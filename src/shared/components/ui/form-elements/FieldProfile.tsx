import { Controller } from 'react-hook-form'

import { cn } from '@/shared/utils/tw-merge'

import type { IField } from './field.interface'

const FieldProfile = <T extends Record<string, any>>({
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
						className={cn('input_profile', classNameInput)}
						{...rest}
					/>
					{error && (
						<p
							className={cn(
								'input__message_error mt-[8px] max-sm:mt-[4px]',
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

export default FieldProfile
