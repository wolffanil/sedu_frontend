import { z } from 'zod'

export const ProfileSchema = z.object({
	email: z
		.string({ message: 'Почта обязательное поле' })
		.email({ message: 'Почта должна быть валидной' })
		.trim(),
	name: z.string({ message: 'Имя обязательное полеь' }).trim(),
	surname: z.string({ message: 'Фамилия обязательное поле' }).trim(),
	phone: z.string({ message: 'Номер телефона обязательное поле' }).trim(),
	file: z.array(z.instanceof(File)).optional(),
	birthday: z
		.string({ message: 'День рождения должна быть валидной' })
		.optional()
})

export type IProfileEdit = z.infer<typeof ProfileSchema>
