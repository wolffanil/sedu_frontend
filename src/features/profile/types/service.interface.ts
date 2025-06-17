import type { serivceType } from '@/shared/types/procedure.type'
import type { ITimestamps } from '@/shared/types/timestampts.interface'

import { ServiceSchemaType } from '../schemas/service.schema'

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

export interface IServiceUpdate extends ServiceSchemaType {
	service: string
}
