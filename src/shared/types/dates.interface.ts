import { type DateSchemaType } from '@/features/profile/schemas/date.schema'

export interface IDate {
	id: string
	date: string
}

interface IDateMaster extends IDate {
	service: {
		procedureId: string
		serviceType: string
	}
}

export interface IResponseGetDates {
	procedureDates: IDate[]
}

export interface IResponseGetMasterDates {
	dates: IDateMaster[]
}

export interface ICreateDate extends DateSchemaType {
	serviceId: string
}

export interface IUpdateDate extends DateSchemaType {
	dateId: string
}
