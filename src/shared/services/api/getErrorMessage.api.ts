export interface IErrorForm {
	type: 'form'
	error: { field: string; message: string }[] | string
}

export interface IErrorMessage {
	type: 'message'
	error: string
}

export function getErrorMessage(stackTrace: any): IErrorForm | IErrorMessage {
	const error = stackTrace?.response?.data

	if (error?.message) {
		return {
			type: 'message',
			error: error.message
		}
	}

	if (error.errors) {
		return {
			type: 'form',
			error: error.errors
		}
	}

	return error
}
