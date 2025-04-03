import { ITimestamps } from './timestampts.interface'

export type serivceType = 'НОГТИ' | 'БРОВИ' | 'РЕСНИЦЫ'

export interface IProcedure extends ITimestamps {
	id: string
	service: serivceType
	title: string
	photo: string
	price: number
}
