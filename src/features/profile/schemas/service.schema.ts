import { z } from 'zod'

export const serviceSchema = z.object({
	address: z
		.string({ message: 'Адрес должен быть' })
		.nonempty({ message: 'Адрес не может быть пустым' })
		.trim(),
	procedureId: z
		.string({ message: 'Процедура должа быть' })
		.nonempty({ message: 'Процедура не может быть пустым' }),
	duration: z
		.string({ message: 'Продолжительность должена быть' })
		.nonempty({ message: 'Продолжительность не может быть пустым' })
		.regex(/^\d*\.?\d*$/, {
			message: 'Введите корректное время в часах (например, 1.1)'
		})
		.transform(val => val.replace(/ч/g, '').trim())
})

export type ServiceSchemaType = z.infer<typeof serviceSchema>
