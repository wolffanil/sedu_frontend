import { InputMask, InputMaskProps } from '@react-input/mask'
import { Controller } from 'react-hook-form'

import { cn } from '@/shared/utils/tw-merge'

import type { IField } from './field.interface'

const Phone = <T extends Record<string, any>>({
	control,
	name,
	className,
	classNameInput,
	classNameInputError,
	classNameContainer,
	...rest
}: IField<T> & { inputPhone?: InputMaskProps }): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<div
					className={cn(
						'flex w-full flex-col items-start',
						classNameContainer
					)}
				>
					<InputMask
						mask='+7 (___) ___-__-__'
						onChange={onChange}
						value={value}
						showMask
						replacement={{ _: /\d/ }}
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
			rules={{ required: 'Это поле обязательно' }}
		/>
	)
}

export default Phone
