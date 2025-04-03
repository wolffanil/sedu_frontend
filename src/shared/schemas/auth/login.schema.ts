import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string({ message: 'Почта обязательное поле' })
		.email({ message: 'Почта должна быть валидной' })
		.trim(),
	password: z
		.string({ message: 'Пароль обязательное поле' })
		.min(8, { message: 'Пароль должен быть не менее 8 символов' })
		.trim()
})
