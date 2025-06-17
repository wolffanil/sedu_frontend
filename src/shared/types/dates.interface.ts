import { type DateSchemaType } from '@/features/profile/schemas/date.schema'

export interface IDate {
	id: string
	date: string
}

export interface IResponseGetDates {
	procedureDates: IDate[]
}

export interface IResponseGetMasterDates {
	dates: IDate[]
}

export interface ICreateDate extends DateSchemaType {
	serviceId: string
}

export interface IUpdateDate extends DateSchemaType {
	dateId: string
}
