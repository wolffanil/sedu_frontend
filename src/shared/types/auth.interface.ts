import { IUser } from './user.interface'

export enum EnumLocalStorage {
	ACCESS_TOKEN = 'accessToken_salon'
}

export interface ITokens {
	accessToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}

export interface IRegister
	extends Pick<IUser, 'name' | 'surname' | 'phone' | 'email'> {
	password: string
}

export interface IRegisterMutation extends IRegister {
	recaptcha: string
}

export interface ILogin extends Pick<IUser, 'email'> {
	password: string
}
