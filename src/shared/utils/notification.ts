interface INotification {
	type: 'error' | 'success'
	message: string
}

export async function notification({ type, message }: INotification) {
	const { toast } = await import('react-hot-toast')

	if (type === 'error') toast.error(message)

	if (type === 'success') toast.success(message)

	return
}
