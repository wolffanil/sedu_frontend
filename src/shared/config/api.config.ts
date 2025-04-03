import { SERVER_URL } from '../libs/constants/url.constants'

export const API_URL = `${SERVER_URL}/api/v1`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getProfileUrl = (string: string) => `/profile${string}`
export const getProcedureUrl = (string: string) => `/procedures${string}`
export const getServiceUrl = (string: string) => `/services${string}`
export const getUserUrl = (string: string) => `/users${string}`
export const getDateUrl = (string: string) => `/dates${string}`
export const getTimeUrl = (string: string) => `/times${string}`
export const getBookUrl = (string: string) => `/books${string}`
export const getReviewUrl = (string: string) => `/reviews${string}`
