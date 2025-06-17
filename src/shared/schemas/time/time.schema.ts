import { z } from 'zod'

export const timeSchema = z.object({
	time: z
		.string({ message: 'Время обязательное поле' })
		.regex(/^\d{2}:\d{2}$/, 'Время должно быть в формате ЧЧ:ММ')
		.refine(value => {
			const [hours, minutes] = value.split(':').map(Number)
			return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59
		}, 'Недопустимые значения часа или минут')
})

export type TimeSchemaType = z.infer<typeof timeSchema>
