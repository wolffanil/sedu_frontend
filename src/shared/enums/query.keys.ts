export const QUERY_KEYS = {
	AUTH: 'auth',
	LOGIN: 'login',
	REGISTER: 'register',
	GOODS: 'procedure',
	TEAM: 'team',
	REVIEWS: 'reviews',
	DATES: 'dates',
	DATES_MASTER: 'dates_master',
	GET_TIMES_BY_DATE_ID: 'getTimesByDateId',
	GET_TIMES_BY_DATE_TIME: 'getTimesByDateTime',
	GET_BOOK_INFO_BY_TIME_ID: 'getBookInfoByTimeId',
	GET_SERVICES_BY_SERVICE_TYPE: 'getServicesByServiceType',
	GET_MY_BOOKS: 'getMyBooks',
	GET_MY_LAST_BOOKS: 'getMyLastBooks'
} as const

export type QUERY_KEYS = (typeof QUERY_KEYS)[keyof typeof QUERY_KEYS]
