import { ITimestamps } from '@/shared/types/timestampts.interface'

import { TimeSchemaType } from '../schemas/time/time.schema'

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

export interface ITimeCreate extends TimeSchemaType {
	dateId: string
}

export interface ITimeUpdate extends TimeSchemaType {}
