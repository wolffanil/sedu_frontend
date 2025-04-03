import { z } from 'zod'

export const registerSchema = z.object({
	email: z
		.string({ message: 'Почта обязательное поле' })
		.email({ message: 'Почта должна быть валидной' })
		.trim(),
	name: z.string({ message: 'Имя обязательное полеь' }).trim(),
	surname: z.string({ message: 'Фамилия обязательное поле' }).trim(),
	phone: z.string({ message: 'Номер телефона обязательное поле' }).trim(),
	password: z
		.string({ message: 'Пароль обязательное поле' })
		.min(8, { message: 'Пароль должен быть не менее 8 символов' })
		.trim()
})
