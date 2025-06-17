import { z } from 'zod'

export const dateSchema = z.object({
	date: z.string({ message: 'Дата обязательное поле' })
})

export type DateSchemaType = z.infer<typeof dateSchema>
