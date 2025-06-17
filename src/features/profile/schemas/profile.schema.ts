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
		.refine(date => isAtLeast18(new Date(date)), {
			message: 'Вам должно быть не менее 18 лет.'
		})
		.optional()
})

const isAtLeast18 = (dateOfBirth: Date) => {
	const today = new Date()
	const age = today.getFullYear() - dateOfBirth.getFullYear()
	const isBirthdayPassedThisYear =
		today.getMonth() > dateOfBirth.getMonth() ||
		(today.getMonth() === dateOfBirth.getMonth() &&
			today.getDate() >= dateOfBirth.getDate())

	return isBirthdayPassedThisYear ? age >= 18 : age - 1 >= 18
}

export type IProfileEdit = z.infer<typeof ProfileSchema>
