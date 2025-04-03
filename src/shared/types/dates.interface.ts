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
