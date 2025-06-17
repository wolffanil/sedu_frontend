export const MUTATION_KEYS = {
	LOGOUT: 'logout',

	PROFILE_EDIT: 'profileEdit',
	CREATE_BOOK: 'createBook',
	CANCEL_BOOK: 'cancelBook',
	DELETE_SERVICE_BY_ID: 'deleteServiceById',

	CREATE_SERVICE: 'createService',
	UPDATE_SERVICE: 'updateService',

	CREATE_TIME: 'createTime',
	UPDATE_TIME: 'updateTime',
	DELETE_TIME: 'deleteTime',

	CREATE_DATE: 'createDate',
	UPDATE_DATE: 'updateDate',
	DELETE_DATE: 'deleteDate'
} as const

export type MUTATION_KEYS = (typeof MUTATION_KEYS)[keyof typeof MUTATION_KEYS]
