import { type serivceType } from '../types/procedure.type'

export const PUBLIC_URL = {
	root: (url = '') => `${url}`,

	aboutUs: () => PUBLIC_URL.root('/about-us'),

	reviews: () => PUBLIC_URL.root('/reviews'),

	record: (serviceType?: serivceType, procedureId?: string) =>
		PUBLIC_URL.root(
			`/record?${serviceType ? `s-type=${serviceType}&` : ''}${procedureId ? `p-id=${procedureId}` : ''}`
		),

	main: () => PUBLIC_URL.root('/'),

	profile: () => PUBLIC_URL.root('/profile')
}
