import type { serivceType } from '@/shared/types/procedure.type'
import type { ITimestamps } from '@/shared/types/timestampts.interface'

export interface IService extends ITimestamps {
	id: string
	address: string
	procedureId: string
	duration: string
	serviceType: serivceType
	procedure: {
		title: string
	}
}

export interface ISerivceResponse {
	services: IService[]
}

export interface IServicesWithUserData extends IService {
	user: {
		surname: string
		name: string
	}
}
