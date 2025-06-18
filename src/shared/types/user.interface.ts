import { ITimestamps } from './timestampts.interface'

export const RoleUser = {
	USER: 'USER',
	MASTER: 'MASTER',
	ADMIN: 'ADMIN'
}

export type RoleUser = (typeof RoleUser)[keyof typeof RoleUser]

export interface IUser extends ITimestamps {
	id: string
	name: string
	surname: string
	email: string
	photo: string
	phone: string
	birthday: string
	bonuses: number
	role: RoleUser
}

export interface IEditUser
	extends Pick<IUser, 'name' | 'surname' | 'phone' | 'birthday' | 'email'> {}
