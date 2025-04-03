import type { IDate } from '@/shared/types/dates.interface'
import type { ITime } from '@/shared/types/time.interface'
import type { ITimestamps } from '@/shared/types/timestampts.interface'
import type { IUser } from '@/shared/types/user.interface'

import type { serivceType } from './procedure.type'

export interface IBookInfo extends ITimestamps {
	id: string
	userId: Pick<IUser, 'id'>
	timeId: Pick<ITime, 'id'>
	time: {
		time: string
		date: {
			id: Pick<IDate, 'id'>
			date: string
			service: {
				procedure: {
					title: string
				}
			}
		}
	}
	user: {
		surname: string
		name: string
		phone: string
	}
}

export interface IBookInfoResponse {
	book: IBookInfo
}

export interface IBook extends ITimestamps {
	id: string
	userId: string
	timeId: string
	bonuses: number
	isActiveBonuses: boolean
}

export interface IResponseCreateBook {
	book: IBook
}

export interface IMyBook extends IBook {
	time: {
		time: string
		date: {
			date: string
			service: {
				id: string
				address: string
				procedure: {
					service: serivceType
					id: string
					title: string
				}
			}
		}
	}
	record: () => void
}

export interface IMyBooksResponse {
	books: IMyBook[]
}
