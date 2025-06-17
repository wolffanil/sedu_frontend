import { InputHTMLAttributes } from 'react'
import { Control, FieldPath, FieldValues } from 'react-hook-form'

interface BaseField {
	classNameInput?: string
	classNameInputError?: string
	classNameContainer?: string
}

export interface IField<T extends FieldValues>
	extends Omit<
			InputHTMLAttributes<HTMLInputElement>,
			'onChange' | 'value' | 'onBlur'
		>,
		BaseField {
	control: Control<T>
	name: FieldPath<T>
}

export interface IFieldSelect<T extends FieldValues>
	extends Omit<
			InputHTMLAttributes<HTMLSelectElement>,
			'onChange' | 'value' | 'onBlur'
		>,
		BaseField {
	control: Control<T>
	name: FieldPath<T>
	values: {
		title: string
		value: string | number
	}[]
	titleEmpty: string
}
