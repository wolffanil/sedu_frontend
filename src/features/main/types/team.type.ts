import { IUser } from '@/shared/types/user.interface'

export interface IMaster
	extends Pick<IUser, 'photo' | 'name' | 'surname' | 'id'> {
	services: {
		procedure: {
			title: string
		}
	}[]
}

export interface IMasterResponse {
	users: IMaster[]
}
