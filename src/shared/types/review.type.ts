import { type ITimestamps } from './timestampts.interface'
import { type IUser } from './user.interface'

export interface IReview extends ITimestamps {
	id: string
	serivceId: string
	userId: Pick<IUser, 'id'>
	text: string
	user: Pick<IUser, 'photo' | 'name'>
}

export interface IReviewsResponse {
	reviews: IReview[]
}
