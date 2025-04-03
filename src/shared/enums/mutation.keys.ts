export const MUTATION_KEYS = {
	LOGOUT: 'logout',

	PROFILE_EDIT: 'profileEdit',
	CREATE_BOOK: 'createBook',
	CANCEL_BOOK: 'cancelBook',
	DELETE_SERVICE_BY_ID: 'deleteServiceById'
} as const

export type MUTATION_KEYS = (typeof MUTATION_KEYS)[keyof typeof MUTATION_KEYS]
