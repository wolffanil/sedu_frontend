import { ITimestamps } from '@/shared/types/timestampts.interface'

export interface ITime extends ITimestamps {
	id: string
	dateId: string
	time: string
	isBusy: boolean
	date: {
		service: {
			address: string
			procedure: {
				title: string
			}
		}
	}
}

export interface IResponseGetTimes {
	times: ITime[]
}
